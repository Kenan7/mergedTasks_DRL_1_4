import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as XLSX from 'xlsx';

type XLSX_DATA = any[][];

@Component({
  selector: 'app-excel-viewer',
  templateUrl: './excel-viewer.component.html',
  styleUrls: ['./excel-viewer.component.scss'],
})
export class ExcelViewerComponent implements OnInit {
  gChart = false;
  type = 'ScatterChart';
  columnNames = ['a', 'b'];
  options = {
  };

  tableSwitch = false;

  data: XLSX_DATA;

  rSquare: number;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  toggleChart(): void {
    this.gChart ? this.gChart = false : this.gChart = true;
  }

  outputRSquared(): void {
    if (Array.isArray(this.data) && this.data.length > 0)  {
    this.calculateCorrelationOfDetermination();
    this.snackBar.open('R square is: ' + this.rSquare, 'Close', {duration: 10000});
  }
  else {
    this.snackBar.open('Excel file should be uploaded first!', 'Close', {duration: 5000});

  }
  }

  calculateCorrelationOfDetermination(): void {
    let sumOfA = 0;
    let sumOfB = 0;
    let sumOfSquareOfA = 0;
    let sumOfSquareOfB = 0;
    let sumOfMultipleOfAandB = 0;
    const n = this.data.length;
    for (let index = 0 ; index < n; index++) {
        const a = this.data[index][0];
        const b = this.data[index][1];
        sumOfA += a;
        sumOfB += b;
        sumOfSquareOfA += Math.pow(a, 2);
        sumOfSquareOfB += Math.pow(b, 2);
        sumOfMultipleOfAandB += a * b;
    }
    const numerator = (n * sumOfMultipleOfAandB) - (sumOfA * sumOfB);
    const firstPart = (n * sumOfSquareOfA - (Math.pow(sumOfA, 2) ));
    const secondPart = (n * sumOfSquareOfB -  (Math.pow(sumOfB, 2)));
    const denominator = Math.sqrt(firstPart * secondPart);

    const correlationCoefficient =  numerator / denominator;

    this.rSquare = parseFloat((Math.pow(correlationCoefficient, 2) * 100).toFixed(4)) ;
  }

  onFileChange(event: any): void {
    const target: DataTransfer =  (event.target) as DataTransfer;
    if (target.files.length !== 1) { throw new Error('Cannot use multiple files'); }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const uploadedFile: string = e.target.result;
      const workBook: XLSX.WorkBook = XLSX.read(uploadedFile, { type: 'binary' });

      const workSheetName: string = workBook.SheetNames[0];
      const workSheet: XLSX.WorkSheet = workBook.Sheets[workSheetName];

      this.data = ((XLSX.utils.sheet_to_json(workSheet, { header: 1 })) as XLSX_DATA);

      // we are shifting the array because the first elements are string (a, b) which can't be scattered
      this.data.shift();

    };
    reader.readAsBinaryString(target.files[0]);


  }



}
