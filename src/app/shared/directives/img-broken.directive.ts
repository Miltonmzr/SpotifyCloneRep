import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void{
    const img = '../../../assets/images/image-not-found.jpg';
    console.log('Error al cargar imagen : ', this.host);
    this.host.nativeElement.src = img;
  }

  constructor(private host: ElementRef) {
   }

}
