module.exports = {
  siteTitle: "Hi there 👋 I'm Luca",
  siteDescription: `Luca Previtali website`,
  keyWords: [
    'luca previtali',
    'lucaprevitali',
    'curriculum',
    'react',
    'frontend developer',
    'javascript',
  ],
  authorName: 'Luca Previtali',
  twitterUsername: 'lucaprevi21',
  githubUsername: 'lucaprevitali',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Passionate Javascript developer. I currently work as a frontend developer and mainly work with <strong>Typescript, Redux and React</strong>. Active <a href="https://stackoverflow.com/users/5572406/the-previ" target="_blank" rel="noreferrer">stackoverflow member</a>`,
  jobs: [
    {
      company: 'Mikamai',
      begin: {
        month: 'oct',
        year: '2020',
      },
      duration: null,
      occupation: 'Frontend developer',
      description:
        'Development of web applications built with TypeScript, React, Redux',
    },
    {
      company: 'Knobs',
      begin: {
        month: 'nov',
        year: '2018',
      },
      duration: '2 years',
      occupation: 'Frontend developer',
      description:
        'Development of web applications built with React, Redux, Firebase and Meteor. Development of mobile applications with React Native. Prototyping with Adobe XD and Figma.',
    },
    {
      company: 'Creeo Studio',
      begin: {
        month: 'nov',
        year: '2017',
      },
      duration: '1 year and 1 month',
      occupation: 'Web developer',
      description: 'Development of PHP websites',
    },
    {
      company: 'almaware srl',
      begin: {
        month: 'may',
        year: '2016',
      },
      duration: '1 year and 3 months',
      occupation: 'Web developer',
      description: 'Development of PHP websites',
    },
    {
      company: 'Proxima Lab',
      begin: {
        month: 'nov',
        year: '2015',
      },
      duration: '5 months',
      occupation: 'Web developer',
      description: 'Development of PHP websites',
    },
  ],
  portfolio: [
    {
      image: '/images/easy-release.png',
      description: 'Easy release',
      url: 'https://www.npmjs.com/package/@luca_previtali/easy-release',
    },
    {
      image: '/images/js-to-coffee.png',
      description: 'Js to Coffee',
      url:
        'https://marketplace.visualstudio.com/items?itemName=lucaprevi.js-to-coffee',
    },
  ],
  social: {
    twitter: 'https://twitter.com/lucaprevi21',
    linkedin: 'https://www.linkedin.com/in/previtaliluca/',
    github: 'https://github.com/lucaprevitali',
    email: 'lucaprevi@gmail.com',
  },
  siteUrl: 'https://lucaprevitali.dev',
  pathPrefix: '/luca-previtali-dev',
  siteCover: '/images/pexels-sergei-starostin-6636474.jpg',
  googleAnalyticsId: 'UA-69742620-1',
  background_color: '#ffffff',
  background_light: '#fdfdfd',
  theme_color: '#25303B',
  fontColor: '#000000cc',
  enableDarkmode: true,
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portfolio',
      url: '/portfolio',
    },
  ],
}
