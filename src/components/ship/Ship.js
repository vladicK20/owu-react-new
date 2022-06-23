const Ship = (props) => {
    let {item, img} = props;
    return (
        <div>
            <h2>
                {item.mission_name} - {item.launch_year} - <img src={img} alt={item.name}/>
            </h2>
        </div>
    );
};

export default Ship;