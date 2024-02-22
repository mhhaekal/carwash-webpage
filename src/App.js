import { Routes, Route } from "react-router-dom";
import Landing from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import DaftarKemitraan from "./pages/DaftarKemitraanPage";
import HomePage from './pages/HomePage';
function App() {
  return (
    <div className="App" data-theme="light">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/daftar-kemitraan' element={<DaftarKemitraan />} />
      </Routes>
    </div>
  );
}

export default App;
