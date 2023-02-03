import gameControllers from "../controllers/game";
import express from "express";

const router = express.Router();

router.get("/game/:id", gameControllers.getGameController)
router.patch("/game/:id", gameControllers.updateGameController);
router.post("/game", gameControllers.createGameController);

export default router;
