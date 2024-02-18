import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.less'
})
export class GenericTableComponent implements OnInit, OnChanges{


  @Input() data: Array<any> = []
  @Input() title: string = ''
  columns: Array<string> = []

  ngOnInit(): void {


  }
  ngOnChanges(changes: SimpleChanges): void {
    // Verifica si hay cambios en la entrada 'data'
    if (changes["data"]) {
      // Ejecuta la lógica cuando se recibe el nuevo valor para 'data'

      this.columns = Object.keys(this.data[0]);

      console.log(Object.keys(this.data[0]));
    }
  }
  


}
