import { Component } from '@angular/core';
import { SupportApiService } from 'src/app/services/support-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userId: string = localStorage.getItem('user-id');
  userRole: string = localStorage.getItem('role');

  title = 'help-desk';

  constructor(public authService: SupportApiService) {}
}
