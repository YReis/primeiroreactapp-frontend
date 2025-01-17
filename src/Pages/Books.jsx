import React from "react";
import { useState } from "react";
import Lista from "../Components/Lista/Lista";
import { useNavigate } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import Listinput from "../Components/Moviesinput/listinput";
import { Pie } from "@antv/g2plot";
import DemoPie from "../Components/Charts/Pie"
import { padding } from "@mui/system";
export default function Books(props) {
  const [listofBooks, setBooks] = useState([
    {
      title: "Game of Thrones",
      author: "George",
      review: "An amazing adventure! ",
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU9wfzRPM8pWKcg22Mm0i5QC74l0L1Dr9qMw&usqp=CAU",
      category: "Aventura",
    },
  ]);

  const navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={() => {
          navigate("/home");
        }}
      >
        Home
      </Button>

      <Listinput
        apagarlista={(listavazia) => {
          return setBooks([]);
        }}
        pegarvalordofilho={(valordofilho) => {
          // console.log(...lmovies)
          // console.log(lmovies)
          // console.log([lmovies])
          // console.log([...lmovies])
          return setBooks([valordofilho, ...listofBooks]);
        }}
      />
     <Stack
     direction="row"
     sx={{width:"100%"}}
     spacing={4}
     

      >
      <Lista
        delete={(valordofilho, indexDoFilho) => {
          return setBooks(
            listofBooks.filter((eo, i) => {
              return i !== indexDoFilho;
            })
          );
        }}
        list={listofBooks}
      />
     <div style={{width:"500px"}}> <DemoPie todasAsObras={listofBooks}/></div>
     </Stack>
    </div>
  );
}
