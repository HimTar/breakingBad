import React, { useState, useEffect } from "react";

import axiosConfig from "../../Utils/axiosConfig";
import { getCharacterDetailURL } from "../../Utils/Constants";

import styles from "./Character.module.css";

const Character = (props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [dob, setDob] = useState("");
  const [occupation, setOccupation] = useState([]);
  const [actor, setActor] = useState("");
  const [season, setSeason] = useState([]);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const { charId } = props.match.params;

    axiosConfig
      .get(getCharacterDetailURL + charId)
      .then((res) => {
        const data = res.data[0];

        setName(data.name);
        setImage(data.img);
        setDob(data.birthday);
        setOccupation(data.occupation);
        setActor(data.portrayed);
        setSeason(data.appearance);
        setQuote(data.quote);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.match.params]);

  console.log(name, image, dob, occupation, actor, season, quote);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={image} alt="Character Img" className={styles.image} />

        <h1 className={styles.data}>Character Name : {name}</h1>
        <h1 className={styles.portray}>Portrayed By : {actor}</h1>
      </div>

      <div className={styles.right}>
        <h1 className={styles.data}>DOB : {dob} </h1>
        <div className={styles.occupation}>
          <h1 className={styles.data}>Occupation: </h1>
          {occupation.map((occupation, key) => {
            return (
              <p className={styles.para} key={key}>
                {occupation}
              </p>
            );
          })}
        </div>

        <div className={styles.occupation}>
          <h1 className={styles.data}>Quotes: </h1>
          {quote &&
            quote.map((quot, key) => {
              return (
                <p className={styles.para} key={key}>
                  {quot}
                </p>
              );
            })}
          {!quote && <p className={styles.para}>No Quotes</p>}
        </div>
      </div>
    </div>
  );
};

export default Character;

// 1. Name & Image of the character
// 2. Date of Birth
// 3. Occupation
// 4. Status (dead or alive)
// 5. Nickname (if present)
// 6. Actor who portrays the character
// 7. Seasons in which the character appears
// 8. All quotes by the character
