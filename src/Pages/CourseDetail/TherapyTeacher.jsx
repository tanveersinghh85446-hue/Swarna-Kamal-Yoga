import CourseLayout from "./CourseLayout";
const syllabus = [
  {
    heading: "Yoga Therapy Basics",
    items: [
      "What is Yoga Therapy",
      "Difference: Yoga vs Yoga Therapy",
      "Role of Naturopathy",
      "Ayurvedic Principles",
      "Assessment & Consultation",
    ],
  },
  {
    heading: "Therapy for Common Ailments",
    items: [
      "Back Pain & Sciatica",
      "Arthritis & Joint Issues",
      "Diabetes & Hypertension",
      "Digestive Disorders",
      "Variation & Modifications",
    ],
  },
  {
    heading: "Relaxation & Healing",
    items: [
      "Relaxation Techniques",
      "Yoga Nidra",
      "Restorative Yoga",
      "Pranayama for Healing",
      "Meditation for Therapy",
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
export default function TherapyTeacher() {
  return (
    <CourseLayout
      title="Therapy Teacher Course"
      badge="Certificate Course • Live on Zoom"
      syllabus={syllabus}
      inclusions={inclusions}
    />
  );
}
