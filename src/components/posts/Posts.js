const Posts = ({postItem}) => {

    return (
        <div>
            {postItem.id} -- {postItem.title}
        </div>
    );
};

export default Posts;