import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users"
import { Suspense } from "react";


const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())

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

            <Suspense fallback={<h1>Data Loading...</h1>}>
                <Users fetchUsers = {fetchUsers}></Users>
            </Suspense>

            <Batsman></Batsman>

            <Counter></Counter>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleAdd5(5)}>click me add 5</button>
        </>
    );
}

export default App;
