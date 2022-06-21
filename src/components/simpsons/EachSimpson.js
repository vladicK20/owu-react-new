const EachSimpson = (props) => {
    const {name, about, img} = props
    return (
        <div>
            <h1>{name}</h1>
            <p> {about}</p>
            <img src={img} alt={name}/>
        </div>
    );
};

export {EachSimpson}