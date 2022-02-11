import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.css']
})
export class BottomMenuComponent implements OnInit {

  dockItems: MenuItem[] = [];

    ngOnInit() {
        this.dockItems = [
            {
                label: 'Home',
                tooltipOptions: {
                  tooltipLabel: "หน้าหลัก",
                  tooltipPosition: 'top',
                  positionTop: 15,
                  positionLeft: 18,
                  showDelay: 500,
              },
                icon: "https://img.icons8.com/windows/344/home.png"
            },
            {
                label: 'Profile',
                tooltipOptions: {
                  tooltipLabel: "โปรไฟล์",
                  tooltipPosition: 'top',
                  positionTop: 15,
                  positionLeft: 18,
                  showDelay: 500
              },
                icon: "https://img.icons8.com/windows/344/contacts.png"
            },
            {
                label: 'Friends',
                tooltipOptions: {
                  tooltipLabel: "เพื่อน",
                  tooltipPosition: 'top',
                  positionTop: 15,
                  positionLeft: 18,
                  showDelay: 500
              },
                icon: "https://img.icons8.com/windows/344/group-foreground-selected.png"
            },
            {
                label: 'Setting',
                tooltipOptions: {
                  tooltipLabel: "ตั้งค่า",
                  tooltipPosition: 'top',
                  positionTop: 15,
                  positionLeft: 18,
                  showDelay: 500
              },
                icon: "https://img.icons8.com/windows/344/settings--v1.png"
            }
        ];

    }

  constructor() { }


}
