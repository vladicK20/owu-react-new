import {useEffect, useState} from "react";
import {User} from "./User";

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(value => value.json())
            .then(({results}) => {
                setUsers([...results])
            })
    }, []);

    return (
        <div>
            {users.map(user => <User key={user.id}
                                        item={user}
            />)}
        </div>
    );
};

export {Users}