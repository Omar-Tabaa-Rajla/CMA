import { Component, OnInit } from '@angular/core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { NavigationService } from 'src/app/services/navigation.service';
@Component({
  selector: 'app-consultant-management',
  templateUrl: './consultant-management.component.html',
  styleUrls: ['./consultant-management.component.css'],
})
export class ConsultantManagementComponent implements OnInit {
  faUserPlus = faUserPlus;

  showConsulters: boolean = false;

  constructor(private navService: NavigationService) {}

  ngOnInit(): void {
    //this.isConsultantMgtClicked = this.navService.onShowConsultMngt();
    //console.log(this.isConsultantMgtClicked);
  }
}
