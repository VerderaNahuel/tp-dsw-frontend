import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user = {
    username: 'Username',
    email: 'Email'
  }

  game ={
    score: 30,
  }
  
  constructor(private userService: UserService) {
  }


  ngOnInit(){
    this.userService.getUserData()
      .subscribe(
        res =>{
          this.user = res.userData
          console.log(this.user)         
        },
        err => {
          console.log(err);
          
        }
      )
      let color1=String(0)
      let color2=String(0)
      if(this.game.score >= 50){
        color1=String((100-this.game.score)*2*2.55)
        color2=String(255)
      }
      else{
        color1=String(255)
        color2=String(this.game.score*2*2.55)
      }
      document.documentElement.style.setProperty('--color1', color1);
      document.documentElement.style.setProperty('--color2', color2);
        

  }
  


}
