import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-clip',
  templateUrl: './add-clip.component.html',
  styleUrls: ['./add-clip.component.css']
})
export class AddClipComponent implements OnInit {

  title: any;

  uploader: any;

  description: any;

  url: string | undefined;

  rating: number | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
