import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Tag from "../components/Tag";

function Logement(props) {
  const { id } = useParams();
  const logement = props.data.find((logement) => logement.id === id);
  // console.log(logement);

  return (
    <>
      {<Carrousel pictures={logement.pictures} />}
      <main className="main_logement">
        <div className="info">
          <div className="top">
            <div className="top_left">
              <div className="top_left_where">
                <h2 className="top_left_where_title">{logement.title}</h2>
                <p className="top_left_where_location">{logement.location}</p>
              </div>
              <div className="top_tags">
                {logement.tags.map((el) => (
                  <Tag tag={el} />
                ))}
              </div>
            </div>
            <div className="top_right">
              {<Host host={logement.host} />}
              {<Rating rating={logement.rating} />}
            </div>
          </div>
          <div className="bottom">
            {<Collapse logementTitle={"Description"} logementDescription={logement.description} />}
            {<Collapse equipementTitle={"Équipement"} equipementDescription={logement.equipments} />}
          </div>
        </div>
      </main>
    </>
  );
}

export default Logement;
