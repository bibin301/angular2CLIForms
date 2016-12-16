import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, AbstractControl, Validators} from '@angular/forms';

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
      'sku': ['', Validators.compose([Validators.required, this.skuValidator])]
    });

    this.sku = this.myForm.controls['sku'];
  }

  skuValidator(control: FormControl): {[s: string]: boolean} {
    if(!control.value.match(/^123/)) {
      return {invalidSku: true}
    }
  }

  onSubmit(value: string): void {
    console.log('you submitted value', value);
  }
}
