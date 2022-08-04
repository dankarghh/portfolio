import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
