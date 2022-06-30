import Users from "./components/users/Users";
import {useState} from "react";

import Posts from "./components/posts/Posts";
import {postService} from "./services";

function App() {
    const [posts, setPosts] = useState([]);

    const postDetail = (id) => {
        postService.getPostById(id).then(({data}) => setPosts([...data]))
        console.log(id)
    }
    return (
        <div>
            {
                posts.map(post => <Posts key={post.id} postItem={post}/>)
            }
            <Users postDetail={postDetail}/>
        </div>
    );
}

export default App;
