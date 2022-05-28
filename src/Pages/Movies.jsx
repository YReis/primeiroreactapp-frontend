import React, { useState } from "react";
import Lista from "../Components/Lista";
export default function Home(props) {
  const [listOfMovies, setlist] = useState([
    {
      title: "Interestellar",
      author: "steven Spielberg",
      review: "Way better than Star Wars!",
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK1inCUpr9piU8NFA_SL-m8bQDossAgaCOvw&usqp=CAU",
    },
  ]);
  return (
    <div>
      {" "}
      Hello World! I'm at Movies
      <Lista list={listOfMovies} />
    </div>
  );
}
