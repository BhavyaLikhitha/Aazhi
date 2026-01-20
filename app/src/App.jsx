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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-session" element={<BookSession />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
