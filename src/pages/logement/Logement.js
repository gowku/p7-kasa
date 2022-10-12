import { useEffect } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import Carrousel from "../../components/carrousel/Carrousel";
import Collapse from "../../components/collapse/Collapse";
import Host from "../../components/host/Host";
import Rating from "../../components/rating/Rating";
import Tag from "../../components/tag/Tag";

function Logement({ data }) {
  const { id } = useParams();
  let navigate = useNavigate();
  const logement = data.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logement) {
      console.log("cést undefined");
    }
  }, []);

  // if (logement === undefined) {
  //   navigate("/404-notFound");
  // }

  // let idsLogement = [];
  // data.forEach((el) => {
  //   idsLogement.push(el.id);

  // });
  // console.log(idsLogement);
  console.log(id);

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
                  <Tag key={el} tag={el} />
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
