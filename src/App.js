import { Routes, Route } from "react-router-dom";
import Landing from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import DaftarKemitraan from "./pages/DaftarKemitraanPage";
import HomePage from "./pages/HomePage";
import News1 from "./pages/Article/Article1";
import News2 from "./pages/Article/Article2";
import NewsHome from "./pages/Article/ArticleHome";
import InfoKemitraan from "./pages/InfoKemitraan";

function App() {
  return (
    <div className="App" data-theme="light">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/daftar-kemitraan" element={<DaftarKemitraan />} />
        <Route path="/news" element={<NewsHome />} />
        <Route path="/news-article1" element={<News1 />} />
        <Route path="/news-article2" element={<News2 />} />
        <Route path="/info-kemitraan" element={<InfoKemitraan />} />
      </Routes>
    </div>
  );
}

export default App;
