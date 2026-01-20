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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-session" element={<BookSession />} />
        <Route path = "/products" element = {<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
