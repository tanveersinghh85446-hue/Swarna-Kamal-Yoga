import React from "react";

const asanas = {
  standing: [
    ["Padangusthasana", "Big Toe Pose"],
    ["Padahastasana", "Hand Under Foot Pose"],
    ["Utthita Trikonasana", "Triangle Pose"],
    ["Parivrtta Trikonasana", "Revolving Triangle Pose"],
    ["Utthita Parsvakonasana", "Extended Side Angle Pose"],
    ["Parivritta Parsvakonasana", "Revolving Side Angle Pose"],
    ["Prasarita Padottanasana A–D", "Intense Wide Leg Stretch"],
    ["Parsvottanasana", "Intense Side Stretch Pose"],
    ["Utthita Hasta Padangusthasana", "Hand to Big Toe Pose"],
    ["Ardha Baddha Padmottanasana", "Half Bound Lotus Forward Bend"],
  ],
  sitting: [
    ["Dandasana", "Staff Pose"],
    ["Paschimottanasana A–C", "Seated Forward Bend"],
    ["Purvottanasana", "Intense East Stretch"],
    ["Ardha Baddha Padma Paschimottanasana", "Half Bound Lotus Forward Bend"],
    ["Tiriang Mukhaipada Paschimottanasana", "Three Limbs West Stretch Pose"],
    ["Janu Sirsasana", "Head to Knee Pose"],
    ["Marichyasana", "Sage Marichi's Pose"],
    ["Navasana", "Boat Pose"],
    ["Bhujapidasana", "Shoulder Pressure Posture"],
    ["Kurmasana", "Tortoise Pose"],
    ["Supta Kurmasana", "Sleeping Tortoise"],
    ["Garbha Pindasana", "Embryo Pose"],
    ["Kukkutasana", "Rooster Pose"],
    ["Baddha Konasana A–B", "Bound Angle Pose"],
    ["Upavista Konasana A–B", "Seated Angle Pose"],
    ["Supta Padangustasana", "Reclining Big Toe Posture"],
    ["Ubhaya Padangusthasana", "Both Big Toes Pose"],
    ["Urdhva Mukha Paschimottasana", "Upward Facing Full Forward Bend"],
    ["Setu Bandhasana", "Bridge"],
    ["Urdhva Dhanurasana", "Upward Bow Posture"],
  ],
  finishing: [
    ["Salamba Sarvangasana", "Shoulderstand"],
    ["Halasana", "Plow"],
    ["Karnapidasana", "Ear Pressure Pose"],
    ["Urdhva Padmasana", "Upward Lotus"],
    ["Pindasana", "Embryo Pose"],
    ["Matsyasana", "Fish Pose"],
    ["Uttana Padasana", "Extended Leg Pose"],
    ["Sirsasana", "Headstand"],
    ["Yoga Mudra", "Sealed Yoga Pose"],
    ["Padmasana", "Lotus"],
    ["Uttpluthi", "Uprooting"],
    ["Savasana", "Corpse Pose"],
  ],
};

function SectionTitle({ number, title }) {
  return (
    <h2 className="text-xl font-bold underline underline-offset-4 mb-3 text-black">
      {number}. {title}
    </h2>
  );
}

function SubSection({ label, children }) {
  return (
    <div className="border-l-2 border-black pl-4 mb-4">
      <p className="font-semibold text-black mb-1">{label}</p>
      {children}
    </div>
  );
}

function AsanaSubheading({ title }) {
  return (
    <p className="text-xs font-semibold tracking-widest uppercase text-black border-b border-black pb-1 mb-3">
      {title}
    </p>
  );
}

function AsanaGrid({ list }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 mb-6">
      {list.map(([name, meaning]) => (
        <div key={name} className="py-1 border-b border-gray-300">
          <span className="text-sm font-light text-black">{name}</span>
          <span className="block text-xs italic text-gray-500">{meaning}</span>
        </div>
      ))}
    </div>
  );
}

export default function AshtangaVinyasa() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-10 bg-white text-black text-sm leading-relaxed">
      {/* Header */}
      <p className="text-xs tracking-widest uppercase font-medium mb-1">
        Swarna Kamal Yoga
      </p>
      <h1 className="text-3xl font-bold underline underline-offset-4 mb-1 text-black">
        Ashtanga Yoga Teacher Training Course
      </h1>
      <p className="italic text-gray-600 mb-5 text-base">
        40-Hour Certified Program
      </p>
      <p className="font-light text-black mb-6">
        This 40-hour Ashtanga Yoga Teacher Training Course offers an immersive
        journey into the traditional Ashtanga Vinyasa system as taught by Sri K.
        Pattabhi Jois. Students will gain a deep understanding of the Primary
        Series, pranayama, bandhas, drishti, and the philosophical foundations
        of this ancient practice.
      </p>

      <hr className="border-black my-7" />

      {/* Section 1 */}
      <SectionTitle number="1" title="Origins & History of Ashtanga Yoga" />
      <p className="font-light text-black mb-6">
        An exploration of the lineage, philosophy, and historical roots of the
        Ashtanga Vinyasa system — tracing its origins to the ancient sage Vamana
        Rishi and its modern revival through Sri T. Krishnamacharya and Sri K.
        Pattabhi Jois.
      </p>

      <hr className="border-black my-7" />

      {/* Section 2 */}
      <SectionTitle
        number="2"
        title="Practical Guidelines for Ashtanga Yoga Practice"
      />
      <p className="font-light text-black mb-6">
        Essential guidance on self-practice, Mysore style, led classes, and the
        foundational principles that support a safe and sustainable Ashtanga
        practice.
      </p>

      <hr className="border-black my-7" />

      {/* Section 3: Diet */}
      <SectionTitle number="3" title="Diet for Ashtanga Yoga Practice" />

      <SubSection label="i. Yogic Diet of Non-Violence">
        <p className="font-light text-black text-sm">
          Understanding ahimsa (non-harming) as the basis of conscious eating
          and its role in supporting deep practice.
        </p>
      </SubSection>

      <SubSection label="ii. Diet Guidelines">
        <ul className="list-disc pl-5 font-light space-y-1 text-sm text-black">
          <li>Sattvic — pure, light, nourishing foods that support clarity</li>
          <li>
            Rajasic — stimulating foods that increase energy and restlessness
          </li>
          <li>Tamasic — heavy, dull foods that promote lethargy</li>
        </ul>
      </SubSection>

      <SubSection label="iii. Cleansing and Purification through Diet">
        <p className="font-light text-black text-sm">
          Dietary practices to purify the body and prepare it for advanced
          pranayama and asana practice.
        </p>
      </SubSection>

      <hr className="border-black my-7" />

      {/* Section 4: Pranayama & Bandhas */}
      <SectionTitle number="4" title="Pranayama & Bandhas" />

      <SubSection label="i. Awakening the Fire Within">
        <p className="font-light text-black text-sm">
          Understanding tapas — the inner heat generated through consistent
          Ashtanga practice.
        </p>
      </SubSection>

      <SubSection label="ii. The Breath of Life: Ujjayi Breathing (Victorious Breath)">
        <p className="font-light text-black text-sm">
          The foundational breathing technique of Ashtanga — creating an oceanic
          sound that anchors the mind and regulates internal heat throughout the
          practice.
        </p>
      </SubSection>

      <SubSection label="iii. Capturing Prana through the Three Bandhas">
        <ul className="list-disc pl-5 font-light space-y-1 text-sm text-black">
          <li>
            <span className="font-medium">Moola Bandha</span> — Root Lock:
            engaging the perineum to contain and direct prana upward
          </li>
          <li>
            <span className="font-medium">Uddiyana Bandha</span> — Flying Lock:
            drawing the lower abdomen inward and upward
          </li>
          <li>
            <span className="font-medium">Jalandhara Bandha</span> — Water Pipe
            Lock: chin-to-chest lock that seals prana in the upper body
          </li>
        </ul>
      </SubSection>

      <hr className="border-black my-7" />

      {/* Section 5: Drishti */}
      <SectionTitle number="5" title="Drishti: Gaze Focusing Technique" />
      <p className="font-light text-black mb-3">
        The nine gazing points (Nava Drishtis) that direct attention inward and
        deepen concentration:
      </p>
      <ol className="list-decimal pl-6 font-light space-y-1 mb-6 text-sm text-black">
        <li>Nasagrai — the space just beyond the tip of the nose</li>
        <li>Ajna chakra — the space between the eyebrows</li>
        <li>Nabi chakra — navel center</li>
        <li>Hastagrai — hand</li>
        <li>Padhayoragrai — toes</li>
        <li>Parshva — far to the right</li>
        <li>Parshva — far to the left</li>
        <li>Angushtha ma dyai — thumbs</li>
        <li>Urdhva drishti / Antara drishti — up to the sky</li>
      </ol>

      <hr className="border-black my-7" />

      {/* Section 6: Primary Series */}
      <SectionTitle number="6" title="Ashtanga Yoga Primary Series Practice" />

      <AsanaSubheading title="Opening" />
      <ul className="list-disc pl-6 font-light space-y-1 mb-6 text-sm text-black">
        <li>
          Opening Prayer / Invocation — <em>Vande Gurunam...</em>
        </li>
        <li>Surya Namaskar A (Sun Salutation A)</li>
        <li>Surya Namaskar B (Sun Salutation B)</li>
      </ul>

      <AsanaSubheading title="Standing Asanas" />
      <AsanaGrid list={asanas.standing} />

      <AsanaSubheading title="Sitting & Supine Asanas" />
      <AsanaGrid list={asanas.sitting} />

      <AsanaSubheading title="Finishing Asanas" />
      <AsanaGrid list={asanas.finishing} />

      <hr className="border-black my-7" />

      <p className="text-center italic text-gray-500 text-sm">
        Closing Prayer — <em>Svasthi Praja...</em>
      </p>
    </div>
  );
}
