import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import WeaponCard from "./WeaponCard";
import "./Weapon.scss";

export default function WeaponOpen() {
  const [myWeapons, setMyWeapons] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/armes/${id}`)
      .then(({ data }) => {
        setMyWeapons(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="weaponPage">
      <div className="weapon-card">
        <h1>Weapon</h1>
        <div className="modal-form">
          <div className="Weaponcomponent">
            {myWeapons ? <WeaponCard {...myWeapons} card /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
