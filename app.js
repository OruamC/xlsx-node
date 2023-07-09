import express from 'express';
import readExcelController from './excelController.js';

const app = express();
const router = express.Router();

app.get('/', readExcelController);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
