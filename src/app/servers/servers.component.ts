import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`.dark{background-color : Gray;}`]
})
export class ServersComponent {
  public makeBackgroundDark : boolean = false;

  changeSwitch(event : Event) { 
    this.makeBackgroundDark = (<HTMLInputElement>event.target).checked ;
  }
}
