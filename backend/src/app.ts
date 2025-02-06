import express, { Application, Request, Response } from "express";
import DonorController from './controllers/donor.controller'
const app: Application = express()

const PORT = 3000;


app.use(express.json());

// Маршруты
app.get('/donors', (req: Request, res: Response) => DonorController.getAllDonors(req, res));

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запуще на http://localhost:${PORT}`);
});