import {useEffect, useState} from "react";
import User from "../user/User";

const Users = () => {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({});
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((value) => value.json())
            .then(data => {
                // setUsers(data)
            })
    }, [])

    const userInfo = (user) => {
        setUser(user)
        console.log(user.name)
    }

    return (
        <div>
            {user && <div>{user.id} {user.name} {user.username} {user.email} {user.phone}</div>}
            {users.map(user => <User key={user.id}
                                     item={user}
                                     userI={userInfo}
            />)}
        </div>
    );
};

export default Users;