import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { GameRequest } from '../../../../core/services/game/models/GameRequest.model';
import { GameService } from '../../../../core/services/game/game.service';

export type GameFormData = GameRequest
export type GameToUpdate = GameRequest & {
  id: string;
};

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrl: './game-form.component.less'
})
export class GameFormComponent implements OnInit {


  constructor(private gameService: GameService){}

  gameForm: UntypedFormGroup = new UntypedFormGroup({});

  savedMsg:string = ''
  saveError:boolean = false

  @Input() gameToEdit:any


  ngOnInit(): void {
    this.gameForm = new UntypedFormGroup(
      {
        name: new UntypedFormControl('', [
          Validators.required,
 
        ]),
        minPlayers: new UntypedFormControl('',
        [
          Validators.required,

        ]),
        maxPlayers: new UntypedFormControl('',
          [
            Validators.required,
      

          ]),
          widthNeeded: new UntypedFormControl('',
          [
            Validators.required,

          ]),
          heightNeeded: new UntypedFormControl('',
          [
            Validators.required,

          ])
      }
    )

    if(this.gameToEdit){
      this.gameForm.controls['name'].setValue(this.gameToEdit.name);
      this.gameForm.controls['minPlayers'].setValue(this.gameToEdit.minPlayers);
      this.gameForm.controls['maxPlayers'].setValue(this.gameToEdit.maxPlayers);
      this.gameForm.controls['widthNeeded'].setValue(this.gameToEdit.widthNeeded);
      this.gameForm.controls['heightNeeded'].setValue(this.gameToEdit.heightNeeded);
    }
  }

  saveGame($event: any) {
    
    $event.preventDefault()
    if(this.gameForm.valid){
      
      if(this.gameToEdit){
        const gameToSave = this.gameForm.value as GameToUpdate
        gameToSave.id = this.gameToEdit.id
        this.gameService.update(gameToSave).subscribe(data => {
          this.savedMsg = 'Se ha editado el juego ' + gameToSave.name + ' correctamente.'
          this.saveError = false
        })
      }
      else{
        const gameToSave = this.gameForm.value as GameFormData
        this.gameService.store(gameToSave).subscribe(response => {
          console.log(response)
          this.savedMsg = 'Se ha añadido el juego ' + gameToSave.name + ' correctamente.'
          this.saveError = false
        })
      }

    }
    else{
      this.savedMsg = ''
      this.saveError = true
    }
    console.log(this.gameForm.value as GameFormData)
    

  }

}
