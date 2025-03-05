import Acordion from "./components/acordion/Acordion";
import CustomCard from "./components/card/CustomCard";
import CarouselComponet from "./components/carousel/Carousel";
import GridCard from "./components/gridCard/GridCard";
import Nav from "./components/navBar/NavBar";

import "./App.css";

import { cardInformation } from "./infrastructure/headerCardImages";
import VideoPlayer from "./components/video/VideoPlayer";

function App() {
  return (
    <>
      <header>
        <Nav />
        <CarouselComponet />
        <section>
          {cardInformation.map((item, index) => (
            <CustomCard key={index} img={item.img} />
          ))}
        </section>
      </header>
      <main className="newsSection">
        <h2>Últimas Noticias</h2>
        <GridCard />
      </main>
      <main className="acordion">
        <Acordion />
        <VideoPlayer
          url="https://www.youtube.com/watch?v=BH8azKgncwk&list=PLOvyGQVi5ZCke6lNjz40tySyvtBWIRFs2&t=4s"
          title="Liquidaciones"
        />
      </main>
    </>
  );
}

export default App;
