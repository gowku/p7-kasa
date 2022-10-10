import React, { useState } from "react";

function Carrousel(props) {
  // console.log(props.pictures[1]);
  const [current, setCurrent] = useState(0);
  const length = props.pictures.length;

  const handleRight = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const handleLeft = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  return (
    <section className="carrousel">
      {props.pictures.map((pic, index) => (
        <div className={index === current ? "active" : ""} key={index}>
          {index === current && <img key={index} src={pic} alt="carrousel"></img>}
        </div>
      ))}
      {/* <img src={props.pictures[2]} alt="carrousel"></img> */}
      <svg className="left" onClick={handleLeft} width="96" height="120" viewBox="0 0 96 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M70.04 15.7831L62.92 8.70312L23.36 48.3031L62.96 87.9031L70.04 80.8231L37.52 48.3031L70.04 15.7831Z" fill="white" />
      </svg>
      <svg className="right" onClick={handleRight} width="96" height="121" viewBox="0 0 96 121" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.96 81.3458L33.04 88.4258L72.64 48.8258L33.04 9.22583L25.96 16.3058L58.48 48.8258L25.96 81.3458Z" fill="white" />
      </svg>
    </section>
  );
}

export default Carrousel;
