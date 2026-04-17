import CourseLayout from "./CourseLayout";
const syllabus = [
  {
    heading: "Asana & Movement",
    items: [
      "Asana Sequences",
      "Sun Salutation Sequences",
      "Strength Training",
      "Swiss Ball – Balance and Core Training",
      "Speed Training",
      "Circuit Training",
      "Whole Body Strength for Women",
    ],
  },
  {
    heading: "Flexibility & Stretching",
    items: [
      "Static Flexibility Exercises",
      "Dynamic vs Static Stretching",
      "Flexibility Training Stretching",
      "Mobility Exercises for Flexibility",
      "Pilates Sequence",
    ],
  },
  {
    heading: "Training Methods",
    items: [
      "TABATA vs HIIT",
      "Core Stability & Strengthening",
      "Variation & Modification for People with Ailments",
    ],
  },
  {
    heading: "Nutrition & Diet",
    items: [
      "Yogic Diet and Nutrition",
      "How to Create a Perfect Meal Plan",
      "Different Types of Diets",
      "Importance of Water in Weight Loss",
      "Role of Naturopathy in Weight Loss",
    ],
  },
  {
    heading: "Yoga & Wellness",
    items: [
      "Pranayamas & Mudras for Weight Loss",
      "Relaxation Techniques",
      "Meditations",
      "Spiritual Healing Mantras for Weight Loss",
      "Obesity – Causes & Side Effects",
    ],
  },
];
const inclusions = [
  "Live & Recorded Sessions",
  "Study Materials in PDFs",
  "Soft Copy of Certificate",
  "Notes Access Free During Course",
  "Access to Recordings Online",
];
export default function WeightLossCourse() {
  return (
    <CourseLayout
      title="Weight Loss Coach Certification"
      tags={["June 4th", "7:00 PM IST", "Live on Zoom"]}
      syllabus={syllabus}
      inclusions={inclusions}
    />
  );
}
