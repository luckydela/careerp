import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../service/service.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {DptComponent} from '../dpt/dpt.component';
import swal from 'sweetalert2';

@Component({
  selector: 'app-userdsh',
  templateUrl: './userdsh.component.html',
  styleUrls: ['./userdsh.component.css']
})
export class UserdshComponent implements OnInit {

  persona:boolean = true;
  //info: boolean = false;

  public userfile: any = File;

  userdata;
   personadetail: FormGroup;
  constructor(private router: Router, private service: ServiceService, private formbuilder: FormBuilder) {
    this.personadetail = this.formbuilder.group({
      positionfor: new FormControl('',[Validators.required]),
      lname: new FormControl('',[Validators.required]),
      fname: new FormControl('',[Validators.required]),
      had: new FormControl ('',[Validators.required]),
      dad: new FormControl('',[Validators.required]),
      phne: new FormControl('',Validators.compose([Validators.pattern(/^(\+233)[0-9]\d{8}$/),Validators.required])),
     // cv: new FormControl('',[Validators.required]),
      //cert: new FormControl('',[Validators.required]),
      //photo: new FormControl('', [Validators.required]),
      aboutu: new FormControl('', [Validators.required])
    })

   }

   onSelectFile(event){
     const file = event.target.files[0];
     //console.log(file);
     this.userfile = file;
   }




  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('userdata'));

  }


  applyecl(){
    this.persona = true
    //this.info = false
  }

  contacthr(){
    //this.info = true;
    this.persona = false;
  }

  submitall(){
    if (this.personadetail.valid) {
      const user = this.personadetail.value;
      const formData = new FormData();
      formData.append('user', JSON.stringify(user));
      formData.append('file', this.userfile);
      swal.showLoading()
      this.service.submitApplication(user)
      .subscribe(response => {
        //console.log(user);
        
        //swal.hideLoading()
        if (response['responseCode'] === '000') {
          this.personadetail = this.formbuilder.group({
            positionfor: new FormControl('',[Validators.required]),
            lname: new FormControl('',[Validators.required]),
            fname: new FormControl('',[Validators.required]),
            had: new FormControl ('',[Validators.required]),
            dad: new FormControl('',[Validators.required]),
            phne: new FormControl('',Validators.compose([Validators.pattern(/^(\+233)[0-9]\d{8}$/),Validators.required])),
            //cv: new FormControl('',[Validators.required]),
            //cert: new FormControl('',[Validators.required]),
            //photo: new FormControl('', [Validators.required]),
            aboutu: new FormControl('', [Validators.required])
          })
          swal.fire("Success",response['responseMessage'], "success");
          
        } else {
          swal.fire({
            title: 'Oops...',
            text: response['responseMessage'],
            footer: ''
          });
        }

        console.log(formData);
        
        
      }, error => {
        swal.fire({
          title: 'Oops...',
          text: error,
          footer: ''
        });
        swal.hideLoading()
      })
    } else {
      swal.fire({
        title: 'Oops...',
        text: 'Please fill all form fields',
        footer: ''
      });
    }
//this.persona = false;


  }


}
