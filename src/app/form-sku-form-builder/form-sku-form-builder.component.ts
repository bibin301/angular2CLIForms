import { Component } from '@angular/core';
import {FormBuilder, FormGroup, AbstractControl, Validators} from '@angular/forms';

@Component({
  selector: 'form-sku-form-builder',
  templateUrl: './form-sku-form-builder.component.html',
  styleUrls: ['./form-sku-form-builder.component.css']
})
export class FormSkuFormBuilderComponent {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];
  }

  onSubmit(value: string): void {
    console.log('you submitted value', value);
  }
}
