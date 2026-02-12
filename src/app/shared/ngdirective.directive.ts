import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[ngDirective]'
})
export class ngdirective {

  constructor(private model: NgModel) { }
  processInput(value: any) {
     // do some formatting
     return value.toUpperCase();
  }

  @HostListener('input', ['$event'])
  ngModelChange(input: any) {
    const value = input.target.value
    this.model.valueAccessor.writeValue(this.processInput(value));
    this.model.viewToModelUpdate(this.processInput(value));
  }
}