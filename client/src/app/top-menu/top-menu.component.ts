import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  items: MenuItem[] = [];

  displayBasic: boolean = false;

  showBasicDialog() {
    this.displayBasic = true;
  }

  hideBasicDialog() {
    this.displayBasic = false;
  }

  constructor() { }


  ngOnInit(): void {
    this.items = [
      {
        label: 'CoalaTube'
      }
    ];
  }

}
