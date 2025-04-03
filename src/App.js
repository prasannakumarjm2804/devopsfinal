import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer component
import Chatbot from "./components/Chatbot"; // Import Chatbot component
import UserDetailsPopup from "./pages/UserDetailsPopup";
import LoginForm from "./components/LoginForm";
import "./App.css";
import "./styles/Courses.css";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user"))); // Get user from localStorage

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm setUser={setUser} />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/userdetail" element={<UserDetailsPopup />} />
        <Route path="/:userId/home" element={<HomePage />} />
        <Route path="/:userId/courses" element={<Courses />} />
        <Route path="/:userId/courses/:courseId" element={<CourseDetail />} />
        <Route path="/:userId/about" element={<About />} />
        <Route path="/:userId/shop" element={<Shop />} />
        <Route path="/:userId/contacts" element={<Contact />} />
        <Route path="/:userId/cart" element={<Cart />} />
        <Route path="/:userId/dashboard" element={<HomePage />} /> {/* Assuming HomePage is the Dashboard page */}
        <Route path="/:userId/*" element={<Navigate to={`/${user ? user.id : ''}/home`} />} /> {/* Redirect all other routes to home */}
      </Routes>
      <Footer /> {/* Add Footer component */}
      <Chatbot /> {/* Add Chatbot component */}
    </Router>
  );
};

export default App;
