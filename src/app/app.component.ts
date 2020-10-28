import { Component } from '@angular/core';
import { IpaddressService } from './services/ipaddress.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mergedTasks';
  ipAddress: any;
  dataFromApi: any;

  constructor(private ipAddressService: IpaddressService) {}

  getIPFromAPI() {
    this.ipAddressService.getIP(this.ipAddress).subscribe((data: any) => {
      this.dataFromApi = data;
      console.log(this.dataFromApi);
    }
    );
  }
}
