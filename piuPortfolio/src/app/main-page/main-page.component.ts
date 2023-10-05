import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  skills = [
    { name: 'Angular', percentage: 70 },
    { name: 'FullStack Development', percentage: 70 },
    { name: 'Cloud and IA', percentage: 50 },
    { name: 'UX/UI', percentage: 80 },
    { name: 'Agile Framework', percentage: 95 },
    { name: 'Office 360', percentage: 100 }
  ];

}
