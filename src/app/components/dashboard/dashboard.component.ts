import {
  Component,
  AfterContentChecked,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, AfterContentChecked {
  isConsultantMgtClicked!: boolean;

  constructor(private navService: NavigationService) {}

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    this.isConsultantMgtClicked = this.navService.onShowConsultMngt();
  }
}
