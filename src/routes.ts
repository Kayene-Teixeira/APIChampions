import { Router } from "express";
import * as PlayerController from "./controllers/players-controller";

const router = Router();

// Conexão entre rota e controller 
router.get('/players', PlayerController.getPlayer);

// :id => route params => http://localhost:3333/api/players/1
router.get('/players/:id', PlayerController.getPlayerById);

export default router;