import { Component } from '@angular/core';
import { Link } from './link/link.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  link: Link[];

  constructor(){
    this.link = [
      new Link('Angular', 'https://consulting-rg.com', 100),
      new Link('Google', 'https://google.com', 40),
      new Link('Angular', 'https://Angukar.io', 30),
    ];
    console.log(this.link)
  }
  
  addLink(title: HTMLInputElement, link: HTMLInputElement,){
    this.link.push(new Link(title.value, link.value));
    return false;
  }
  
}
