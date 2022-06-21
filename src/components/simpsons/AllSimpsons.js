import {EachSimpson} from "./EachSimpson";

const AllSimpsons = () => {
    return (
        <div>
            <EachSimpson
            name={'Bart'}
            about={'Lorem ipsum dolor sit amet'}
            img={'https://comicvine.gamespot.com/a/uploads/scale_small/11/114183/6665931-bart.png'}
            />

            <EachSimpson
            name={'Homer'}
            about={'Lorem ipsum dolor sit amet'}
            img={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
            />

            <EachSimpson
            name={'March'}
            about={'Lorem ipsum dolor sit amet'}
            img={'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'}
            />

            <EachSimpson
            name={'Meggy'}
            about={'Lorem ipsum dolor sit amet'}
            img={'https://www.freeiconspng.com/thumbs/maggie-simpson-png/maggie-simpson-png-12.png'}
            />

            <EachSimpson
            name={'Lisa'}
            about={'Lorem ipsum dolor sit amet'}
            img={'https://images2.fanpop.com/images/photos/5700000/Lisa-Pink-Dress-lisa-simpson-5756306-289-500.jpg'}
            />
        </div>
    );
};

export {AllSimpsons}