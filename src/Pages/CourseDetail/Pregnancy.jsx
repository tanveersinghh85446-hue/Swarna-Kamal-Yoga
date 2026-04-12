import CourseLayout from "./CourseLayout";
const syllabus = [
  {
    heading: "Prenatal Yoga",
    items: [
      "Safe Asanas During Pregnancy",
      "Trimester-wise Modifications",
      "Breathing for Labour",
      "Pelvic Floor Exercises",
      "Stress Relief Techniques",
    ],
  },
  {
    heading: "Postnatal Recovery",
    items: [
      "Postnatal Yoga Sequences",
      "Core Rebuilding",
      "Breastfeeding-friendly Poses",
      "Baby Yoga Bonding",
      "Hormonal Balance Postpartum",
    ],
  },
  {
    heading: "Theory & Anatomy",
    items: [
      "Reproductive Anatomy",
      "Physiological Changes in Pregnancy",
      "Contraindications & Safety",
      "Teaching Methodology",
      "Diet & Nutrition in Pregnancy",
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
export default function Pregnancy() {
  return (
    <CourseLayout
      title="Pregnancy and Postnatal"
      badge="Live on Zoom"
      syllabus={syllabus}
      inclusions={inclusions}
    />
  );
}
