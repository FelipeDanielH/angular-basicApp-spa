import { Component, OnInit } from '@angular/core'
import { v4 as uuid } from 'uuid'

import { DbzService } from '../services/dbz.service'
import { Character } from '../interfaces/character.interface'

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})
export class MainPageComponent {
constructor( private dbzService: DbzService) {}


get characters(): Character[]{
  return [...this.dbzService.characters]
}

onDeleteCharacter( id: string ):void {
  this.dbzService.deleteCharacterById(id)
}

onNewCharacter( character: Character ):void {
  this.dbzService.onNewCharacter(character)
}


}
