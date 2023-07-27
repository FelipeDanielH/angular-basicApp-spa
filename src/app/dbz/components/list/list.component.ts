import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter()

  @Input()
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'nombre x',
      randNumber: 0
    }
  ]

  onDeleteCharacter(id:string):void {
    this.onDeleteId.emit(id)
  }
}
