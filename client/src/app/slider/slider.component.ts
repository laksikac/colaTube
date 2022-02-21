import { Component, OnInit } from '@angular/core';
import { ClipApiService } from '../clip-api.service';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  clips: any[] = [];

  responsiveOptions: any;

  getClips(): void {
      this.clipApiService.getClips()
      .subscribe(clips => this.clips = clips)
  }

  test:string = "hello";
  
  

  constructor(private clipApiService:ClipApiService) { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];

  
  }

  

  ngOnInit(): void {

    this.getClips();
  }

  
  UrlVideo(video: string) {
    const params = new URL(video).searchParams;
    video  = params.get('v')|| '{}';
    return video;
  }

}
