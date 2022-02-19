import { Component, OnInit } from '@angular/core';
import { ClipApiService } from '../clip-api.service';
import { TopMenuComponent } from '../top-menu/top-menu.component'

@Component({
  selector: 'app-add-clip',
  templateUrl: './add-clip.component.html',
  styleUrls: ['./add-clip.component.css']
})
export class AddClipComponent implements OnInit {

  title: string | undefined;
  uploader: string | undefined;
  description: string | undefined;
  url: string | undefined;
  rating: number = 0;


  constructor(private clipApiService:ClipApiService, private top:TopMenuComponent ) { }

  ngOnInit(): void {
  }

  addClip(): void {
    
    var val = {
      title: this.title,
      uploader: this.uploader,
      description: this.description,
      url: this.url,
      rating: this.rating,
    }

    this.top.hideBasicDialog()
    
    this.clipApiService.addClip(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
