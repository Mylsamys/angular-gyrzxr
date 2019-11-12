import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './Binding.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Mylsamy';
  months = ["January", "Feburary", "March", "April", "May","June", "July", "August", "September","October", "November", "December"];
  isavailable = false;

  myClickFunction(event) {
    this.isavailable = !this.isavailable;
alert("Button is clicked");
console.log(event); 
}

changemonths(event) {
console.log("Changed month from the Dropdown");
console.log(event);
}
onClickSubmit(data) { alert("Entered Email id : " + data.passwd); }
}
