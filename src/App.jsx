import "./App.css";
import axios from "axios";
import CardComponent from "./component/CardComponent";
import { useEffect, useState } from "react";

function App() {
  const baseUrl =
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=500&offset=0";
  /*    const archetypesUrl = ' https://db.ygoprodeck.com/api/v7/archetypes.php' */
  let [listCards, setListCards] = useState([]);

  useEffect(() => {
    function getCards() {
      axios
        .get(baseUrl)
        .then((response) => {
          const cardsData = response.data.data;
          setListCards(cardsData);
          console.log("cardsData", cardsData);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getCards();
    return () => {};
  }, []);

  return (
    <>
      <header className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            className="ms-3 img-fluid w-25"
            src="/assets/img/yu-gi-oh-logo.png"
            alt=""
          />
          <h1 className=" text-white">YU-GI-OH API</h1>
        </div>

        <select className="me-3 form-select w-25" name="archetypes" id="">
          <option value="0">seleziona</option>
          <option value="0">hero</option>
          <option value="0">hero2</option>
        </select>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <CardComponent cardName={"luciano Gomme"} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
