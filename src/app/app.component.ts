import { Component,  OnInit} from '@angular/core';
import { IpaddressService } from './services/ipaddress.service';
import {FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mergedTasks';
  ipAddress: any;
  dataFromApi: any;
  found = false;
  createNew = false;

  ipPattern = '(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';

  ipp = new FormControl('', Validators.compose([
    Validators.required,
    Validators.pattern(this.ipPattern)
  ]));

  newIP1 = new FormControl('', Validators.compose([
    Validators.required,
    Validators.pattern(this.ipPattern)
  ]));

  newIP2 = new FormControl('', Validators.compose([
    Validators.required,
    Validators.pattern(this.ipPattern)
  ]));



  constructor(private ipAddressService: IpaddressService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  getIPFromAPI() {
    this.ipAddressService.getIP(this.ipAddress).subscribe((data: any) => {
      this.dataFromApi = data;
      if (this.dataFromApi.length > 0) {
        this.found = true;
        this.openSnackBar('we found an address range -- ' + data, 'Close', 6000, 'top');
      }
      else {
        this.openSnackBar('we could not find anything in the database ¯\\_(ツ)_/¯', 'Close', 10000, 'top');
        this.createNew = true;
      }
    },
    (error => {
      this.openSnackBar('raw error: ' + error, 'Close', 6000, 'top');
    })
    );
  }


  getErrorMessage() {
    if (this.ipp.hasError('required')) {
      return 'You must enter a value';
    }

    return this.ipp.hasError('ipp') ? 'Not a valid ip address' : '';
  }

  getErrorForNewEntry() {
    if (this.newIP1.hasError('required')) {
      return 'You must enter a value';
    }

    if (this.newIP2.hasError('required')) {
      return 'You must enter a value';

    }

  }

  openSnackBar(message: string, action: string, duration: number, pos: any) {
    this.snackBar.open(message, action, {
      duration, verticalPosition: pos
    });
  }

}
