import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent {
  name: string = 'Ahmed';
  age: number = 27;
  skills: Array<string> = ['PHP', 'HTML', 'CSS'];
  education: any = '';
  userAvatar: string = 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000'
  isBtnDisabled : boolean = false;


  alertUsername() {
    alert(this.name)
  }
}
