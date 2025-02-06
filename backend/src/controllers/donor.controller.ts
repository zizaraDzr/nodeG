import { Request, Response } from "express";
import DonorService from '../services/donor.service';

class DonorController {
  private donorService: DonorService
  
  constructor () {
    this.donorService = new DonorService()
  }
    async getAllDonors(req: Request, res: Response): Promise<void>{
        try {
            const users = await this.donorService.getAllDonors();
            res.json(users);
          } catch (err) {
            if (err instanceof Error) {
              res.status(500).json({ error: err?.message });
            } else {
              
            res.status(500).json({ error: 'Ошибка не является объектом типа Error'});
          }
        }
    }
}
// Singleton
export default new DonorController()