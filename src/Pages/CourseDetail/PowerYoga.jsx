import CourseLayout from "./CourseLayout";
const syllabus = [
  {
    heading: "Strength & Conditioning",
    items: [
      "Strength Training with Yoga",
      "Circuit Training",
      "Swiss Ball Core Training",
      "HIIT & Tabata",
      "Speed Training",
    ],
  },
  {
    heading: "Yoga Sequences",
    items: [
      "Power Vinyasa Flow",
      "Core Stability Sequences",
      "Whole Body Strength for Women",
      "Dynamic Warm-ups",
      "Flexibility Training",
    ],
  },
  {
    heading: "Teaching & Theory",
    items: [
      "Class Sequencing for Power Yoga",
      "Cueing High-Energy Classes",
      "Modifications for Beginners",
      "Anatomy for Power Yoga",
      "Injury Prevention",
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
export default function PowerYoga() {
  return (
    <CourseLayout
      title="Power Yoga Course"
      badge="Certificate Course • Live on Zoom"
      syllabus={syllabus}
      inclusions={inclusions}
    />
  );
}
