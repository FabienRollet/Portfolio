import Contact from "./components/Contact";
import Home from "./components/Home";
import Mémento from "./components/Mémento";
import Projets from "./components/Projets";
import TechnoCV from "./components/TechnoCV";

export default function App() {
  return (
    <body className="text-text-color">
      <Home />
      <main>
        <Mémento />
        <Projets />
        <TechnoCV />
      </main>
      <Contact />
    </body>
  );
}
