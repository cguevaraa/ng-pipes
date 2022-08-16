import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  nameLower: string = 'name lower';
  nameUpper: string = "name upper";
  nameTitel: string = "name titel";

  date: Date = new Date();

}
