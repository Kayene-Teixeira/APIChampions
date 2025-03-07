import { Request, Response } from "express";
import * as service from "../services/players-service";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayer = async (request: Request, response: Response) => {
    const httpResponse = await service.getPlayerService();
    response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const httpResponse = await service.getPlayerByIdService(id);
    response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (request: Request, response: Response) => {
    const bodyValue = request.body;
    const httpResponse = await service.createPlayerService(bodyValue);

    if(httpResponse) {
        response.status(httpResponse.statusCode).json(httpResponse.body);
    }
};

export const deletePlayer = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const httpResponse = await service.deletePlayerService(id);
    response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayer = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const bodyValue: StatisticsModel = request.body;
    const httpResponse = await service.updatePlayerService(id, bodyValue);
    response.status(httpResponse.statusCode).json(httpResponse.body);
};