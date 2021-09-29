import React, { useState } from "react";
import "./styles.css";

const genresDictionary = {
  Restaurants: [
    {
      Place: "Souza Lobo",
      rating: "⭐⭐⭐⭐⭐",
      Note: "Best place to try some of the Local Food"
    },
    {
      Place: "Caravela Panjim",
      rating: "⭐⭐⭐⭐",
      Note: "If you are an all day breakfast kinda guy then go to this place"
    },
    {
      Place: "Copperleaf Porvorim",
      rating: "⭐⭐⭐",
      Note: "A classy place for Goan Food"
    }
  ],
  Pubs: [
    {
      Place: "Cohiba ",
      rating: "⭐⭐⭐⭐⭐",
      Note:
        "If you like to party & dance with the best live music in GOA then go to Cohibas!"
    },
    {
      Place: "Soro",
      rating: "⭐⭐⭐⭐",
      Note:
        "A chill place to sit with your friends and liste to some LIVE music"
    },
    {
      Place: "DTR",
      rating: "⭐⭐⭐",
      Note: "Good food and Good Music"
    }
  ],
  Beaches: [
    {
      Place: "Galgibaga Beach ",
      rating: "⭐⭐⭐⭐⭐",
      Note:
        "A goto place if you like to enjoy the beach by yourself. It's less never crowded and peacefull!"
    },
    {
      Place: "Palolem Beach",
      rating: "⭐⭐⭐⭐",
      Note:
        "A nice place to to stay the night. The cottages never dissapoint you!"
    },
    {
      Place: "Cola Beach",
      rating: "⭐⭐⭐",
      Note:
        "Make sure you take bikes cuz otherwise you'll have to walk for almost 30 minutes! "
    }
  ]
};

var placesWeKnow = Object.keys(genresDictionary);
console.log(placesWeKnow);

export default function App() {
  var [place, setPlace] = useState(genresDictionary["Restaurants"]);

  function songClickHandler(visit) {
    var place = genresDictionary[visit];
    setPlace(place);
  }
  return (
    <div className="App">
      <h1>Wanna Know The Best Places to visit in GOA?</h1>

      <h2> Choose Genre </h2>
      {placesWeKnow.map(function (visit) {
        return (
          <button
            style={{ margin: "1rem" }}
            onClick={() => songClickHandler(visit)}
            key={visit}
          >
            {" "}
            {visit}{" "}
          </button>
        );
      })}

      <hr></hr>

      <div>
        <ul>
          {/* {place} */}
          {place.map((entry) => {
            const jsx = (
              <li style={{ padding: "0.2rem" }}>
                <div>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Place:</span>{" "}
                  {entry.Place}{" "}
                </div>
                <div>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Rating:</span>{" "}
                  {entry.rating}
                </div>
                <div> {entry.Note}</div>
              </li>
            );
            return jsx;
          })}
        </ul>
      </div>
    </div>
  );
}
