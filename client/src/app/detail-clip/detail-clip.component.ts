import { Component, Input, OnInit } from '@angular/core';

import { ClipApiService } from '../clip-api.service';
import { ActivatedRoute } from '@angular/router';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-detail-clip',
  templateUrl: './detail-clip.component.html',
  styleUrls: ['./detail-clip.component.css']
})
export class DetailClipComponent implements OnInit {
  clip: any;
  @Input() Id?: number;

  constructor(private clip_api_service : ClipApiService, 
              private route : ActivatedRoute,
              private slide : SliderComponent) { }

  ngOnInit(): void {
    this.getClip();
  }

  getClip(): void{
    this.clip_api_service.getClip(this.slide.id)
    .subscribe(clip => this.clip = clip);
  }


}