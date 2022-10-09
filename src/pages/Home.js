import img from "../asset/acceuilimg.jpg";
import HomeLogement from "../components/HomeLogement";

function Home(props) {
  return (
    <>
      <section className="imgAcceuil">
        <img src={img} alt="img"></img>
        <div className="overlay"></div>
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
      <main>
        <ul className="location-container">
          {props.data.map((logement) => (
            <HomeLogement key={logement.id} id={logement.id} cover={logement.cover} title={logement.title} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default Home;
