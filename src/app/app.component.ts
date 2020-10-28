import { Component,  } from '@angular/core';
import { IpaddressService } from './services/ipaddress.service';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mergedTasks';
  ipAddress: any;
  dataFromApi: any;
  ipp = new FormControl('', Validators.compose([
    Validators.required,
    Validators.pattern('(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)')
  ]));

  constructor(private ipAddressService: IpaddressService) {}

  getIPFromAPI() {
    this.ipAddressService.getIP(this.ipAddress).subscribe((data: any) => {
      this.dataFromApi = data;
      console.log(this.dataFromApi);
    }
    );
  }


  getErrorMessage() {
    if (this.ipp.hasError('required')) {
      return 'You must enter a value';
    }

    return this.ipp.hasError('ipp') ? 'Not a valid ip address' : '';
  }

}
