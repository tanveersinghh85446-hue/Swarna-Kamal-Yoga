import CourseLayout from "./CourseLayout";
const syllabus = [
  {
    heading: "Yin Yoga Foundations",
    items: [
      "What is Yin Yoga",
      "Yin vs Yang Yoga",
      "Fascia & Connective Tissue",
      "Meridian Theory",
      "Taoist Philosophy",
    ],
  },
  {
    heading: "Yin Asana Practice",
    items: [
      "Long-held Passive Poses",
      "Dragon & Butterfly Sequences",
      "Spinal Yin Poses",
      "Hip Opening Series",
      "Shoulder & Upper Body Release",
    ],
  },
  {
    heading: "Teaching Methodology",
    items: [
      "How to Sequence a Yin Class",
      "Verbal Cues for Yin",
      "Props & Supports",
      "Meditation Integration",
      "Teaching Different Levels",
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
export default function YinYoga() {
  return (
    <CourseLayout
      title="Yin Yoga Teacher Training Course"
      badge="Yoga Alliance Certified • Live on Zoom"
      syllabus={syllabus}
      inclusions={inclusions}
    />
  );
}
