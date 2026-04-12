import CourseLayout from "./CourseLayout";
const syllabus = [
  {
    heading: "Pranayama & Breathing",
    items: [
      "What is Prana",
      "Sub Pranas and Their Functions",
      "Purification of Nadis",
      "The Science of Breath",
      "Pranayama & The Nervous System",
      "Conscious Breathing",
      "Mechanics of Breathing",
      "Respiratory System Awareness",
      "Sensitizing the Lungs",
      "35 Pranayama Techniques",
    ],
  },
  {
    heading: "Meditation",
    items: [
      "What is Meditation",
      "Meditation Postures",
      "Meditation, Mind & Mantra",
      "Increasing Energy Flow through the Chakras",
      "Yoga Practices for Balancing each Chakra",
      "20 Meditation Techniques",
    ],
  },
  {
    heading: "Mudra Therapy",
    items: [
      "60 Mudra Techniques",
      "Mudra for Health & Healing",
      "Mudra & Prana Flow",
    ],
  },
  {
    heading: "Mantra Chanting",
    items: [
      "25 Mantra Chanting Practices",
      "Importance of Mantras in Your Life",
      "Effects of Mantra on the Brain",
      "Can Mantra Heal Our Body?",
      "Mala for which Mantra",
      "Understanding Mantras",
      "Healing Prayer to Deal with Disease",
      "Chanting / Sound / Vibration to Change Life",
      "Vedic Chanting",
    ],
  },
  {
    heading: "Theory & Philosophy",
    items: [
      "Yogic Philosophy",
      "Teaching Methodology",
      "Alignment & Adjustment",
    ],
  },
];
const inclusions = [
  "Live & Recorded Sessions",
  "Study Materials in PDFs",
  "Soft Copy of Certificate",
  "YACEP Certification Course",
  "Notes Access Free During Course",
];
export default function PranayamaCourse() {
  return (
    <CourseLayout
      title="Pranayama, Mudra & Meditation Teaching Training Course"
      badge="YACEP Certified • Live on Zoom"
      syllabus={syllabus}
      inclusions={inclusions}
    />
  );
}
