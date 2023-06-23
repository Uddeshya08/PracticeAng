import { Component } from '@angular/core';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
username: any;
users:any;
constructor(private userservice: UserDataService ){


}
pageTitle:String=" Interpolation Data Binding"

changeTitle(){
  this.pageTitle="Event Binding"
}

fetchusers(){
  this.userservice.getUser().subscribe((data)=>{
    console.log(data)
    this.users=data
  })
}

}
