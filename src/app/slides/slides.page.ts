import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {


  @ViewChild(IonSlides) slides: IonSlides;

  constructor() {}

  change(event){
    console.log(event);

    this.slides.getActiveIndex().then(index => {
     
      console.log(index);
    });
  }

  ngOnInit() {
  }

}
