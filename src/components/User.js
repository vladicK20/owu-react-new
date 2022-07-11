const User = () => {

    function submit(e) {
        console.log(e.target.login.value)
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" name={'login'}/>
                <button>click</button>
            </form>
        </div>
    );
};

export default User;