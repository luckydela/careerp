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

  usercvfile:any;
  usercertfile:any;
  //userphotofile:any;
  userphotofile: File =  null;

  userdata;
   personadetail: FormGroup;
  constructor(private router: Router, private service: ServiceService, private formbuilder: FormBuilder) {
    this.personadetail = this.formbuilder.group({
      position: new FormControl('',[Validators.required]),
      last_name: new FormControl('',[Validators.required]),
      first_name: new FormControl('',[Validators.required]),
      age: new FormControl ('',[Validators.required]),
      gender: new FormControl('',[Validators.required]),
      res_address: new FormControl('',[Validators.required]),
      postal_address: new FormControl('',[Validators.required]),
       digital_address: [''],
      phone: new FormControl('',Validators.compose([Validators.pattern(/^(\+233)[0-9]\d{8}$/),Validators.required])),
      description: new FormControl('', [Validators.required])
    })

   }


   onSelectFileCV(event){
    let fileList: FileList = event.target.files;
const file = event.target.files.item(0)
this.usercvfile = <File>event.target.files[0];


  }

  onSelectFileCert(event){
    let fileList: FileList = event.target.files;
    const file = event.target.files.item(0)
    this.usercertfile = <File>event.target.files[0];

    
}

onSelectFilePhoto(event){
  let fileList: FileList = event.target.files;
  const file = event.target.files.item(0)
   this.userphotofile = <File>event.target.files[0];
}



  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('userdata'));
  }

  submitall(){
    if (this.personadetail.valid) {
      const formData = new FormData();
      formData.append('position', this.personadetail.value.position);
      formData.append('first_name', this.personadetail.value.first_name);
      formData.append('last_name', this.personadetail.value.last_name);
      formData.append('age', this.personadetail.value.age);
      formData.append('gender', this.personadetail.value.gender);
      formData.append('res_address', this.personadetail.value.res_address);
      formData.append('postal_address', this.personadetail.value.postal_address);
      formData.append('digital_address', this.personadetail.value.digital_address);
       formData.append('phone', this.personadetail.value.phone);
      formData.append('images', this.usercvfile,this.usercvfile.name);
      formData.append('images', this.usercertfile,this.usercertfile.name);
      formData.append('images', this.userphotofile);
      formData.append('description', this.personadetail.value.description);


      swal.showLoading()
      this.service.submitApplication(formData)
      .subscribe(response => {
        console.log(response);
        
        //swal.hideLoading()
        if (response['responseCode'] === '000') {
          this.personadetail = this.formbuilder.group({
            position: new FormControl('',[Validators.required]),
            last_name: new FormControl('',[Validators.required]),
            first_name: new FormControl('',[Validators.required]),
            age: new FormControl ('',[Validators.required]),
            gender: new FormControl('',[Validators.required]),
            res_address: new FormControl('',[Validators.required]),
            postal_address: new FormControl('',[Validators.required]),
             digital_address: new FormControl('',[Validators.required]),
            phone: new FormControl('',Validators.compose([Validators.pattern(/^(\+233)[0-9]\d{8}$/),Validators.required])),
            description: new FormControl('', [Validators.required])
          })
          this.router.navigate(['']);
          swal.fire("Success",response['responseMessage'], "success");
        } else
        if(response['responseCode']==='E01') {
          swal.fire({
            title: 'Oops...',
            text: 'Application Unsuccessful!...Check and Try again..',
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
     }else {
      swal.fire({
        title: 'Oops...',
        text: 'Please fill all form fields',
        footer: ''
      });
    }
  // this.persona = false;


  }



}
