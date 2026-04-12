import CourseLayout from "./CourseLayout";
const syllabus = [
  {
    heading: "Nutrition Fundamentals",
    items: [
      "Macronutrients & Micronutrients",
      "Yogic Diet Principles",
      "Importance of Water in Weight Loss",
      "Different Types of Diets",
      "Gut Health & Digestion",
    ],
  },
  {
    heading: "Meal Planning",
    items: [
      "How to Create a Perfect Meal Plan",
      "Calorie Calculation",
      "Diet for Yoga Practitioners",
      "Seasonal & Ayurvedic Eating",
      "Anti-inflammatory Diet",
    ],
  },
  {
    heading: "Practical Application",
    items: [
      "Client Diet Consultation",
      "Naturopathy Role in Health",
      "Detox & Cleansing Diets",
      "Supplements & Herbs",
      "Teaching Nutrition Workshops",
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
export default function NutritionDiet() {
  return (
    <CourseLayout
      title="Nutrition Diet Course"
      badge="Certificate Course • Live on Zoom"
      syllabus={syllabus}
      inclusions={inclusions}
    />
  );
}
