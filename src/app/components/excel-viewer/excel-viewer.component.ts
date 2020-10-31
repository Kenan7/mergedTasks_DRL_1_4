import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

type XLSX_DATA = any[][];

@Component({
  selector: 'app-excel-viewer',
  templateUrl: './excel-viewer.component.html',
  styleUrls: ['./excel-viewer.component.scss'],
})
export class ExcelViewerComponent implements OnInit {

  data: XLSX_DATA;

  onFileChange(event: any) {
    const target: DataTransfer =  (event.target) as DataTransfer;
    if (target.files.length !== 1) { throw new Error('Cannot use multiple files'); }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const uploadedFile: string = e.target.result;
      const workBook: XLSX.WorkBook = XLSX.read(uploadedFile, { type: 'binary' });

      const workSheetName: string = workBook.SheetNames[0];
      const workSheet: XLSX.WorkSheet = workBook.Sheets[workSheetName];

      this.data = ((XLSX.utils.sheet_to_json(workSheet, { header: 1 })) as XLSX_DATA);
    };
    reader.readAsBinaryString(target.files[0]);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
