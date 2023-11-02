import { Component } from '@angular/core';
import { WebServicesService } from '../services/web-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  
  top_Cards:any;
  recent_Orders:any;
  new_Users:any;


  constructor(private web_service: WebServicesService) {}

  ngAfterViewInit() {
    this.getDataForCards();
  }

  getDataForCards() {
    this.web_service.getFromServer().subscribe({
      next: (response) => {
       this.top_Cards=response.top_cards;
       this.recent_Orders=response.recent_orders;
       this.new_Users=response.new_users;

       console.log(response);
      },
      error: (error) => {
       console.log(error)
      },
    });
  }
}
