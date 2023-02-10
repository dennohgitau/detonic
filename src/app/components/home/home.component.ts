import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public userDetails: any = [];

  constructor(private apiservice: ApiService, private elementRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.apiservice.getData()
      .subscribe(res => {
        this.userDetails = res;
        console.log(this.userDetails)
      })
  }

  scrollToElement(elementId: string): void {
    const element = this.elementRef.nativeElement.querySelector(`#${elementId}`);
    this.renderer.setProperty(element, 'scrollIntoView', { behavior: 'smooth' });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

}
