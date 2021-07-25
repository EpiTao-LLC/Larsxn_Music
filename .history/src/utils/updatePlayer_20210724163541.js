import {useState} from "react"

function updatePlayer (currentPlayer) {

    const [player, setPlayer] = useState('');
    const handleplayer = (currentPlayer, e) => {
        setPlayer(currentPlayer);
    };
}

export default updatePlayer