import { Component, ViewChild } from '@angular/core';
import { ModalComponent, WorkExperience } from './modal/modal.component';

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

  isModalActive: boolean = false;
  selectedWorkIndex: number = 0;

  workExperiences: WorkExperience[] = [
    {
      title: 'Software Engineer Internship',
      timeframe: 'Setember 2022 -- May 2023',
      description: 'During my internship, I was actively involved in both the development and maintenance of a software application, utilizing Angular for the front-end and Java for the back-end. I participated in numerous trainings that encompassed a range of topics from cloud computing and microservices to best practices in software development and professional work conduct. Additionally, I underwent training on essential microsoftware tools, including Excel, PowerPoint, and Azure.'
    },
    {
      title: 'Software Engineer Junior',
      timeframe: 'May 2023 -- Present',
      description: "In my current role, I continue to provide maintenance and develop new features for the system I initially worked on during my internship. I collaborate with tools like MongoDB and Kafka to ensure data integrity in our databases. My professional growth is further enriched by Agile trainings, and I actively contribute as a team member in a Scrum setting. I've also honed my skills in software testing by creating unit tests using JUnit. Notably, I had the privilege of being a winner at a recent Hackathon, showcasing my innovative capabilities. Additionally, I've been involved in the company's Design System, specifically in validating accessibility issues. Recently, I've begun participating in accessibility projects and am keen on deepening my expertise in this crucial area."
    },

    {
      title: 'Scrum Master and Product Designer',
      timeframe: 'February 2023 -- November 2023',
      description: 'Detailed description for Scrum Master and Product Designer...'
    },
    {
      title: 'Ux Design and Requirements Analyst',
      timeframe: 'February 2022 -- November 2022',
      description: 'Detailed description for Ux Design and Requirements Analyst...'
    }
  ];

  openModal(index: number): void {
    this.selectedWorkIndex = index;
    this.isModalActive = true;
  }

  closeModal(): void {
    this.isModalActive = false;
  }
}


