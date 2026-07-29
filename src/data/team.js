import prestonLeePhoto from '../assets/team/preston-lee.png';
import ryanReshadiPhoto from '../assets/team/ryan-reshadi.png';

/**
 * Team members displayed on the About page.
 *
 * To add a new member:
 * 1. Add their photo to src/assets/team/
 * 2. Import the photo above
 * 3. Append a new entry to the array below
 */
export const teamMembers = [
  {
    id: 'preston-lee',
    name: 'Preston Lee',
    role: 'Founder & Executive Director',
    photo: prestonLeePhoto,
    bio: 'Preston Lee is the founder and Executive Director of The Financial Initiative and is a student at Homestead High School. He has conducted finance and economics research at universities, held a finance internship at an asset management firm focused on wealth management and ETF trading operations, and is connected with numerous finance professionals who have helped provide valuable insight into the finance world. Preston competes in FBLA where he has qualified for and competed at the national level and also manages his own portfolio where he invests his earnings into a variety of asset classes such as stocks and ETFs. Preston has also attended the Yale Young Global Scholars program at Yale University, after being selected out of tens of thousands of applicants, where he studied politics, law, and economics alongside peers from 150 different countries.',
  },
  {
    id: 'dylan-enck',
    name: 'Dylan Enck',
    role: 'Vice President of Marketing',
    photo: dylanEnckPhoto,
    bio: 'Dylan Enck is a Homestead High School student who has had an interest in money since childhood. In pursuit, he broadened his focus into finance and economics, leading to work with nonprofits, school-based clubs, and Economics For Leaders at Duke University. Through this path, Dylan has connected to public services as well as working with his local Assemblymember to conduct research, interact with constituents, and assist with further needs for both the office and the Assemblymember. Across this, investing has been seen as trivial for savings, with money spread across numerous stocks and index funds aimed to rise.',
  },

  {
    id: 'ryan-reshadi',
    name: 'Ryan Reshadi',
    role: 'Vice President of Technology',
    photo: ryanReshadiPhoto,
    bio: 'Ryan Reshadi, the Vice President of Technology at The Financial Initiative, is a STEM-focused student at Homestead High School who combines technical problem-solving with an interest in finance and business. He has competed nationally in FBLA and enjoys applying analytical thinking across disciplines. His experience spans programming in Python, Java, TypeScript, and C++, as well as advanced mathematics, physics, and data science concepts. He also attended Stanford Summer Session, where he completed college-level coursework alongside high-achieving students from around the world, further expanding his academic interests and exposure to advanced STEM topics. Through both competition and self-directed learning, he continues to develop the quantitative and technical skills needed to make an impact in STEM, business, and beyond.',
  },
];
