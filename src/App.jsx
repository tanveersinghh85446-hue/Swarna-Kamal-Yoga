// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SplashScreen  from "./Components/SplashScreen";
// import Navbar        from "./Components/Navbar";
// import Footer        from "./Components/Footer";
// import Home          from "./Components/Home";
// import About         from "./Pages/About";
// import Apply         from "./Pages/Apply";
// import Blog          from "./Pages/Blog";
// import BlogDetail    from "./Pages/BlogDetail";
// import Contact       from "./Pages/Contact";
// import Courses       from "./Pages/Courses";
// import Gallery       from "./Pages/Gallery";
// import Testimonials  from "./Pages/Testimonials";
// import PranayamaCourse  from "./Pages/CourseDetail/PranayamaCourse";
// import WeightLossCourse from "./Pages/CourseDetail/WeightLossCourse";
// import WomensWellness   from "./Pages/CourseDetail/WomensWellness";
// import Pregnancy        from "./Pages/CourseDetail/Pregnancy";
// import HathaYoga        from "./Pages/CourseDetail/HathaYoga";
// import AshtangaVinyasa  from "./Pages/CourseDetail/AshtangaVinyasa";
// import AsanaAnatomy     from "./Pages/CourseDetail/AsanaAnatomy";
// import FaceYoga         from "./Pages/CourseDetail/FaceYoga";
// import NutritionDiet    from "./Pages/CourseDetail/NutritionDiet";
// import PowerYoga        from "./Pages/CourseDetail/PowerYoga";
// import YinYoga          from "./Pages/CourseDetail/YinYoga";
// import MatPilates       from "./Pages/CourseDetail/MatPilates";
// import TherapyTeacher   from "./Pages/CourseDetail/TherapyTeacher";
// import KidsTraining     from "./Pages/CourseDetail/KidsTraining";

// function App() {
//   const [splashDone, setSplashDone] = useState(false);

//   return (
//     <>
//       {/* Splash Screen */}
//       {!splashDone && (
//         <SplashScreen onFinish={() => setSplashDone(true)} />
//       )}

//       {/* Main Website */}
//       <div className={`transition-opacity duration-700 ${splashDone ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
//         <Router>
//           <Navbar />
//           <Routes>
//             {/* splashDone prop sirf Home ko chahiye */}
//             <Route path="/"             element={<Home splashDone={splashDone} />} />
//             <Route path="/about"        element={<About />}        />
//             <Route path="/apply"        element={<Apply />}        />
//             <Route path="/blog"         element={<Blog />}         />
//             <Route path="/blog/:slug"   element={<BlogDetail />}   />
//             <Route path="/contact"      element={<Contact />}      />
//             <Route path="/courses"      element={<Courses />}      />
//             <Route path="/gallery"      element={<Gallery />}      />
//             <Route path="/testimonials" element={<Testimonials />} />
//             <Route path="/courses/pranayama"       element={<PranayamaCourse />}  />
//             <Route path="/courses/weight-loss"     element={<WeightLossCourse />} />
//             <Route path="/courses/womens-wellness" element={<WomensWellness />}   />
//             <Route path="/courses/pregnancy"       element={<Pregnancy />}        />
//             <Route path="/courses/hatha-yoga"      element={<HathaYoga />}        />
//             <Route path="/courses/ashtanga"        element={<AshtangaVinyasa />}  />
//             <Route path="/courses/asana-anatomy"   element={<AsanaAnatomy />}     />
//             <Route path="/courses/face-yoga"       element={<FaceYoga />}         />
//             <Route path="/courses/nutrition"       element={<NutritionDiet />}    />
//             <Route path="/courses/power-yoga"      element={<PowerYoga />}        />
//             <Route path="/courses/yin-yoga"        element={<YinYoga />}          />
//             <Route path="/courses/mat-pilates"     element={<MatPilates />}       />
//             <Route path="/courses/therapy"         element={<TherapyTeacher />}   />
//             <Route path="/courses/kids-training"   element={<KidsTraining />}     />
//           </Routes>
//           <Footer />
//         </Router>
//       </div>
//     </>
//   );
// }

// export default App;


import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./Components/SplashScreen";
import Navbar       from "./Components/Navbar";
import Footer       from "./Components/Footer";
import Home         from "./Components/Home";
import ComingSoon   from "./Pages/ComingSoon";

// ── Baaki saare pages tab add karna jab ready ho ──
// import About         from "./Pages/About";
// import Apply         from "./Pages/Apply";
// import Blog          from "./Pages/Blog";
// import BlogDetail    from "./Pages/BlogDetail";
// import Contact       from "./Pages/Contact";
// import Courses       from "./Pages/Courses";
// import Gallery       from "./Pages/Gallery";
// import Testimonials  from "./Pages/Testimonials";
// import PranayamaCourse  from "./Pages/CourseDetail/PranayamaCourse";
// import WeightLossCourse from "./Pages/CourseDetail/WeightLossCourse";
// import WomensWellness   from "./Pages/CourseDetail/WomensWellness";
// import Pregnancy        from "./Pages/CourseDetail/Pregnancy";
// import HathaYoga        from "./Pages/CourseDetail/HathaYoga";
// import AshtangaVinyasa  from "./Pages/CourseDetail/AshtangaVinyasa";
// import AsanaAnatomy     from "./Pages/CourseDetail/AsanaAnatomy";
// import FaceYoga         from "./Pages/CourseDetail/FaceYoga";
// import NutritionDiet    from "./Pages/CourseDetail/NutritionDiet";
// import PowerYoga        from "./Pages/CourseDetail/PowerYoga";
// import YinYoga          from "./Pages/CourseDetail/YinYoga";
// import MatPilates       from "./Pages/CourseDetail/MatPilates";
// import TherapyTeacher   from "./Pages/CourseDetail/TherapyTeacher";
// import KidsTraining     from "./Pages/CourseDetail/KidsTraining";

function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {/* Splash Screen */}
      {!splashDone && (
        <SplashScreen onFinish={() => setSplashDone(true)} />
      )}

      {/* Main Website */}
      <div className={`transition-opacity duration-700 ${splashDone ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <Router>
          <Navbar />
          <Routes>

            {/* ✅ Home — Ready */}
            <Route path="/" element={<Home splashDone={splashDone} />} />

            {/* 🚧 Baaki pages — Coming Soon */}
            <Route path="/about"        element={<ComingSoon />} />
            <Route path="/apply"        element={<ComingSoon />} />
            <Route path="/blog"         element={<ComingSoon />} />
            <Route path="/blog/:slug"   element={<ComingSoon />} />
            <Route path="/contact"      element={<ComingSoon />} />
            <Route path="/courses"      element={<ComingSoon />} />
            <Route path="/gallery"      element={<ComingSoon />} />
            <Route path="/testimonials" element={<ComingSoon />} />

            {/* 🚧 Course Detail Pages — Coming Soon */}
            <Route path="/courses/pranayama"       element={<ComingSoon />} />
            <Route path="/courses/weight-loss"     element={<ComingSoon />} />
            <Route path="/courses/womens-wellness" element={<ComingSoon />} />
            <Route path="/courses/pregnancy"       element={<ComingSoon />} />
            <Route path="/courses/hatha-yoga"      element={<ComingSoon />} />
            <Route path="/courses/ashtanga"        element={<ComingSoon />} />
            <Route path="/courses/asana-anatomy"   element={<ComingSoon />} />
            <Route path="/courses/face-yoga"       element={<ComingSoon />} />
            <Route path="/courses/nutrition"       element={<ComingSoon />} />
            <Route path="/courses/power-yoga"      element={<ComingSoon />} />
            <Route path="/courses/yin-yoga"        element={<ComingSoon />} />
            <Route path="/courses/mat-pilates"     element={<ComingSoon />} />
            <Route path="/courses/therapy"         element={<ComingSoon />} />
            <Route path="/courses/kids-training"   element={<ComingSoon />} />

          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;