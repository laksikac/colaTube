import { Component,  Input,  OnInit } from '@angular/core';

import { ClipApiService } from '../clip-api.service';




@Component({
  selector: 'app-detail-clip',
  templateUrl: './detail-clip.component.html',
  styleUrls: ['./detail-clip.component.css']
})
export class DetailClipComponent implements OnInit {

  @Input() id?:number;

  clip:any;


  constructor(private clip_api_service : ClipApiService ) { }

  ngOnInit(): void {

  }

  ngOnChanges() {
    if(this.id) {
      this.getCilp(this.id);
    }
  }

  getCilp(id: number):void {
    this.clip_api_service.getClip(id).subscribe(
      clip => this.clip = clip
    )
  }


}
