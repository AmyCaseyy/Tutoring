#!/usr/bin/env node

/*
  Backfills tutrSTEM tutor profile subjects into canonical subject IDs.

  Usage:
    GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json node scripts/backfill-tutor-subjects.js

  What it does:
    - Seeds Firestore collections: subjects, subjectModules
    - Reads tutorProfiles
    - Converts exact canonical/alias matches from profile.subject into subjectIds
    - Flags unclear text on the profile for manual review
*/

const admin = require("firebase-admin");

const subjects = [
  { id: "mathematics", canonical_name: "Mathematics", category: "Mathematics", aliases: ["Maths", "Math", "A Level Maths", "A-Level Maths", "AS Maths", "Core Maths (distinct qualification, do not merge)"] },
  { id: "further-mathematics", canonical_name: "Further Mathematics", category: "Mathematics", aliases: ["Further Maths", "FM", "F Maths", "A Level Further Maths", "AFM"] },
  { id: "statistics", canonical_name: "Statistics", category: "Mathematics", aliases: ["A Level Statistics", "Stats A Level"] },
  { id: "biology", canonical_name: "Biology", category: "Sciences", aliases: ["Bio", "A Level Biology"] },
  { id: "chemistry", canonical_name: "Chemistry", category: "Sciences", aliases: ["Chem", "A Level Chemistry"] },
  { id: "physics", canonical_name: "Physics", category: "Sciences", aliases: ["Phys", "A Level Physics"] },
  { id: "environmental-science", canonical_name: "Environmental Science", category: "Sciences", aliases: ["Env Sci", "Environmental Studies (verify not a different quals)"] },
  { id: "geology", canonical_name: "Geology", category: "Sciences", aliases: ["Geological Science"] },
  { id: "computer-science", canonical_name: "Computer Science", category: "Technology & Engineering", aliases: ["CompSci", "Comp Sci", "CS", "Computing"] },
  { id: "electronics", canonical_name: "Electronics", category: "Technology & Engineering", aliases: ["Electronic Engineering"] },
  { id: "engineering", canonical_name: "Engineering", category: "Technology & Engineering", aliases: ["A Level Engineering"] },
  { id: "dt-product-design", canonical_name: "Design and Technology: Product Design", category: "Technology & Engineering", aliases: ["DT Product Design", "D&T Product Design", "Product Design", "Resistant Materials (legacy name)"] },
  { id: "dt-engineering", canonical_name: "Design and Technology: Engineering", category: "Technology & Engineering", aliases: ["DT Engineering", "D&T Engineering"] },
  { id: "economics", canonical_name: "Economics", category: "Economics", aliases: ["Econ", "A Level Economics"] },
  { id: "psychology", canonical_name: "Psychology", category: "Psychology", aliases: ["Psych", "A Level Psychology"] }
];

const modules = [
  { id: "further-maths-mechanics", parent_id: "further-mathematics", canonical_name: "Mechanics", aliases: ["Further Mechanics", "M1", "M2", "Mechanics 1", "Mechanics 2"] },
  { id: "further-maths-statistics", parent_id: "further-mathematics", canonical_name: "Statistics", aliases: ["Further Statistics", "S1", "S2", "Statistics 1", "Statistics 2"] },
  { id: "further-maths-decision", parent_id: "further-mathematics", canonical_name: "Decision Mathematics", aliases: ["Decision Maths", "Discrete Mathematics", "Discrete Maths", "D1", "D2"] },
  { id: "further-maths-further-pure", parent_id: "further-mathematics", canonical_name: "Further Pure Mathematics", aliases: ["Further Pure", "FP1", "FP2", "FP3", "Core Pure"] }
];

function normalize(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildSubjectIndex() {
  const index = new Map();
  subjects.forEach((subject) => {
    [subject.canonical_name, subject.id, ...(subject.aliases || [])].forEach((value) => {
      const key = normalize(value);
      if (key) index.set(key, subject.id);
    });
  });
  return index;
}

function matchSubjectParts(text, index) {
  return String(text || "")
    .split(/[,;/]+/)
    .map((part) => part.trim())
    .filter(Boolean)
    .reduce((result, part) => {
      const matchedId = index.get(normalize(part));
      if (matchedId) result.matched.add(matchedId);
      else result.needsReview.push(part);
      return result;
    }, { matched: new Set(), needsReview: [] });
}

async function main() {
  admin.initializeApp();
  const db = admin.firestore();
  const subjectIndex = buildSubjectIndex();
  const batch = db.batch();

  subjects.forEach((subject) => {
    batch.set(db.collection("subjects").doc(subject.id), {
      id: subject.id,
      canonicalName: subject.canonical_name,
      category: subject.category,
      aliases: subject.aliases || [],
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
  });

  modules.forEach((module) => {
    batch.set(db.collection("subjectModules").doc(module.id), {
      id: module.id,
      parentId: module.parent_id,
      canonicalName: module.canonical_name,
      aliases: module.aliases || [],
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
  });

  const snapshot = await db.collection("tutorProfiles").get();
  snapshot.docs.forEach((doc) => {
    const profile = doc.data();
    const existingIds = Array.isArray(profile.subjectIds) ? profile.subjectIds : [];
    const { matched, needsReview } = matchSubjectParts(profile.subject, subjectIndex);
    const subjectIds = [...new Set([...existingIds, ...matched])].filter((id) => subjects.some((subject) => subject.id === id));
    const update = {
      subjectIds,
      subjectMigrationReviewedAt: admin.firestore.FieldValue.serverTimestamp()
    };
    if (needsReview.length) {
      update.subjectMigrationNeedsReview = true;
      update.subjectMigrationUnmatched = needsReview;
    } else {
      update.subjectMigrationNeedsReview = false;
      update.subjectMigrationUnmatched = [];
    }
    batch.set(doc.ref, update, { merge: true });
  });

  await batch.commit();
  console.log(`Seeded ${subjects.length} subjects, ${modules.length} modules, and checked ${snapshot.size} tutor profiles.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
