import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSearchList() {
    this.router.navigate(['/']);
  }

}
