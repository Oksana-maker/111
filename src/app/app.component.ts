import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HW1';

  users = ["User 1", "User 2", "User 3", "User 4", "User 5"];

  onUserRemoveClick(idx: number){
    this.users.splice(idx, 1);
  }
}
