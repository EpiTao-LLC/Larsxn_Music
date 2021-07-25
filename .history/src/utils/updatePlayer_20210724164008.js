import {useState} from "react"

function updatePlayer (currentPlayer) {

    const [player, setPlayer] = useState(currentPlayer);
    const handlePlayer = (currentPlayer, e) => {
        setPlayer(currentPlayer);
    };
    return player
}

export default updatePlayer