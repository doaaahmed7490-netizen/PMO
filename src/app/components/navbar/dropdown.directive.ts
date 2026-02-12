import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleDropdown]',
})
export class ToggleDropdownDirective {
  private wasInside = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('click') onClick() {
    this.wasInside = true;
    const dropdownMenu = this.elementRef.nativeElement.nextElementSibling;
    dropdownMenu.classList.toggle('show');
  }

  @HostListener('document:click') onDocClick() {
    if (this.wasInside) {
      this.wasInside = false;
      return;
    }
    const dropdownMenu = this.elementRef.nativeElement.nextElementSibling;
    dropdownMenu.classList.remove('show');
  }
}
