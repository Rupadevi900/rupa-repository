import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  /* Data binding in angular:-
  1. one way binding ---> {{ }} (string interpolation)--> model to view
  2. property binding -->[ ]--> model to view
  3. event binding -->()-->view to model
  4. 2 way binding--> [( )]--> model to view & vice-versa
  5. attribute binding -->attrib.attributeName-->model to view

*/
firstName = "rupa";
colSpanValue="2"

lastName: string = "devi";

showMessage(){
  console.log("this is showMessage");
}
}
