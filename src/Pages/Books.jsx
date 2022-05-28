import React from "react";
import { useState } from "react";
import Lista from "../Components/Lista";
export default function Books(props) {
  const [listOfBooks, setBooks] = useState([
    {
      title: "Game of Thrones",
      author: "George",
      review: "An amazing adventure! ",
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU9wfzRPM8pWKcg22Mm0i5QC74l0L1Dr9qMw&usqp=CAU",
    },
  ]);
  return (
    <div>
      Hello World! I'm at Books
      <Lista list={listOfBooks} />
    </div>
  );
}
