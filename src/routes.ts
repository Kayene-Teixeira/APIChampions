import { Router } from "express";
import * as PlayerController from "./controllers/players-controller";
import * as ClubsController from "./controllers/clubs-controller";

const router = Router();

// Conexão entre rota e controller 
// Buscando todos os jogadores
router.get('/players', PlayerController.getPlayer);

// :id => route params => http://localhost:3333/api/players/1
// Buscando jogador por id 
router.get('/players/:id', PlayerController.getPlayerById);

// Criando jogador
router.post('/players', PlayerController.postPlayer);

// Deletando jogador
router.delete('/players/:id', PlayerController.deletePlayer);

// Atualizando jogador
router.patch('/players/:id', PlayerController.updatePlayer);

// Listagem de clubs
router.get('/clubs', ClubsController.getClubs);

export default router;