import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent implements OnInit {

  userdata; 
  dpt:any = [];
  searchdata:any=[];

  regdptform: FormGroup
  constructor( public router:Router, public service: ServiceService, public formbuilder: FormBuilder) {
    this.regdptform = this.formbuilder.group({
      noofhire: new FormControl('',[Validators.required]),
      dptnm: new FormControl ('',[Validators.required])
    })

    this.userdata=JSON.parse(localStorage.getItem('userdata'))
     this.service.getDepartment(this.userdata.email).subscribe(data=>{
       this.dpt = data;
       this.searchdata = this.dpt;
    });

   }

  ngOnInit() {
    
  }



  addDpt(){
    if (this.regdptform.valid) {
      swal.showLoading()
       this.service.addHire(this.regdptform.value)
       .subscribe(response => {
        swal.hideLoading()
       if (response['responseCode'] === '000') {
         this.regdptform = this.formbuilder.group({
          noofhire:new FormControl('',[Validators.required]),
         dptnm: new FormControl('',[Validators.required])
            
         })
         swal.fire("Success",response['responseMessage'], "success");
        } else {
          swal.fire({
            title: 'Oops...',
             text: response['responseMessage'],
            footer: ''
          });
        }
        
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
    
  }

}
