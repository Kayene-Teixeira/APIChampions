import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
    {
        "id": 1,
        "name": "Lionel Messi",
        "club": "Inter Miami",
        "nationality": "Argentina",
        "position": "Forward",
        "statistics": {
          "overall": 91,
          "pace": 81,
          "shooting": 90,
          "passing": 91,
          "dribbling": 94,
          "defending": 38,
          "physical": 64
        }
      },
      {
        "id": 2,
        "name": "Cristiano Ronaldo",
        "club": "Al Nassr",
        "nationality": "Portugal",
        "position": "Forward",
        "statistics": {
          "overall": 88,
          "pace": 77,
          "shooting": 92,
          "passing": 78,
          "dribbling": 85,
          "defending": 34,
          "physical": 75
        }
      },
      {
        "id": 3,
        "name": "Kylian Mbappé",
        "club": "Paris Saint-Germain",
        "nationality": "France",
        "position": "Forward",
        "statistics": {
          "overall": 91,
          "pace": 97,
          "shooting": 89,
          "passing": 82,
          "dribbling": 92,
          "defending": 36,
          "physical": 78
        }
      },
      {
        "id": 4,
        "name": "Kevin De Bruyne",
        "club": "Manchester City",
        "nationality": "Belgium",
        "position": "Midfielder",
        "statistics": {
          "overall": 91,
          "pace": 76,
          "shooting": 88,
          "passing": 94,
          "dribbling": 87,
          "defending": 64,
          "physical": 78
        }
      },
      {
        "id": 5,
        "name": "Neymar Jr",
        "club": "Al Hilal",
        "nationality": "Brazil",
        "position": "Forward",
        "statistics": {
          "overall": 89,
          "pace": 86,
          "shooting": 85,
          "passing": 87,
          "dribbling": 94,
          "defending": 38,
          "physical": 63
        }
    }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
}

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player);
}