import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { MyserviceService } from './myservice.service';


@Component({
  selector: 'my-app',
  templateUrl: './Binding.html',
  styleUrls: [ './app.component.css' ],
  animations: [
trigger('myanimation',[
state('smaller',style({
transform : 'translateY(0px)'
})),
state('larger',style({
transform : 'translateY(200px)'
})),
transition('smaller <=> larger',animate('1000ms ease-in'))
])
]
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

emailid;
formdata;
public albumdetails = [];
constructor(private myservice: MyserviceService) {}
ngOnInit() { 
  
  this.formdata = new FormGroup({
emailid: new FormControl("", Validators.compose([
Validators.required,
Validators.pattern("[^ @]*@[^ @]*")
])),
passwd: new FormControl("", this.passwordvalidation)
  });

  this.myservice.getData().subscribe((data) => {
this.albumdetails = Array.from(Object.keys(data), k=>data[k]);
console.log(this.albumdetails);
});
  }

  passwordvalidation(formcontrol) {
if (formcontrol.value.length <= 5) {
return {"passwd" : true};
}
}

onClickSubmit(data) { this.emailid = data.emailid;}

state: string = "smaller";
animate() {
this.state= this.state == 'larger' ? 'smaller' : 'larger';
}
}
