const User = (props) => {
    const {id,name,status,species,gender,image} = props
    return (
        <div>
            <h2>{name} - {id}</h2>
            <h5>{status}</h5>
            <h5>{species}</h5>
            <h5>{gender}</h5>
            <img src={image} alt={name}/>
        </div>
    );
};

export {User}