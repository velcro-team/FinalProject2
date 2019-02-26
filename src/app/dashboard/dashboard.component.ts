import { Component,OnInit, Input, Output, EventEmitter} from '@angular/core';
import { UserService } from '../user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  template: `
  <app-header></app-header>
  
<app-userlist [userRecord] = "userRecord"></app-userlist>`
})
export class DashboardComponent{  
  
constructor(private userService: UserService,private router: Router) { }

logout() {
 this.userService.clearToken("TOKEN");
 this.router.navigateByUrl('/login');
}


public userRecord=[
  {userId:1025,userTypeId:"1",userName:"Rakesh",userType:"firstAdmin", activeStatus:"active"},
  {userId:1022,userTypeId:"3",userName:"Mukesh",userType:"simpleUser", activeStatus:"inactive"},
  {userId:1029,userTypeId:"2",userName:"Chandra",userType:"secondAdmin", activeStatus:"inactive"},
  {userId:1020,userTypeId:"3",userName:"Ria",userType:"simpleUser", activeStatus:"active"},
  {userId:1021,userTypeId:"2",userName:"Deepak",userType:"secondAdmin", activeStatus:"active"}

];
public selectDataGot:any=[
  {
    userTypeId:"",
    userName:"", 
    userType:"",
    activeStatus:""
  }
];

}
