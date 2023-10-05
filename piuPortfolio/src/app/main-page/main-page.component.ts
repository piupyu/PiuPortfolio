import { Component, ElementRef, ViewChild } from '@angular/core';
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
      description: `During my internship, I was actively involved in both the development and maintenance of a software application, utilizing Angular for the front-end and Java for the back-end. I participated in numerous trainings that encompassed a range of topics from cloud computing and microservices to best practices in software development and professional work conduct. Additionally, I underwent training on essential microsoftware tools, including Excel, PowerPoint, and Azure.`
    },
    {
      title: 'Software Engineer Junior',
      timeframe: 'May 2023 -- Present',
      description: `In my current role, I continue to provide maintenance and develop new features for the system I initially worked on during my internship. I collaborate with tools like MongoDB and Kafka to ensure data integrity in our databases. My professional growth is further enriched by Agile trainings, and I actively contribute as a team member in a Scrum setting. I've also honed my skills in software testing by creating unit tests using JUnit. Notably, I had the privilege of being a winner at a recent Hackathon, showcasing my innovative capabilities. Additionally, I've been involved in the company's Design System, specifically in validating accessibility issues. Recently, I've begun participating in accessibility projects and am keen on deepening my expertise in this crucial area.`
    },
    {
      title: 'Scrum Master and Product Designer',
      timeframe: 'February 2023 -- November 2023',
      description: `Navigating through a hands-on educational journey, my university peers and I have teamed up with Ford through the innovative "Challenge" program, aiming to bring an intuitive app to Ford Ranger owners. In my role as Scrum Master, I'm ensuring our team's smooth sailing through the agile development process by adhering to Scrum methodologies, while also getting our hands dirty in the creative soil by sculpting the app's visual identity with Figma. I was also in charge of creating the BackOffice of this application. I developed an Angular application that exposes the app data and user data.`
    },
    {
      title: 'Ux Design and Requirements Analyst',
      timeframe: 'February 2022 -- November 2022',
      description: `Diving into another exhilarating challenge at university, my class entered a partnership with Banco Pan, aiming to revitalize and streamline their customer registration process. The objective was clear: make the onboarding journey smoother and more practical for every client. My engagement in this project was twofold. First, I was immersed in the UX design of the registration pages, where I focused on enhancing user interactions and elevating overall user experience to ensure ease of use and intuitive navigation. Secondly, I took the helm in drafting all the technical documentation, meticulously detailing each aspect to provide a clear, comprehensive guide for future reference and ongoing development. This endeavor wasn’t merely an assignment; it was a real-world challenge that enriched our practical understanding and application of technological and UX design principles in a live corporate project.`
    }
  ];

  openModal(index: number): void {
    this.selectedWorkIndex = index;
    this.isModalActive = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalActive = false;
    document.body.style.overflow = '';
  }
}


