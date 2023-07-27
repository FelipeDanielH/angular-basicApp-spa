import { Injectable } from '@angular/core'
import { Character } from '../interfaces/character.interface'
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[]  = [
    {
      id: uuid(),
      name: 'Persona1',
      randNumber: 1000
    },
    {
      id: uuid(),
      name: 'Persona2',
      randNumber: 9500
    },
    {
      id: uuid(),
      name: 'Persona3',
      randNumber: 7500
    }
  ]

  onNewCharacter( character: Character): void {
    this.characters.push(character);
  }

  deleteCharacterById( id: string ): void {
    this.characters = this.characters.filter( character => character.id !== id)
  }


}
