import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";


export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();
    let resp = null;

    if(data) {
        resp = await HttpResponse.ok(data);
    } else {
        resp = await HttpResponse.noContent();
    }

    return resp;
}

export const getPlayerByIdService = async (id: number) => {
    // pedir pro repositório de dados
    const data = await PlayerRepository.findPlayerById(id);
    let resp = null;

    if(data) {
        resp = await HttpResponse.ok(data);
    } else {
        resp = await HttpResponse.noContent();
    }

    return resp;
}

export const createPlayerService = async (player: PlayerModel) => {

    let resp = null;
    // verifica se está vazio
    if(Object.keys(player).length > 0) {
        await PlayerRepository.insertPlayer(player);
        resp = await HttpResponse.created();
    } else {
        resp = await HttpResponse.badRequest();
    }

    return resp;
}