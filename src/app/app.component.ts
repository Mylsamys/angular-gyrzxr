import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

import { MyserviceService } from './myservice.service';


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
//this.albumdetails = Array.from(Object.keys(data), k=>data[k]);
this.albumdetails = Array.from(1, 1000);
console.log(this.albumdetails);
});
  }

  passwordvalidation(formcontrol) {
if (formcontrol.value.length <= 5) {
return {"passwd" : true};
}
}

onClickSubmit(data) { this.emailid = data.emailid;}
}
