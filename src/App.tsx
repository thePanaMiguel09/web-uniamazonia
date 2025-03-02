import "./App.css";
import CustomCard from "./components/card/CustomCard";
import CarouselComponet from "./components/carousel/Carousel";
import GridCard from "./components/gridCard/GridCard";
import Nav from "./components/navBar/NavBar";

function App() {
  return (
    <>
      <header>
        <Nav />
        <CarouselComponet />
        <section>
          <CustomCard />
        </section>
      </header>
      <main className="newsSection">
        <h2>Últimas Noticias</h2>
        <GridCard />
      </main>
    </>
  );
}

export default App;
