import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dpt',
  templateUrl: './dpt.component.html',
  styleUrls: ['./dpt.component.css']
})
export class DptComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  systeam(){
  this.router.navigate(['/user'])
  }
  devteam(){
    this.router.navigate(['/user'])

  }

  salesteam(){
    this.router.navigate(['/user'])

  }

  hrteam(){
    this.router.navigate(['/user'])

  }

  accteam(){
    this.router.navigate(['/login'])

  }

  proteam(){
    this.router.navigate(['/login'])

  }
}
