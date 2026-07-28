import type { Player } from "../types/types";

const BASE_URL = "http://localhost:8080/game";

export async function fetchPlayers(): Promise<Player[]> {
    const res = await fetch(`${BASE_URL}/players`)
    return res.json();
}