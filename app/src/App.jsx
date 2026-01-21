// import HomePage from './Components/Homepage/HomePage';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import './App.css'

// function App() {
//   return (
//     <>
//       <Router>
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//             </Routes>
//         </Router>
//     </>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/Homepage/HomePage';
import BookSession from "./Components/Book Session/session";
import Products from "./Components/Products/Products";
import AboutUs from "./Components/About us/About";
import Blogs from "./Components/Blogs/Blogs";
import Login from "./Components/Login/Login";
import Admin from "./Components/Admin Page/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-session" element={<BookSession />} />
        <Route path = "/products" element = {<Products />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path = "/blog" element = {<Blogs />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/admin" element = {<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
