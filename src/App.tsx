import "./App.css";
import Acordion from "./components/acordion/Acordion";
import CustomCard from "./components/card/CustomCard";
import CarouselComponet from "./components/carousel/Carousel";
import GridCard from "./components/gridCard/GridCard";
import Nav from "./components/navBar/NavBar";

import { cardInformation } from "./infrastructure/headerCardImages";

function App() {
  return (
    <>
      <header>
        <Nav />
        <CarouselComponet />
        <section>
          {
            cardInformation.map((item, index) =>(
              <CustomCard key={index} img={item.img}/>
            ))
          }
        </section>
      </header>
      <main className="newsSection">
        <h2>Últimas Noticias</h2>
        <GridCard />
      </main>
      <main className="acordion">
          <Acordion />
      </main>
    </>
  );
}

export default App;
