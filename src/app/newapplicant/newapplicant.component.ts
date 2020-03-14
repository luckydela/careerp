import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-newapplicant',
  templateUrl: './newapplicant.component.html',
  styleUrls: ['./newapplicant.component.css']
})
export class NewapplicantComponent implements OnInit {
  userdata;
  applicant:any = [];
  searchdata;

  constructor( public service: ServiceService, public router: Router) { }

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('userdata'))
    this.service.getApplicants(this.userdata.email).subscribe(data=>{
      this.applicant = data;
      this.searchdata = this.applicant;
      //console.log(data)
 });

}


search (query: string){
 this.searchdata = (query) ?this.applicant.filter( data => data.user_id.toLowerCase().includes(query.toLowerCase()) ||data.last_name.toLowerCase().includes(query.toLowerCase()) ||data.first_name.toLowerCase().includes(query.toLowerCase()) ||data.gender.toLowerCase().includes(query.toLowerCase()) || data.phone.toLowerCase().includes(query.toLowerCase()) || data.cv_name.toUpperCase().includes(query.toUpperCase())) : this.applicant;
}

opendocument(documentname:any){
  window.open('https://ecl-web-api.herokuapp.com/api/load-image/'+documentname)
}

// Viewbtn(){
  
// }

}
