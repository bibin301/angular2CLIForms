import { Component } from '@angular/core';

@Component({
  selector: 'form-sku',
  templateUrl: './form-sku.component.html',
  styleUrls: ['./form-sku.component.css']
})
export class FormSkuComponent {

  constructor() { }

  onSubmit(form: any): void {
    console.log('you submitted value', form);
  }
}
