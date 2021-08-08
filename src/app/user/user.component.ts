import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() users: string[] = [];
  @Output() removeClickEvent = new EventEmitter();

  index : number = -1;

  onSelectClick(idx: number)
  {
    this.index = idx;

  }

  onRemoveClick(){
    if (this.index != -1){
      this.removeClickEvent.emit(this.index);
    }
  }

}

