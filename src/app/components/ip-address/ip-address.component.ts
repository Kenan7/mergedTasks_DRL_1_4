import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, Validators} from '@angular/forms';
import { IpaddressService } from '../../services/ipaddress.service';

@Component({
  selector: 'app-ip-address',
  templateUrl: './ip-address.component.html',
  styleUrls: ['./ip-address.component.scss'],
})
export class IpAddressComponent implements OnInit {

  constructor(private ipAddressService: IpaddressService, private snackBar: MatSnackBar) { }

  ipAddress: any;
  dataFromApi: any;
  createNew = false;

  ip_start_new: any;
  ip_end_new: any;

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



  getIPFromAPI() {
    this.ipAddressService.getIP(this.ipAddress).subscribe((data: any) => {
      this.dataFromApi = data;
      if (this.dataFromApi.length > 0) {
        this.createNew = false;
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

  createNewEntry() {
    const formData = {
      ip1: this.ip_start_new,
      ip2: this.ip_end_new,
    };

    this.ipAddressService.createEntry(formData).subscribe((data: any) => {
      this.openSnackBar('Added!', 'Close', 5000, 'top');
    },
    error => {
      this.openSnackBar('raw error: ' + error, 'Close', 15000, 'top');
    });
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

  ngOnInit(): void {
  }

}
