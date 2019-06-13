import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public firstName;
  public lastName;
  public email;
  public password;
  public confirmPwd;
  public school;
  private pwdMatch;

  constructor() { }

  ngOnInit() {
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.password ="";
    this.confirmPwd = "";
    this.school = "";
    this.pwdMatch = false;

  }

  

  onSignUp(){
    //console.log(this.firstName);
    //console.log(this.lastName);
    console.log(this.password);
    console.log(this.confirmPwd);
    this.pwdMatch = this.checkPassword(this.password, this.confirmPwd);

  }

  checkPassword(password, confirmPwd)
  {
     // If password not entered 
                if (password == '') 
                    alert ("Please enter Password"); 
                      
                // If confirm password not entered 
                else if (confirmPwd == '') 
                    alert ("Please enter confirm password"); 
                      
                // If Not same return False.     
                else if (password != confirmPwd) { 
                    alert ("\nPassword did not match: Please try again...") 
                    return false; 
                } 
  
                // If same return True. 
                else{ 
                    alert("Password Match!") 
                    return true; 
                } 
  }



}