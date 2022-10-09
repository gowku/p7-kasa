import img from "../asset/acceuilimg.jpg";
import HomeLogement from "../components/HomeLogement";
import data from "../Data/logements.json";

function Home() {
  return (
    <>
      <section className="imgAcceuil">
        <img src={img} alt="img"></img>
        <div className="overlay"></div>
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
      <main>
        <ul className="location-container">
          {data.map((logement) => (
            <HomeLogement key={logement.id} data={logement} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default Home;
