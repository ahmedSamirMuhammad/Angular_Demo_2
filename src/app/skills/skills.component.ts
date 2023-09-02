import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills: string = 'Skills';
  skillsDescription: string =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribusaccusantium distinctio vitae nostrum magni, cum cumque! Nullaexercitationem ullam veritatis blanditiis quibusdam, nesciunt assumenda pariatur, sapiente iusto quod sed minus atque, earum officia molestiae esse quo quasi labore voluptatibus. Rerum dolores nostrum laboriosam voluptates amet accusantium labore architecto repellat iure? Dolores tempora illum amet suscipit soluta excepturi provident cupiditate? Repudiandae ipsam perferendis nesciunt dolores esse tenetur minima nostrum magnam vero';
  skillsList: string = 'MY FOCUS';
  skillsBar: string = 'Experience';
  skillsArray: Array<any> = [
    {
      name: 'HTML',
      percentage: 'width: 90%',
    },
    {
      name: 'CSS',
      percentage: 'width: 60%',
    },
    {
      name: 'Angular',
      percentage: 'width: 70%',
    },
    {
      name: 'PHP',
      percentage: 'width: 80%',
    },
    {
      name: 'Laravel',
      percentage: 'width: 50%',
    },
  ];
}
