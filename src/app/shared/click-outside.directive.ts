// src/app/click-outside.directive.ts
import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true // Add this if you are using standalone components/directives
})
export class ClickOutsideDirective {
   @Output() appClickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {

    const clickedInside = this.elementRef.nativeElement.contains(event.target);

    if (!clickedInside) {
      setTimeout(() => {
        this.appClickOutside.emit();
      });
    }
  }
}
