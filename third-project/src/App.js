import React from "react";
import "./style.css";
import Card from "./components/card";
class App extends React.Component {
  render() {
    const data = [
      {
        image:
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wildlifephototours.com%2Fwp-content%2Fuploads%2F2018%2F08%2Ftiger-stalking-bandhavgarh-tour.jpg&f=1&nofb=1&ipt=70d7d32a085caf921618bc263f71cb6d5da2fddcf8904163e945601f20357afd&ipo=images",
        alt: "animal",
        title: "Tiger",
        desc: `The tiger is the largest living cat species and a member of the
        genus Panthera.`,
          more: " It is most recognisable for its dark vertical stripes on orange fur with a white underside.",
        btn: "learn ",
      },

      {
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.washingtonian.com%2Fwp-content%2Fuploads%2F2019%2F02%2Falexandru-zdrobau-176844-unsplash.jpg&f=1&nofb=1&ipt=292f0024daeed1018113dfcae3cafd9aeabe279c806e8d2c3e50df234d3c5712&ipo=images",
        alt: "animal",
        title: "cat ",
        desc: ` The cat is a domestic species of small carnivorous mammal. It is
        the only domesticated species `,
        more: "In the family Felidae and is commonly referred to as the domestic cat",
        btn: "learn ",
      },

      {
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gannett-cdn.com%2Fpresto%2F2019%2F03%2F20%2FPAPP%2F99a8a89f-fd3b-4a4c-8258-c187850a455a-GettyImages-516766620.jpg%3Fcrop%3D5183%2C2902%2Cx0%2Cy0%26width%3D3200%26height%3D1680%26fit%3Dbounds&f=1&nofb=1&ipt=0eb12e0df1eb969eedbff0ff39d7859ad92b1daeb599d36e0fe82fb927282a1b&ipo=images",
        alt: "animal",
        title: "dog",
        desc: ` The dog is a domesticated descendant of the wolf. Also called the
              domestic dog, `,
        more: "it is derived from the extinct Pleistocene wolf, and the modern wolf is the dog's ",
        btn: "learn ",
      },

      {
        image:
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F_N_mOB63qPaE%2FTNmNLiz7XHI%2FAAAAAAAAQpg%2Fq8mTnBvIvQo%2Fs1600%2FCloseup-Lions-Wallpaper.jpg&f=1&nofb=1&ipt=b0c94e786434901f71106770fe1bc2472c0c4fba5af5413f3803e1db42363513&ipo=images",
        alt: "animal",
        title: "lion",
        desc: `The lion is a large cat of the genus Panthera native to Africa and
              India. `,
        more: "It has a muscular, broad-chested body; short, rounded head; round ears",
        btn: "learn ",
      },
    
    ];   
  


 
    return (
      <>
        <h1 className="head">Animals</h1>
        <div className="container">
         {data.map((cardDetail)=> <Card Details={cardDetail}/>)}
         
          {/* <Card  Details={card[0]} />
          <Card  Details={data[1]} />
          <Card  Details={data[2]} />
          <Card  Details={data[3]} /> */}
        </div>
      </>
    );
  }
}

export default App;
