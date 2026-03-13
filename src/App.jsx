import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";

function App() {
    function handleClick() {
        alert("I am Clicked...");
    }

    const handleAdd5 = (num) => {
        const newNum = num + 5;
        alert(newNum);
    };
    return (
        <>

            <Batsman></Batsman>

            <Counter></Counter>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleAdd5(5)}>click me add 5</button>
        </>
    );
}

export default App;
