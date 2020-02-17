import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userdata;

  constructor(private router:Router, private service: ServiceService) { }

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('userdata'));
    
  }
}
