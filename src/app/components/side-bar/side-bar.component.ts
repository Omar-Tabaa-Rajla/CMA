import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  constructor(private navService: NavigationService) {}

  ngOnInit(): void {}

  showConsulters() {
    this.navService.goToConsultMngt();
  }
}
