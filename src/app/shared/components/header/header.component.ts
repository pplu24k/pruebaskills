import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {


    @Input() title!: string;
    @Input() imgLeft!: string;
    @Input() imgRight!: string;


}
