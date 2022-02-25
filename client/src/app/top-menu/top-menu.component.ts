import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css'],
  providers: [MessageService]
})
export class TopMenuComponent implements OnInit {

  display:boolean = false;

  items: MenuItem[] = [];

  displayBasic: boolean = false;

  showBasicDialog() {
    this.displayBasic = true;
  }

  hideBasicDialog() {
    this.displayBasic = false;
  }

  constructor( private messageService: MessageService ) { }

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'สำเร็จ', detail: 'คุณทำการเพิ่มคลิปได้สำเร็จ'});
  }

  showWarn() {
    this.messageService.add({severity:'error', summary: 'ผิดพลาด', detail: 'เกิดข้อผิดพลาด'});
  }


  ngOnInit(): void {
    this.items = [
      {
        label: 'CoalaTube'
      }
    ];
  }

}
