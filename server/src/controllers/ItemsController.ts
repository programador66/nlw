import { Request, Response } from "express";
import knex from "../database/connection";

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex("items").select("*");

    const serializeItems = items.map((item) => {
      return {
        title: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`,
      };
    });

    return response.json(serializeItems);
  }
}

export default ItemsController;
