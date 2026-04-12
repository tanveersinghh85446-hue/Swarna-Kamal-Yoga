import CourseLayout from "./CourseLayout";
const syllabus = [
  {
    heading: "Pilates Fundamentals",
    items: [
      "History & Philosophy of Pilates",
      "6 Pilates Principles",
      "Breathing in Pilates",
      "Core Anatomy",
      "Postural Assessment",
    ],
  },
  {
    heading: "Mat Pilates Sequences",
    items: [
      "Classical Mat Sequence",
      "Swiss Ball Training",
      "Flexibility & Stretching",
      "Core Strengthening Exercises",
      "Whole Body Conditioning",
    ],
  },
  {
    heading: "Teaching & Certification",
    items: [
      "How to Teach Mat Pilates",
      "Class Sequencing",
      "Modifications & Progressions",
      "Client Assessment",
      "Safety & Contraindications",
    ],
  },
];
const inclusions = [
  "Live & Recorded Sessions",
  "PDF Study Materials",
  "Soft Copy Certificate",
  "Notes During Course",
  "Access to Recordings",
];
export default function MatPilates() {
  return (
    <CourseLayout
      title="MAT Pilates Instructor Certification"
      badge="Certificate Course • Live on Zoom"
      syllabus={syllabus}
      inclusions={inclusions}
    />
  );
}
