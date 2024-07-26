import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit {
  @ViewChild('footerWrapper') footerWrapper!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: `-${(this.footerWrapper.nativeElement.offsetHeight * 0.2)}px 0px 0px 0px`, // Trigger when 20% of the footer is visible
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.footerWrapper.nativeElement.classList.add('visible');
        } else {
          this.footerWrapper.nativeElement.classList.remove('visible');
        }
      });
    }, options);

    observer.observe(this.footerWrapper.nativeElement);
  }
}
