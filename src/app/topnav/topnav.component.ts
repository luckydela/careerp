import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  backpage(){
    this.router.navigateByUrl('https://www.entcomputing.com')
  }
}
