import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  about: string = 'About Me';
  aboutContent: string =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam sequi dignissimos alias praesentium at asperiores a repellat non accusantium ad. Fuga doloremque reprehenderit soluta excepturi labore ratione cum impedit animi, saepe aut consectetur consequatur laborum! Quaerat nam odit tempora repellendus deserunt sequi dicta ad inventore reiciendis at. Tempora sequi iure consequatur, minus ducimus iste, nam maiores a quae eaque asperiores laborum reprehenderit minima numquam hic dolor veritatis accusamus nulla enim nobis ipsa temporibus ex omnis?';
}
