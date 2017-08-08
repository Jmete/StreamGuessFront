import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isInfo = false;
  info:boolean = true;

  // Switches info button
  switch(){
      this.info = !this.info;
  }


}
