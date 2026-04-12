import CourseLayout from "./CourseLayout";
const syllabus = [
  {
    heading: "Classical Hatha Asanas",
    items: [
      "Standing Asanas",
      "Seated Asanas",
      "Supine & Prone Poses",
      "Inversions & Balancing",
      "Surya Namaskar",
    ],
  },
  {
    heading: "Pranayama & Kriyas",
    items: [
      "Nadi Shodhana",
      "Kapalabhati",
      "Bhastrika",
      "Shatkarmas – Cleansing Practices",
      "Bandhas & Mudras",
    ],
  },
  {
    heading: "Teaching Methodology",
    items: [
      "How to Plan a Yoga Class",
      "Cueing & Verbal Instructions",
      "Hands-on Adjustments",
      "Class Sequencing",
      "Managing Different Levels",
    ],
  },
  {
    heading: "Philosophy & Anatomy",
    items: [
      "Hatha Yoga Pradipika",
      "Yoga Sutras of Patanjali",
      "Musculoskeletal Anatomy",
      "Contraindications",
      "Yogic Lifestyle & Diet",
    ],
  },
];
const inclusions = [
  "Live & Recorded Sessions",
  "PDF Study Materials",
  "Soft Copy Certificate",
  "Yoga Alliance Certified",
  "Notes During Course",
];
export default function HathaYoga() {
  return (
    <CourseLayout
      title="Hatha Yoga Teacher Training Course"
      badge="Yoga Alliance Certified • Live on Zoom"
      syllabus={syllabus}
      inclusions={inclusions}
    />
  );
}
