import CourseLayout from "./CourseLayout";
const syllabus = [
  {
    heading: "Theory & Philosophy",
    items: [
      "Anatomy & Physiology – Reproductive & Endocrine System",
      "Hormonal Imbalance & Reproductive Health Disorders",
      "Pathology behind PCOS, Fibroid, Menstrual Irregularities, UTI & Thyroid",
      "How to Prevent & Cure Women's Health Disorders with Yoga",
      "Infertility Causes & Therapy – Yoga & Modern Science",
    ],
  },
  {
    heading: "Practice Sessions",
    items: [
      "Yoga for Healthy Metabolism & Reproductive Health",
      "Yoga for Prevention & Therapy in Infertility",
      "Yoga Therapy – Menstrual Health Disorders",
      "Yoga Therapy for PCOS / Fibroid / Endometriosis",
      "Yoga Therapy for Thyroid Disorder",
      "Yoga for Obesity",
    ],
  },
  {
    heading: "Pelvic Floor & Hormonal Health",
    items: [
      "Pelvic Floor Anatomy",
      "Managing Menopause & Osteoarthritis",
      "Hormonal Imbalance Control",
      "Women's Reproductive Health – Menstruation, Fertility, Pregnancy, Menopause",
    ],
  },
  {
    heading: "Nutrition & Fitness",
    items: [
      "Nutrition & Fitness for Women's Health",
      "Healthy Eating & Posture Strategies",
      "Ayurvedic Approach to Women's Health",
      "Balancing the Doshas",
      "Natural Remedies for Reproductive Wellbeing",
    ],
  },
  {
    heading: "Yoga & Relaxation",
    items: [
      "Yoga & Meditation for Physical & Emotional Wellbeing",
      "Relaxation Techniques (I, Q, D, P)",
      "Mudra Therapy",
      "Pranayamas & Meditation Techniques",
      "Practical Application in Daily Life",
      "Gentle Strength Building & Restorative Poses",
    ],
  },
];
const benefits = [
  "Address Hormonal Imbalance",
  "Support Through Fertility Challenges",
  "Pregnancy & Postpartum Care",
  "Menopause Management",
  "Address Auto Immune Disorders",
  "Promote Preventative Health",
  "Mental Health Support",
  "Mindfulness & Emotional Wellbeing",
  "Stress Management Techniques",
  "Specialized: PCOD/PCOS, Infertility, Anxiety, Depression",
];
const inclusions = [
  "40 Live Zoom Sessions",
  "Fee: ₹9,000",
  "3 Months Access",
  "Access to Recordings Online",
  "PDF Study Materials",
  "Notes Access Free During Course",
];
export default function WomensWellness() {
  return (
    <CourseLayout
      title="Women's Health Coach Certification"
      tags={["June 4th", "12:00 PM IST", "40 Sessions"]}
      badge="Fee: ₹9,000 • Live on Zoom"
      syllabus={syllabus}
      inclusions={inclusions}
      benefits={benefits}
    />
  );
}
