const User = ({item}) => {
    const {id,name,status,species,gender,image} = item
    return (
        <div>
            <h2>{id} - {name}</h2>
            <h5>{status}</h5>
            <h5>{species}</h5>
            <h5>{gender}</h5>
            <img src={image} alt={name}/>
        </div>
    );
};

export {User}