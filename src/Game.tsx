import { useEffect, useState } from "react"
import type { Player } from "./types/types"
import { fetchPlayers } from "./api/gameApi";

export default function Game() {
    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        fetchPlayers().then(data => setPlayers(data));
    }, []);





    return(
        <div>
            <p>Total de jogadores: {players.length}</p>
        </div>
    )
}
