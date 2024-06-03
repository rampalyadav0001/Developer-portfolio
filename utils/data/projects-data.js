import ayla from '/public/image/ayla.jpg';
import Project1 from '/public/image/Project1.png';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
  {
    id: 1,
    name: 'Flavour-Fusion - An FoodCourt App',
    description:
      'Me and my team developed a food court app called Flavour-Fusion. I worked as a Frontend developer and developed the App using React.js and Material UI. I used Redux for state management and Axios for API calls. I also integrated RozerPay for payment integration.our app is designed to provide a seamless experience for students to order food from College Canteen.',
    tools: [
      'JavaScript',
      'React.js',
      'redux',
      'Tailwind Css',
      'MongoDB',
      'Express.js',
      'Node.js',
    ],
    role: 'Frontend Developer',
    code: 'https://github.com/rampalyadav0001/Flavour_Fusion',
    demo: 'https://flavour-fusion-eight.vercel.app/',
    image: Project1,
  },
  {
    id: 2,
    name: 'CryptoFund: Decenteralized crowdFunding Platform',
    description:
      'Developed a decentralized Web3 crowdfunding app with secure NFT smart contracts using Solidity. Built user interfaces with ReactJS and Material UI, integrating Ether.js for front-end and Ethereum Blockchain interaction. Employed third-web technology and Hardhat for enhanced decentralization, scalability, and efficient smart contract testing, compilation, and deployment.',
    tools: ['React.js', 'Tailwind CSS', 'Solidity', 'Web3', 'SmartContract' ],
    role: 'Full Stack Developer',
    code: 'https://github.com/rampalyadav0001/CryptoFund',
    demo: 'https://github.com/rampalyadav0001/CryptoFund',
    image: travel,
  },
  {
    id: 3,
    name: 'CryptoVerse',
    description:
      'Developed Cryptoverse, a platform offering real-time news, exchange values, and detailed cryptocurrency information using RapidAPI. Created a user-friendly interface with React.js and JavaScript, allowing users to access current market trends, analysis, and comprehensive insights, including historical data, market cap, and volume.',
    tools: [
      'javascript',
      'React.js',
      'Tailwind CSS',
      'RapidAPI',
      'Redux',	
    ],
    code: 'https://cryptoverse-cryptonews.netlify.app/',
    role: 'Full Stack Developer',
    demo: 'https://github.com/rampalyadav0001/cryptoverse',
    image: realEstate,
  },
  {
    id: 4,
    name: 'E-commerce Website',
    description:
      "Developed an e-commerce website. I worked as a frontend-developer and developed the website using React.js and Material UI. I used Redux for state management and Axios for API calls. I also integrated Stripe for payment integration. The website is designed to provide a seamless experience for users to buy products.",
    tools: ['javascript','React.js', 'Material UI', 'Redux', 'Tailwind Css', ],
    code: 'https://github.com/rampalyadav0001/React-Ecommerce',
    demo: 'https://github.com/rampalyadav0001/React-Ecommerce',
    image: ayla,
    role: 'Full Stack Developer',
  },
  //   {
  //     id: 5,
  //     name: 'Newsroom Management',
  //     description:
  //       "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
  //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', 'Calendar'],
  //     code: '',
  //     demo: '',
  //     image: ayla,
  //     role: 'Full Stack Developer',
  //   },
  //   {
  //     id: 6,
  //     name: 'Newsroom Management',
  //     description:
  //       "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
  //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', 'Calendar'],
  //     code: '',
  //     demo: '',
  //     image: ayla,
  //     role: 'Full Stack Developer',
  //   },
  //   {
  //     id: 7,
  //     name: 'Newsroom Management',
  //     description:
  //       "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
  //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', 'Calendar'],
  //     code: '',
  //     demo: '',
  //     image: ayla,
  //     role: 'Full Stack Developer',
  //   },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
