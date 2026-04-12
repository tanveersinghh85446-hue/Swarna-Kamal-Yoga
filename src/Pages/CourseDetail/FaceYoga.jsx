import CourseLayout from "./CourseLayout";
const syllabus = [
  {
    heading: "Face Yoga Techniques",
    items: [
      "Facial Muscle Anatomy",
      "30+ Facial Exercises",
      "Anti-Aging Routines",
      "Eye & Forehead Exercises",
      "Jawline & Neck Toning",
    ],
  },
  {
    heading: "Acupressure & Wellness",
    items: [
      "Facial Acupressure Points",
      "Lymphatic Drainage",
      "Skin Glow Routine",
      "Stress & Face Connection",
      "Facial Massage Techniques",
    ],
  },
  {
    heading: "Teaching & Practice",
    items: [
      "How to Teach Face Yoga",
      "Class Sequencing",
      "Client Consultation",
      "Diet for Skin Health",
      "Daily Practice Routines",
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
export default function FaceYoga() {
  return (
    <CourseLayout
      title="Face Yoga Certificate Course"
      badge="Certificate Course • Live on Zoom"
      syllabus={syllabus}
      inclusions={inclusions}
    />
  );
}
