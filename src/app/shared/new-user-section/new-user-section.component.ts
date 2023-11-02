import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-user-section',
  templateUrl: './new-user-section.component.html',
  styleUrls: ['./new-user-section.component.scss']
})
export class NewUserSectionComponent {
 @Input() new_users:any;
}
