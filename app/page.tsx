export default function HomePage() {
    let myNum = 1;
    for (let x = 0; x < 200; x++) myNum++;
    
    return (
        <div>
            <h1>Home Page + {myNum} </h1>
            <p>Some Content</p>
        </div>
    );
};
