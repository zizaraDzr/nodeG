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
    async getDonorById(req: Request, res: Response): Promise<any>{
        const { id } = req.params // Получаем ID из параметров URL
        const donorId = parseInt(id, 10)

        if (isNaN(donorId)) {
            return res.status(400).json({ error: "ID должен быть числом" });
        }
        try {
            const users = await this.donorService.getDonorById(donorId);
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