import { Component, OnInit } from '@angular/core';

import { ClipApiService } from '../clip-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-clip',
  templateUrl: './detail-clip.component.html',
  styleUrls: ['./detail-clip.component.css']
})
export class DetailClipComponent implements OnInit {
  clip: any;

  constructor(private clip_api_service : ClipApiService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getClip();
  }

  getClip(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.clip_api_service.getClip(id)
    .subscribe(clip => this.clip = clip);
  }


}