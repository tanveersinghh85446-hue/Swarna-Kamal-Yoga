// import CourseLayout from "./CourseLayout";
// const syllabus = [
//   {
//     heading: "Anatomy Foundations",
//     items: [
//       "Skeletal System",
//       "Muscular System",
//       "Joint Mechanics",
//       "Spine Anatomy",
//       "Nervous System Basics",
//     ],
//   },
//   {
//     heading: "Alignment Principles",
//     items: [
//       "Postural Assessment",
//       "Safe Alignment in Key Poses",
//       "Common Misalignments",
//       "Use of Props",
//       "Cueing for Alignment",
//     ],
//   },
//   {
//     heading: "Injury Prevention",
//     items: [
//       "Common Yoga Injuries",
//       "Contraindications per Pose",
//       "Modifications for Ailments",
//       "Warm-up & Cool-down",
//       "Safe Hands-on Adjustments",
//     ],
//   },
// ];
// const inclusions = [
//   "Live & Recorded Sessions",
//   "PDF Study Materials",
//   "Soft Copy Certificate",
//   "Notes During Course",
//   "Access to Recordings",
// ];
// export default function AsanaAnatomy() {
//   return (
//     <CourseLayout
//       title="Asana Anatomy & Alignment Course"
//       badge="Certificate Course • Live on Zoom"
//       syllabus={syllabus}
//       inclusions={inclusions}
//     />
//   );
// }



import CourseLayout from "./CourseLayout";

const syllabus = [
  {
    heading: "Anatomy Foundations",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
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
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5",
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
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3",
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
      syllabus={
        <div className="grid md:grid-cols-3 gap-6">
          {syllabus.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              {/* Image */}
              <img
                src={section.image}
                alt={section.heading}
                className="h-40 w-full object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {section.heading}
                </h3>

                <ul className="text-sm text-gray-600 space-y-1">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      }
      inclusions={
        <div className="grid md:grid-cols-2 gap-3">
          {inclusions.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-green-50 p-3 rounded-lg"
            >
              <span className="text-green-600 text-lg">🎯</span>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      }
    />
  );
}