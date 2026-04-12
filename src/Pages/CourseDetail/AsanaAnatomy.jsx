import CourseLayout from "./CourseLayout";
const syllabus = [
  {
    heading: "Anatomy Foundations",
    items: [
      "Skeletal System",
      "Muscular System",
      "Joint Mechanics",
      "Spine Anatomy",
      "Nervous System Basics",
    ],
  },
  {
    heading: "Alignment Principles",
    items: [
      "Postural Assessment",
      "Safe Alignment in Key Poses",
      "Common Misalignments",
      "Use of Props",
      "Cueing for Alignment",
    ],
  },
  {
    heading: "Injury Prevention",
    items: [
      "Common Yoga Injuries",
      "Contraindications per Pose",
      "Modifications for Ailments",
      "Warm-up & Cool-down",
      "Safe Hands-on Adjustments",
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
export default function AsanaAnatomy() {
  return (
    <CourseLayout
      title="Asana Anatomy & Alignment Course"
      badge="Certificate Course • Live on Zoom"
      syllabus={syllabus}
      inclusions={inclusions}
    />
  );
}
