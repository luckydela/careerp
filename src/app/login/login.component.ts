import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../service/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usr={
    email:'',
    password:''
  }

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
  }

  login(){
    Swal.showLoading()
    var test = JSON.stringify(this.usr)
  
    //console.log("hvhj");
    //console.log(test);


    
    this.service.getLogin(test).subscribe(data => {

      //console.log(data)
      Swal.hideLoading()
      Swal.fire({
       //title: 'Have Control over your Agents',
        text: 'Welcome to Career dashboard',
        timer: 1000,
       showConfirmButton: false
      });
      
         if(data['responseCode'] === '000'){
         
          localStorage.setItem('isLoggedInStatus', JSON.stringify(data['profile'][0]));
          localStorage.setItem('userdata',JSON.stringify(data['profile'][0]));
            //console.log(data);
            this.router.navigate(['/profile'])
         
       } 
       else if(data['responseCode']==='W1012'){
                  // alert("Wrong UserEmail Or Password ");
               Swal.showLoading()
              Swal.fire({
             title: 'Oops...',
             text: 'Invalid Credentials',
              footer: '<a href>Why do I have this issue?</a>'});


         }else if(data['responseCode']==='W1013'){
           // alert("Wrong UserEmail Or Password ");
           Swal.showLoading()
           Swal.fire({
          title: 'Oops...',
          text: 'Check your Credentials and Type Again!',
           });

         }
    });  


  }

}
