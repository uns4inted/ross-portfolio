import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileDataService {
  constructor() {}

  // mock data for resume page
  private resumeData: any = {
    sumary: {
      title: 'Sumary',
      fullName: 'Rostyslav Shkolyk',
      content:
        'I am a full stack developer with 5+ years of experience in web development. I have worked on a wide range of technologies and projects. I am passionate about building scalable and maintainable web applications. I am a quick learner and a team player. I am always looking for opportunities to learn and grow.',
      address: 'Lviv, Ukraine',
      email: 'smoothie.anon@gmail.com',
    },
    education: {
      title: 'Education',
      courses: [
        {
          title: 'The Complete 2023 Web Development Bootcamp',
          subtitle: 'Udemy course by Angela Yu.',
          date: '2023',
          content:
            'I have studied React, Node.js, MongoDB, Express.js, and other web development technologies.',
        },
        {
          title: 'Unreal Engine 5 Blueprint and C++ Development',
          subtitle: 'Udemy courses by GameDev.tv.',
          date: '2021-2022',
          content:
            'I have studied Unreal Engine 4 and 5, C++ programming language basics for game development.',
        },
        {
          title: 'Angular - The Complete Guide',
          subtitle: 'Udemy course by Maximilian Schwarzmüller.',
          date: '2019',
          content: 'I have studied TypeScript and Angular framework.',
        },
        {
          title: 'Web-developer',
          subtitle: 'Udemy course by Ivan Petrychenko.',
          date: '2018',
          content: 'I have studied web development technologies and tools.',
        },
        {
          title: 'HTML, CSS and JavaScript',
          subtitle: 'Codeacademy courses.',
          date: '2018',
          content: 'I have studied HTML, CSS and JavaScript basics.',
        },
      ],
      items: [
        {
          title: 'The Ivan Franko National University of Lviv',
          subtitle: 'Polish language and literature.',
          date: '2014 - 2017',
          content: 'I have studied Polish language and literature.',
        },
        {
          title: 'IT College of Lviv Polytechnic National University',
          subtitle:
            'Vocational education - Telecommunication and computer technologies.',
          date: '2012 - 2014',
          content:
            'I have studied the basics of computer science, programming, networking, and telecommunications.',
        },
      ],
    },
    experience: {
      title: 'Professional Experience',
      items: [
        {
          title: 'Front-end developer',
          subtitle: 'JetSoftPro, Urkaine, Lviv',
          date: '2019 - 2021',
          content: `
              <ul>
                <li>Build and maintain web applications using Angular framework for clients from the USA, Canada, and Europe.</li>
                <li>Maintain, update and optimize inner company projects.</li>
                <li>Project planning, estimation, reporting and documentation.</li> 
                <li>Collaborate with other team members, communicate with clients.</li>
                <li>Manage projects using Jira, Bitbucket, GitLab, GitHub.</li>
                <li>Bug fixing, code refactoring, code review.</li>
                <li>Mentor junior developers.</li>
              </ul>
            `,
        },
      ],
    },
  };

  public getResumeData() {
    return this.resumeData;
  }
  
}
