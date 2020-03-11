import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../service/service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.css']
})
export class AdminnavComponent implements OnInit {

  constructor( private router: Router, private service:ServiceService) { }

  ngOnInit() {
  }

  newApplicant(){
    this.router.navigate(['/adminuser@ecl'])
  }

  addJob(){
    this.router.navigate(['/addjob'])
  }

  adminprofile(){
    this.router.navigate(['/profile'])
  }

  
    logout(){  

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'logout ?',
        text: "You are logging out...",
        showCancelButton: true,
        confirmButtonText: 'Yes Confirm',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          // swalWithBootstrapButtons.fire(
          //   'Deleted!',
          //   'Your file has been deleted.',
          //   'success'
          // )
  
  
      window.localStorage.clear();
      this.router.navigate(['eclhradmin']);
          
        } else (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) 
        // {
        //   swalWithBootstrapButtons.fire(
        //     'Cancelled',
        //     'Still Keep me here',
        //     // 'error'
        //   )
        // }
      })
     
       
       
       



      // window.localStorage.clear();
      // this.router.navigate(['eclhradmin']);
  
  }
}
