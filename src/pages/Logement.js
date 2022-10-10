import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import EquipementItem from "../components/EquipementItem";
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
              {<Rating />}
            </div>
          </div>
          <div className="bottom">
            <div className="bottom_description">
              <div className="bottom_description_title">
                <p>Description</p>
                <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.800025 13.9866L3.16003 16.3466L14 5.50662L24.84 16.3466Z" fill="white" />
                </svg>
              </div>
              <div className="bottom_description_texte">
                <p>{logement.description}</p>
              </div>
            </div>
            <div className="bottom_description">
              <div className="bottom_description_title">
                <p>Equipement</p>
                <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.800025 13.9866L3.16003 16.3466L14 5.50662L24.84 16.3466Z" fill="white" />
                </svg>
              </div>
              <div className="bottom_description_texte">
                <ul>
                  {logement.equipments.map((el) => (
                    <EquipementItem item={el} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Logement;
