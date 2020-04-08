import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor(private el: ElementRef) { }
  @Input() colorBase: string //esa propiedad se va a relacionar con un atributo bindeado
  @Input('appResaltar') resaltarColor: string //se inicializa con lo que le pases a appResaltar
  @HostListener('mouseenter') onMouseEnter() { //para configurar eventos en el elemento
    this.resaltar(this.resaltarColor || this.colorBase || 'red')
    //si resaltarColor no es null, queda esa, si no evalua colorBase y si no es null queda esa y si no queda red
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.resaltar(null)
  }

  private resaltar(color: string):void {
    this.el.nativeElement.style.backgroundColor = color
    if (color) this.el.nativeElement.style.color = color? 'white' : ''
  }
}
