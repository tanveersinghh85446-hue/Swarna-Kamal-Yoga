import CourseLayout from "./CourseLayout";
const syllabus = [
  {
    heading: "Primary Series",
    items: [
      "Surya Namaskar A & B",
      "Standing Poses",
      "Seated Poses",
      "Finishing Sequence",
      "Vinyasa Transitions",
    ],
  },
  {
    heading: "Bandhas, Drishti & Breath",
    items: [
      "Mula Bandha",
      "Uddiyana Bandha",
      "9 Drishtis",
      "Ujjayi Breathing",
      "Tristhana Method",
    ],
  },
  {
    heading: "Teaching Methodology",
    items: [
      "Mysore Style Teaching",
      "Led Class Format",
      "Adjustments & Assists",
      "Modifications for Beginners",
      "Class Planning",
    ],
  },
  {
    heading: "Philosophy & Anatomy",
    items: [
      "Ashtanga History & Lineage",
      "Yoga Sutras",
      "Anatomy for Vinyasa",
      "Injury Prevention",
      "Yogic Diet",
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
export default function AshtangaVinyasa() {
  return (
    <CourseLayout
      title="Ashtanga Vinyasa Teacher Training Course"
      badge="Yoga Alliance Certified • Live on Zoom"
      syllabus={syllabus}
      inclusions={inclusions}
    />
  );
}
