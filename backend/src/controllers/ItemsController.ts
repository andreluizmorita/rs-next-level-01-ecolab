import { Request, Response } from 'express';

import knex from '../database/connetion';

class ItemsController {
  async list(req: Request, res: Response) {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
      return {
        ...item,
        //image_url: `http://localhost:3333/uploads/${item.image}`,
        image_url: `http://192.168.15.15:3333/uploads/${item.image}`,
      }
    });

    return res.json(serializedItems);
  }
}

export default ItemsController;