import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  mail: string = ' kr12@example.com';
  contact: number = 123456789;
  copyRight: string = 'Copyright © 2019 KR';
}
