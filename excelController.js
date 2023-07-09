import { readFileSync } from 'fs';
import * as XLSX from 'xlsx/xlsx.mjs';

export default function readExcelController(req, res) {
  const buf = readFileSync('./Test.xlsx');
  const workbook = XLSX.read(buf); // Step 2
  let workbook_sheet = workbook.SheetNames; // Step 3
  let workbook_response = XLSX.utils.sheet_to_json(
    // Step 4
    workbook.Sheets[workbook_sheet[0]]
  );
  res.status(200).send({
    // Step 5
    message: workbook_response,
  });
}
