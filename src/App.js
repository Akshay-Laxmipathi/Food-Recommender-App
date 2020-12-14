import React, { useState } from "react";
import "./styles.css";

var foodRecommenderList = {
  soup: [
    { food: "tomato soup", rating: "4/5" },
    { food: "clear veg soup", rating: "2/5" },
    { food: "sweet corn soup", rating: "3/5" },
    { food: "hot and sour soup", rating: "5/5" }
  ],
  starters: [
    { food: "gobi manchurian", rating: "3/5" },
    { food: "babycorn manchurian", rating: "2/5" },
    { food: "gobi chilli", rating: "4/5" },
    { food: "paneer chilli", rating: "5/5" }
  ],
  salad: [
    { food: "coleslaw salad", rating: "4/5" },
    { food: "garden salad", rating: "3/5" },
    { food: "potato salad", rating: "2/5" },
    { food: "pasta salad", rating: "5/5" }
  ],
  main: [
    { food: "veg fried rice", rating: "3/5" },
    { food: "triple schezwan rice", rating: "5/5" },
    { food: "veg hakka noodles", rating: "2/5" },
    { food: "american chop suey", rating: "4/5" }
  ],
  dessert: [
    { food: "rasgulla", rating: "2/5" },
    { food: "ras malai", rating: "4/5" },
    { food: "sandesh", rating: "3/5" },
    { food: "gulab jamun", rating: "5/5" }
  ]
};

var foodList = Object.keys(foodRecommenderList);

export default function App() {
  const [list, setList] = useState("soup");

  function btnClickHandler(btn) {
    setList(btn);
  }

  return (
    <div className="App">
      <h1>Food Recommender App</h1>
      <div>
        Here are some of my favourite foods. Select a course to view the dishes.
      </div>
      {foodList.map(function (course) {
        return (
          <button
            onClick={() => btnClickHandler(course)}
            className="btn"
            key={course}
          >
            {course}
          </button>
        );
      })}
      <hr></hr>
      <ul>
        {foodRecommenderList[list].map((item) => (
          <li className="items" key={item.food}>
            <div>
              {item.food} rated at {item.rating}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
