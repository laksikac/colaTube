import { Component,  OnInit } from '@angular/core';

import { ClipApiService } from '../clip-api.service';



@Component({
  selector: 'app-detail-clip',
  templateUrl: './detail-clip.component.html',
  styleUrls: ['./detail-clip.component.css']
})
export class DetailClipComponent implements OnInit {

  constructor(private clip_api_service : ClipApiService) { }

  ngOnInit(): void {

  }
  


}
