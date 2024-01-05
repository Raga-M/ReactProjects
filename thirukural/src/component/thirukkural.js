import React, { useState, useEffect } from "react";

export default function Thirukkural() {
  const random = () => {
    let k = Math.floor(Math.random() * 1331);
    if (k === 0) {
      k++;
    }
    return k;
  };
  const [count, setCount] = useState(random());
  const [kural, setKural] = useState(null);
  function change() {
    let c = random();
    setCount(c);
  }


  useEffect(() => {
    console.log("render");

    async function fetchData() {
      const response = await fetch(
`https://getthirukkural.appspot.com/api/3.0/kural/${count}?appid=i0xlh180dwbhy`
      ).catch((err) => setKural(err.message));
      const res = await response.json();
      setKural(res);
    }

    fetchData();
  }, [count]);
console.log(kural)
  return (
    <>
     <div className="container">
     <h1> திருக்குறள் </h1>
       {console.log(kural)}

      <pre>
        {" "}
        குறள்:{kural?.number} <span>பால்:{kural?.paal}</span>
      </pre>
      <p className="tamil">{kural?.line1}</p>
      <p className="tamil">{kural?.line2}</p>
      <h1>விளக்கம்</h1>

<p className="explain tamil">
  {kural?.urai1}
</p>
<h1>English</h1>
<p className="explain">{kural?.translation}</p>
      <button className="btn" onClick={change}>
        அடுத்தது/Next
      </button>
     </div>
</>
  );
}
