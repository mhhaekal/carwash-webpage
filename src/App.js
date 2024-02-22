import { Routes, Route } from "react-router-dom";
import Landing from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import DaftarKemitraan from "./pages/DaftarKemitraanPage";
function App() {
  return (
    <div className="App" data-theme="light">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/daftar-kemitraan' element={<DaftarKemitraan />} />
      </Routes>
    </div>
  );
}

export default App;
