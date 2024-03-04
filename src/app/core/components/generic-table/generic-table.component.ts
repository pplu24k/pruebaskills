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

    if (changes["data"]) {
      if(this.data[0] != null){
        this.columns = Object.keys(this.data[0]);
      }
      
    }
  }
  


}
