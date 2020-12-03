import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  //currentUser$: Observable<User>;
  //loggedIn: boolean;

  constructor(public acountService: AccountService) { }

  ngOnInit(): void {
    //this.getCurrentUser();
    //this.currentUser$ = this.acountService.currentUser$;
  }

  login() {
    this.acountService.login(this.model).subscribe(response => {
      console.log(response);
      //this.loggedIn = true;
    }, error => {
      console.log(error);
    });
    //console.log(this.model);
  }

  logout(){
    this.acountService.logout();
    //this.loggedIn = false;
  }

  // getCurrentUser() {
  //   this.acountService.currentUser$.subscribe(user => {
  //     this.loggedIn = !!user;
  //   }, error => {
  //     console.log(error);
  //   })
  //}
  // <ul class="navbar-nav mr-auto" *ngIf="loggedIn">

}
