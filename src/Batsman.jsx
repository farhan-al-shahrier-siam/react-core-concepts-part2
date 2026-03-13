import { useState } from "react";

export default function Batsman() {
    const [score, setScore] = useState(0);
    const [fours, setFours] = useState(0)
    const [sixes, setSixes] = useState(0)
    const handleSingle = () => {
        const newSore = score + 1;
        setScore(newSore);
    };

    const handleFour = () =>{
        const newScore = score+4
        const updatedFours = fours +1;
        setFours(updatedFours)
        setScore(newScore)
    }

    const handleSix = () =>{
        const newScore = score+6
        const updatedSixes = sixes+1;
        setSixes(updatedSixes)
        setScore(newScore)
    }

    return (
        <div>
            <h3>Player: Mushfiqur Rahman</h3>
            <p><small>Four: {fours} Six: {sixes}</small></p>
            {
                (score>=50 && score<60) && <p>Congratulations on FIFty</p>
            }
            <h1>Sore: {score}</h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    );
}
