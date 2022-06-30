import {useEffect, useState} from "react";

import {userService} from "../../services";
import User from "../user/User";

const Users = ({postDetail}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
    userService.getAll().then(({data}) => setUsers(data))
    }, [])
    return (
        <div>
            {
                users.map((user, index) => <User
                                                key={index}
                                                item={user}
                                                postDetail={postDetail}
                />)
            }
        </div>
    );
};

export default Users;