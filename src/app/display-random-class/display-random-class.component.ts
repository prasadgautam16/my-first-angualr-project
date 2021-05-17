import { Component } from '@angular/core';

@Component({
  selector: 'app-display-random-class',
  templateUrl: './display-random-class.component.html',
  styleUrls: ['./display-random-class.component.css']
})
export class DisplayRandomClassComponent {
  public randomClasses : string[] = ["tech"];

  onClassCreation() { 
    let classes = ["hyperTech", "proTech", "nonTech", "tech"];
    let randomClass = classes[Math.floor(Math.random() * classes.length)];

    this.randomClasses.push(randomClass);
  }
}
