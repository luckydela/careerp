import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../service/service.service';

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
      window.localStorage.clear();
      this.router.navigate(['eclhradmin']);
  
  }
}
