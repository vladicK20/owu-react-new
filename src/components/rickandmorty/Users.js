import {useEffect, useState} from "react";
import {User} from "./User";

const Users = () => {
    const {users, setUsers} = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then((value) => value.json())
            .then(value => setUsers(value))
    }, []);

    return (
        <div>
            {
                users.map(user => <User key={user.id}
                                        name={user.name}
                                        id={user.id}
                                        status={user.status}
                                        species={user.species}
                                        gender={user.gender}
                                        img={user.image}
                />)
            }
        </div>
    );
};

export {Users}