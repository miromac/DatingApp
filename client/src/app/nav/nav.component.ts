import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  //currentUser$: Observable<User>;
  //loggedIn: boolean;

  constructor(
    public acountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    //this.getCurrentUser();
    //this.currentUser$ = this.acountService.currentUser$;
  }

  login() {
    this.acountService.login(this.model).subscribe((response) => {
      //console.log(response);
      //this.loggedIn = true;
      this.router.navigateByUrl('/members');
    });
    //console.log(this.model);
  }

  logout() {
    this.acountService.logout();
    this.router.navigateByUrl('/');
    //this.loggedIn = false;
  }

  // getCurrentUser() {
  //   this.acountService.currentUser$.subscribe(user => {
  //     this.loggedIn = !!user;
  //   }, error => {
  //     console.log(error);
  //   })
  //}
  // <ul class="navbar-nav me-auto" *ngIf="loggedIn">
}
