import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-excel-viewer',
  templateUrl: './excel-viewer.component.html',
  styleUrls: ['./excel-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExcelViewerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
