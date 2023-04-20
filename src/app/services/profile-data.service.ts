import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileDataService {
  constructor() {}

  private aboutData: any = {
    title: 'Web Developer',
    subtitle: 'Hello, my name is Rostyslav Shkolyk.',
    content: `
    I am an experienced Web Developer from Lviv with a passion for building dynamic and engaging web applications. With over three years of experience, I have had the pleasure of working with clients from the USA, Canada, and Europe, delivering top-notch results every time.
    <br><br>
    Staying up-to-date with the latest web development technologies and tools is a top priority for me, and I have accomplished this through completing various courses. My knowledge of web development technologies is extensive, including Angular, React, Node.js, MongoDB, Express.js, HTML, CSS, JavaScript, and others.
    <br><br>
    My commitment to delivering exceptional service is unwavering, and I pride myself on delivering top-notch results every time. My skills in project collaboration, communication, and management are well-honed, and I have experience working with Jira, Bitbucket, GitLab, and GitHub. Overall, my goal is to exceed your expectations by providing high-quality work that drives your business forward.`,
    birthday: '13 June',
    website: 'ross-webdev.com',
    city: 'Lviv, Ukraine',
    age: 25,
    email: 'smoothie.anon@gmail.com',
    openToWork: 'Yes',
    skills: {
      html: 90,
      css: 75,
      js: 95,
      angular: 85,
      react: 75,
      node: 50,
    },
  };

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

  // mock data for services page
  private myServicesData: any = {
    title: 'My web development services',
    items: [
      {
        title: 'Angular',
        icon: 'bx bxl-angular',
        color: '#dd0031',
        content:
          'Build complex single-page front-end Web application using Angular framework with TypeScript.',
        link: 'https://angular.io/',
      },
      {
        title: 'React',
        icon: 'bx bxl-react',
        color: '#61dafb',
        content:
          'Build dynamic front-end Web application using React JavaScript library.',
        link: 'https://reactjs.org/',
      },
      {
        title: 'Next.js',
        icon: 'no-font-icon',
        iconSrc: 'assets/img/icons/nextjs.svg',
        content:
          'Build SEO friendly full-stack (hybrid) Web applications using React with Next.js framework.',
        link: 'https://nextjs.org/',
      },
      {
        title: 'JavaScript',
        icon: 'bx bxl-javascript',
        color: '#f7df1e',
        content:
          'Build dynamic website using HTML, CSS, JavaScript with any other JS library.',
        link: 'https://www.javascript.com/',
      },
      {
        title: 'Node.js',
        icon: 'bx bxl-nodejs',
        color: '#339933',
        content:
          'Build back-end of the application using Node.js and Express.js.',
        link: 'https://nodejs.org/en/about/',
      },
      {
        title: 'MongoDB',
        icon: 'bx bxl-mongodb',
        color: '#47a248',
        content:
          'Build and implement database for the application using MongoDB.',
        link: 'https://www.mongodb.com/',
      },
    ],
  };

  private contactsData: any = {
    address: 'Lviv, Ukraine',
    email: 'smoothie.anon@gmail.com',
    socialMedia: [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/rostyslav-shkolyk/',
        icon: 'bi bi-linkedin',
      },
      {
        name: 'GitHub',
        link: 'https://github.com/uns4inted/',
        icon: 'bi bi-github',
      },
      {
        name: 'Skype',
        link: 'https://join.skype.com/invite/nXFAH7Jl5nJd',
        icon: 'bi bi-skype',
      },
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/NoLif3r/',
        icon: 'bi bi-facebook',
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/nolif3r_senpai/',
        icon: 'bi bi-instagram',
      },
    ],
  };

  public getAboutData(): any {
    return this.aboutData;
  }

  public getResumeData() {
    return this.resumeData;
  }

  public getMyServicesData(): any {
    return this.myServicesData;
  }

  public getContactsData(): any {
    return this.contactsData;
  }

  public getSocialLinks(): any {
    return this.contactsData.socialMedia;
  }
}
