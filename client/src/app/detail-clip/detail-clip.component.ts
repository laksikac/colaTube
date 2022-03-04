import { Component,  OnInit } from '@angular/core';

import { ClipApiService } from '../clip-api.service';



@Component({
  selector: 'app-detail-clip',
  templateUrl: './detail-clip.component.html',
  styleUrls: ['./detail-clip.component.css']
})
export class DetailClipComponent implements OnInit {
<<<<<<< HEAD
  clip: any;
  @Input() Id?: any;
=======
>>>>>>> a8ada4521248d6cc689bb0ed2b6543116e23afbc

  constructor(private clip_api_service : ClipApiService) { }

  ngOnInit(): void {

<<<<<<< HEAD
  getClip(): void{
    console.log(this.Id);
    this.clip_api_service.getClip(this.slide.id)
    .subscribe(clip => this.clip = clip);
=======
>>>>>>> a8ada4521248d6cc689bb0ed2b6543116e23afbc
  }
  


}
