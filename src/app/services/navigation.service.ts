import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  isGoToClicked: boolean = false;
  constructor(private router: Router) {}

  goToDashboard() {
    this.isGoToClicked = true;
    console.log('goToDashboard from navigation Service');
    this.router.navigate(['dashboard']);
  }

  isInDashboard() {
    console.log('isInDashboard from navigation Service');
    return this.isGoToClicked;
  }
}
