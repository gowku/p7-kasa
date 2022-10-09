import { useParams } from "react-router-dom";
import EquipementItem from "../components/EquipementItem";
import Tag from "../components/Tag";

function Logement(props) {
  const { id } = useParams();
  const logement = props.data.find((logement) => logement.id === id);
  console.log(logement);
  const hostName = logement.host.name.split(" ");

  return (
    <>
      <section className="pictures">
        <img src={logement.pictures[0]} alt="imgLogement"></img>
        <svg className="left" width="96" height="120" viewBox="0 0 96 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M70.04 15.7831L62.92 8.70312L23.36 48.3031L62.96 87.9031L70.04 80.8231L37.52 48.3031L70.04 15.7831Z" fill="white" />
        </svg>
        <svg className="right" width="96" height="121" viewBox="0 0 96 121" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.96 81.3458L33.04 88.4258L72.64 48.8258L33.04 9.22583L25.96 16.3058L58.48 48.8258L25.96 81.3458Z" fill="white" />
        </svg>
      </section>
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
              <div className="top_host">
                <div className="top_host_name">
                  <p>{hostName[0]}</p>
                  <p>{hostName[1]}</p>
                </div>
                <div className="top_host_img">
                  <img src={logement.host.picture} alt="hôte"></img>
                </div>
              </div>
              <div className="top_right_ratings">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060" />
                </svg>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060" />
                </svg>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060" />
                </svg>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060" />
                </svg>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060" />
                </svg>
              </div>
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
