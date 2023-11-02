import { Component, Input, Output } from '@angular/core';
import { WebServicesService } from 'src/app/services/web-services.service';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss']
})
export class TopCardComponent {
  
  @Input() top_Cards: any;


  constructor(private web_service: WebServicesService) {}
  
}
