import { Router } from "express";
import * as PlayerController from "./controllers/players-controller";

const router = Router();

// Conexão entre rota e controller 
// Buscando todos os jogadores
router.get('/players', PlayerController.getPlayer);

// :id => route params => http://localhost:3333/api/players/1
// Buscando jogador por id 
router.get('/players/:id', PlayerController.getPlayerById);

// Criando jogador
router.post('/players', PlayerController.postPlayer);

export default router;