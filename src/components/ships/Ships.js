import {useEffect, useState} from "react";
import Ship from "../ship/Ship";

const Ships = () => {
    let [ships, setShips] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
        .then((value) => value.json())
        .then(data => {
            setShips(data)
        })
    }, [])
    return (
        <div>
            {ships.map(ship=><Ship key={ship.mission_name}
                                   item={ship}
                                   img={ship.mission_patch_small}

            />)}
        </div>
    );
};

export default Ships;