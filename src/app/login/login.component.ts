import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../service/service.service';
import swal from 'sweetalert2';

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
    swal.showLoading()
    var test = JSON.stringify(this.usr)
  
    //console.log("hvhj");
    //console.log(test);


    
    this.service.getLogin(test).subscribe(data => {

      //console.log(data)
      swal.hideLoading()
      swal.fire({
       //title: 'Have Control over your Agents',
        text: 'Welcome to Career dashboard',
        timer: 1000,
       showConfirmButton: false
      });
      
         if(data['responseCode'] === '000'){
         
          localStorage.setItem('isLoggedInStatus', JSON.stringify(data['profile'][0]));
          localStorage.setItem('userdata',JSON.stringify(data['profile'][0]));
            //console.log(data);
            this.router.navigate(['/adminuser@ecl'])
         
       } 
       else if(data['responseCode']==='W1012'){
                  // alert("Wrong UserEmail Or Password ");
               swal.showLoading()
              swal.fire({ type: 'error',
             title: 'Oops...',
             text: 'Invalid Credentials',
              footer: '<a href>Why do I have this issue?</a>'});


         }else if(data['responseCode']==='W1013'){
           // alert("Wrong UserEmail Or Password ");
           swal.showLoading()
           swal.fire({ type: 'error',
          title: 'Oops...',
          text: 'Check your Credentials and Type Again!',
           });

         }
    });  


  }

}
