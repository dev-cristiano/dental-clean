import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import OurStudio from "./components/OurStudio/OurStudio.jsx";
import TheStaff from "./components/TheStaff/TheStaff";
import Faq from "./components/Faq/Faq";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <MainContent />
      <OurStudio />
      <TheStaff />
      <Faq />
    </>
  );
}

export default App;
