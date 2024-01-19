import "./App.css";
import axios from "axios";
import CardComponent from "./component/CardComponent";
import { useEffect, useState } from "react";

function App() {
  let baseUrl =
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=500&offset=0";

  const archetypesUrl = " https://db.ygoprodeck.com/api/v7/archetypes.php";

  let [listArchetypes, setListArchetypes] = useState([]);
  let [listCards, setListCards] = useState([]);
  let [selectedArchetype, setSelectedArchetype] = useState("");

  function getUrl(archetype) {
    return `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${archetype}&num=500&offset=0`;
  }

  const handleArchetypeChange = (e) => {
    const selectedArchetype = e.target.value;
    console.log(selectedArchetype, "selectedArchetype");
    const newUrl = selectedArchetype ? getUrl(selectedArchetype) : baseUrl;
    //console.log(`archetype ${selectedArchetype}`);

    setSelectedArchetype(selectedArchetype);
    getCards(newUrl);
  };

  function getCards(url) {
    axios
      .get(url)
      .then((response) => {
        /* recupro i dati delle carte */
        const cardsData = response.data.data;
        setListCards(cardsData);

        /*   console.log("cardsData", cardsData); */
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getArchetypes() {
    axios.get(archetypesUrl).then((response) => {
      /* recupero gli archetipi delle carte  */
      const archetypesData = response.data;
      setListArchetypes(archetypesData);

      /*  console.log("archetypesData", archetypesData); */
    });
  }

  useEffect(() => {
    getCards(baseUrl);
    getArchetypes();
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
        <select
          className="me-3 form-select w-25"
          name="archetypes"
          id=""
          value={selectedArchetype}
          onChange={handleArchetypeChange}
        >
          <option value="">select an archetype</option>

          {listArchetypes.map((archetype, i) => {
            /*  console.log(archetype); */
            return (
              <option key={i} value={archetype.archetype_name}>
                {archetype.archetype_name}
              </option>
            );
          })}
        </select>
      </header>

      <main>
        <div className="container">
          <div className="row">
            <div className="text-white">
              <h1>card found: {listCards.length}</h1>
            </div>
            {listCards.map((card, i) => {
              /* console.log("Card Data:", card.card_images[0].image_url); */
              return (
                <CardComponent
                  key={i}
                  cardName={card.name}
                  cardImg={card.card_images[0].image_url}
                  cardArchetype={card.archetype}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
