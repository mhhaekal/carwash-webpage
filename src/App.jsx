import "./App.css";
import ArticelKemitraan from "./components/ArticelKemitraan";
import HeroKemitraan from "./components/HeroKemitraan";
import HpKemitraan from "./components/HpKemitraan";
import SyaratKemitraan from "./components/SyaratKemitraan";

function App() {
  return (
    <div className="">
      {/* <h1 className="font-montserrat font-bold text-[60px]">Hello world</h1> */}
      <HeroKemitraan />
      <ArticelKemitraan />
      <HpKemitraan />
      <SyaratKemitraan />
    </div>
  );
}

export default App;
