import { useState } from "react";
function Card(props) {
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    setIsShow((preState) => !preState);
  };
  return (
    <>
      {console.log(props)}

      {/* card */}
      <div className="card">

        <img src={props.Details.image} alt={props.Details.alt} />
        <h1>{props.Details.title}</h1>
        <p>{props.Details.desc}</p>
        {isShow && <p>{props.Details.more}</p>}
        <button className="btn" onClick={handleClick}>
          {props.Details.btn}
          {isShow ? "less" : "more"}
        </button>
      </div>
    </>
  );
}

export default Card;
