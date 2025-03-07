import { Request, Response } from "express";
import * as service from "../services/players-service";
import { noContent } from "../utils/http-helper";

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