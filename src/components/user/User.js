const User = ({item, postDetail}) => {
    return (
        <div>
            <h2>{item.id} - {item.name}</h2>
            <button onClick={() => {
            postDetail(item.id)
            }}>click to show all posts</button>
        </div>
    );
};

export default User;