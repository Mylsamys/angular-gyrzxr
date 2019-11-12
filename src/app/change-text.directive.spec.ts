import { Directive } from '@angular/core';

@Directive({
selector: '[changeText]'
})

export class ChangeTextDirective  {
  @Input() name: string;
}
