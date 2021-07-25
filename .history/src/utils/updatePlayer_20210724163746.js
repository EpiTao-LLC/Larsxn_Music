import {useState} from "react"

function updatePlayer (currentPlayer) {

    const [player, setPlayer] = useState(currentPlayer);
    const handleplayer = (currentPlayer, e) => {
        setPlayer(currentPlayer);
    };
    return player
}

export default updatePlayer