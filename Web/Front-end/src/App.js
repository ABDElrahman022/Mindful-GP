import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/navbar/Navbar';
import HomePage from '../src/components/home_page/HomePage';
import Footer from '../src/components/footer/Footer';
import LoginPage from '../src/components/login_page/LoginPage'
import AdvicesAndArticles from '../src/components/advices&articles/Advices&Articles';
import RegisterationPage from '../src/components/registration_page/RegistrationPage';
import AsUser from '../src/components/as_user/AsUser';
import AsDoctor from '../src/components/as_doctor/AsDoctor';
import AboutUs from "../src/components/about_us/AboutUs";
import Depression from "../src/components/mental_disorders/Depression";
import AnxietyDisorders from "../src/components/mental_disorders/AnxietyDisorders";
import Schizophrenia from "../src/components/mental_disorders/Schizophrenia";
import BipolarDisorder from "../src//components/mental_disorders/BipolarDisorder";
import OCD from "../src/components/mental_disorders/OCD";
import PTSD from "../src/components/mental_disorders/PTSD";
import EatingDisorders from "../src/components/mental_disorders/EatingDisorders";
import BPD from "../src/components/mental_disorders/BPD";
import ADHD from "../src/components/mental_disorders/ADHD";
import PsychologicalTests from "../src/components/psychological_tests/PsychologicalTests";
import Therapists from "../src/components/therapists/Therapists";
import Stories from './components/stories/Stories';
import ForgotPassword from './components/forgot_password/ForgotPassword';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      
      <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/advices-and-articles" element={<AdvicesAndArticles />} /> 
          <Route path="/login_page" element={<LoginPage />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/registeration_page" element={<RegisterationPage />}>
          <Route path="as_user" element={<AsUser />} />
          <Route path="as_doctor" element={<AsDoctor />} /></Route>
          <Route path="/mental_disorders/Depression" element={<Depression />} />
          <Route path="/mental_disorders/AnxietyDisorders" element={<AnxietyDisorders />} />
          <Route path="/mental_disorders/Schizophrenia" element={<Schizophrenia/>} />
          <Route path="/mental_disorders/BipolarDisorder" element={<BipolarDisorder/>} />
          <Route path="/mental_disorders/OCD" element={<OCD/>} />
          <Route path="/mental_disorders/PTSD" element={<PTSD/>} />
          <Route path="/mental_disorders/EatingDisorders" element={<EatingDisorders/>} />
          <Route path="/mental_disorders/BPD" element={<BPD/>} />
          <Route path="/mental_disorders/ADHD" element={<ADHD/>} />
          <Route path="/psychological_tests" element={<PsychologicalTests/>} />
          <Route path="/therapists" element={<Therapists/>} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
      <Footer />  
    </div>
    </Router>
  );
}

export default App;
