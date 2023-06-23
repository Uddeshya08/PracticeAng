import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
username: any;

pageTitle:String=" Interpolation Data Binding"

changeTitle(){
  this.pageTitle="Event Binding"
}

}
