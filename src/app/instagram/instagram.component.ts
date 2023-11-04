import { Component } from '@angular/core';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent {
  isVisibleposts:string  = 'active';
  isVisiblesave: string  = 'inactive';
  isVisibletagged:string = 'inactive';

  toggleposts() {
    this.isVisibleposts = 'active';
    this.isVisiblesave = 'inactive';
    this.isVisibletagged ='inactive' ;
    console.log(this.isVisibleposts )
  }
  togglesaved(){
    this.isVisibleposts = 'inactive';
    this.isVisiblesave = 'active';
    this.isVisibletagged ='inactive' ;
    console.log(this.isVisiblesave )
  }
  toggletagged(){
    this.isVisibleposts = 'inactive';
    this.isVisiblesave = 'inactive';
    this.isVisibletagged ='active' ;
    console.log(this.isVisibletagged )
  }
  //nav

  nav = ['home', 'search', 'explore','reels','messages','notifications','create','profile','more'];

}
