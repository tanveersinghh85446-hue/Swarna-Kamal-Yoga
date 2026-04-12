import CourseLayout from "./CourseLayout";
const syllabus = [
  {
    heading: "Kids Yoga Foundations",
    items: [
      "Child Development & Yoga",
      "Age-appropriate Sequencing",
      "Safety Guidelines for Kids",
      "Attention Span Strategies",
      "Fun & Playful Approach",
    ],
  },
  {
    heading: "Kids Yoga Sequences",
    items: [
      "Animal Poses & Stories",
      "Partner Yoga for Kids",
      "Breathing Games",
      "Relaxation for Kids",
      "Creative Play Yoga",
    ],
  },
  {
    heading: "Teaching Kids",
    items: [
      "Classroom Management",
      "Adapting Poses for Children",
      "Parental Communication",
      "Themed Class Planning",
      "Teaching Mindfulness to Kids",
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
export default function KidsTraining() {
  return (
    <CourseLayout
      title="Kids Teacher Training Course"
      badge="Certificate Course • Live on Zoom"
      syllabus={syllabus}
      inclusions={inclusions}
    />
  );
}
