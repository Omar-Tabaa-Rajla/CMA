import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  //isGoToClicked: boolean = false;
  isConsultantMgtClicked: boolean = false;
  isConsultantFormClicked: boolean = false;
  constructor(private router: Router) {}

  goToDashboard(): void {
    //this.isGoToClicked = true;
    console.log('goToDashboard from navigation Service');
    this.router.navigate(['dashboard']);
  }

  // isInDashboard() {
  //   console.log('isInDashboard from navigation Service');
  //   return this.isGoToClicked;
  // }
  goToConsultMngt(): boolean {
    if (this.isConsultantMgtClicked) {
      return (this.isConsultantMgtClicked = false);
    } else if (
      this.isConsultantMgtClicked === false &&
      this.isConsultantFormClicked === true
    ) {
      return (this.isConsultantFormClicked = false);
    } else {
      return (this.isConsultantMgtClicked = true);
    }
  }
  showConsultMngt(): boolean {
    return this.isConsultantMgtClicked;
  }

  addBerater(): any {
    this.isConsultantMgtClicked = false;
    this.isConsultantFormClicked = true;
    if (this.isConsultantMgtClicked) {
      return (this.isConsultantFormClicked = false);
    }
  }
}
