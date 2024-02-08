import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.less'
})
export class FooterComponent {

  @Input() creationDate!: string;
  @Input() creatorName!: string;
  @Input() accesibilityLink!: string;
  @Input() legalInformationLink!: string;
  

}
