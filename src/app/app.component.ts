import { Component,  OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {IpAddressComponent} from './components/ip-address/ip-address.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mergedTasks';

  constructor() {
  }

  ngOnInit() {
  }



}
