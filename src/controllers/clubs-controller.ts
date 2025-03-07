import { Request, Response } from "express";
import * as service from "../services/clubs-service";

export const getClubs = async (request: Request, response: Response) => {
    const resp = await service.getClubsService();
    response.status(resp.statusCode).json(resp.body);
}