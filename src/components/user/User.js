const User = ({item, userI}) => {
    return (
        <div>
            <h2>{item.id} - {item.name}
                <button style={{marginLeft: 5}} onClick={() => {
                    userI(item)
                    console.log('click', item.id)
                }}>details
                </button>
            </h2>

        </div>
    );
};

export default User;