const skillsArr = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
    title: 'React'
  },
  {
    url: '/wp.png',
    title: 'Webpack'
  },
  // {
  //   url: '/wordpress.png',
  //   title: 'WordPress'
  // },
  {
    url: "/bootstrap.png",
    title: "Bootstrap"
  },
  {
    url: "https://material-ui.com/static/logo.png",
    title: "Material UI"
  },
  {
    url:'/laravel.png',
    title:'Laravel'
  },
  {
    url: '/express.png',
    title: 'Express'
  },
  {
    url: '/node.png',
    title: 'NodeJS'
  },
  {
    url: '/rails.png',
    title: 'Ruby on Rails'
  },
  {
    url: '/c.png',
    title: 'C & C++'
  },
  {
    url: '/pg.png',
    title: 'PostgreSQL'
  },
  
  {
    url: 'https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png',
    title: 'MongoDB'
  },
  {
    url: "data:image/png;base64,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",
    title: "MySQL"
  },
  

  {
    url: '/docker.png',
    title: 'Docker'
  },
  {
    url: '/kbe.png',
    title: 'Kubernetes'
  },
  
  
  // {
  //   url: '/wp.png',
  //   title: 'Webpack'
  // },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png",
    title: "Amazon Services"

  },
  {
    url: 'https://i.pinimg.com/originals/40/58/3b/40583b9485486616cc310cf5c5282b85.png',
    title: 'Google Cloud'
  },
  {
    url: 'https://d3r49iyjzglexf.cloudfront.net/circleci-logo-stacked-fb-657e221fda1646a7e652c09c9fbfb2b0feb5d710089bb4d8e8c759d37a832694.png',
    title: 'CircleCI'
  },
  {
    url: '/js.png',
    title: 'JavaScript'
  },
  {
    url: '/sass.png',
    title: 'Sass, JSS & CSS'
  },
  {
    url: '/html.svg',
    title: 'HTML'
  },
  {
    url: 'https://www.w3.org/WAI/wcag21/wcag2.1A-blue-v.png',
    title: 'W3C'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Responsive_Web_Design_Logo.svg/1200px-Responsive_Web_Design_Logo.svg.png',
    title: 'Responsive Design'
  }
];

export default skillsArr;