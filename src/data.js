import  mitrc from "./assets/MITRC.jpg"
// experts data 
export const experts = [
    {
      name: 'Dr. Anil Sharma',
      designation: 'Chief Cybersecurity Officer',
      email: 'anil.sharma@example.com',
      phone: '+91-9876543210',
      location: 'New Delhi, India'
    },
    {
      name: 'Ms. Priya Kapoor',
      designation: 'Senior Cybersecurity Analyst',
      email: 'priya.kapoor@example.com',
      phone: '+91-8765432109',
      location: 'Mumbai, India'
    },
    {
      name: 'Mr. Rohan Verma',
      designation: 'Cybersecurity Specialist',
      email: 'rohan.verma@example.com',
      phone: '+91-7654321098',
      location: 'Bengaluru, India'
    },
    {
      name: 'Mr. Jai Singh Rajput',
      designation: 'Full Stack Developer',
      email: 'jaisinghmitrc@gmail.com',
      phone: '+91-9461661537',
      location: 'Rajasthan, India'
    }
  ];

// schemes

 export const schemes = [
  {
    title: 'The future of cybersecurity:policy and practice from mitrc College',
    image:mitrc,
    description: 'This site delves into emerging threats and innovative frameworks designed to address security issues.'
  },
    {
      title: 'Har Ghar Tiranga',
      image: 'https://www.india.gov.in/sites/upload_files/npi/files/har-ghar-tringa-npi_0.jpg',
      description: '09 to 15 August'
    },
    {
      title: 'Smart Cities Mission',
      image: 'https://www.india.gov.in/sites/upload_files/npi/files/e_upahaar.jpg',
      description: 'Transforming cities with smart infrastructure and technology.'
    },
    {
      title: 'Indian Cyber Squad',
      image:'https://static.wixstatic.com/media/b2dfda_ba2fa39fc63042679b245e01f293168f~mv2.jpg/v1/fill/w_1001,h_342,al_c,lg_1,q_80,enc_auto/b2dfda_ba2fa39fc63042679b245e01f293168f~mv2.jpg',
      description: 'Welcome to Indian Cyber Squad'
    },
   
  ];

  //demo reports 
  export const demoReports = [
    {
      id: 1,
      title: 'Phishing Email Scam',
      description: 'Received an email pretending to be from a bank asking for personal information.',
      status: 'Pending',
      date: '2024-08-01',
      location: 'Delhi, India',
    },
    {
      id: 2,
      title: 'Online Shopping Fraud',
      description: 'Purchased a product online, but never received it. The seller is unresponsive.',
      status: 'Resolved',
      date: '2024-07-15',
      location: 'Mumbai, India',
    },
    {
      id: 3,
      title: 'Fake Tech Support Call',
      description: 'Received a call claiming to be from a tech support company, asking for remote access to my computer.',
      status: 'Pending',
      date: '2024-07-25',
      location: 'Bangalore, India',
    },
    {
      id: 4,
      title: 'Investment Scam',
      description: 'Invested in a fraudulent scheme promising high returns, but lost all my money.',
      status: 'Resolved',
      date: '2024-06-30',
      location: 'Chennai, India',
    },
    {
      id: 5,
      title: 'Lottery Scam',
      description: 'Received a message claiming I won a lottery and asking for payment to release the funds.',
      status: 'Pending',
      date: '2024-08-10',
      location: 'Kolkata, India',
    },
    {
      id: 6,
      title: 'Social Media Impersonation',
      description: 'Someone created a fake profile using my pictures and personal information on social media.',
      status: 'Resolved',
      date: '2024-07-05',
      location: 'Hyderabad, India',
    },
  ];
  
  // tranding scams 
  export const trendingScams = [
    {
      id: 1,
      title: "Phishing Scam - Fake Bank Alerts",
      description: "Scammers are sending fake alerts claiming to be from your bank, asking for account verification. They often include a link that leads to a phishing site designed to steal your personal information.",
      reportCount: 1200,
      date: "2024-08-10",
    },
    {
      id: 2,
      title: "Lottery Scam - You’ve Won a Prize!",
      description: "Victims are receiving messages claiming they've won a large sum of money in a lottery they never entered. The scam asks for personal details and an upfront fee to release the funds.",
      reportCount: 950,
      date: "2024-08-08",
    },
    {
      id: 3,
      title: "Tech Support Scam - Fake Virus Alert",
      description: "A pop-up message warns that your computer is infected with a virus and urges you to call a toll-free number for assistance. The scammers pretend to be tech support and charge for unnecessary services.",
      reportCount: 1100,
      date: "2024-08-09",
    },
    {
      id: 4,
      title: "Investment Scam - Quick Rich Schemes",
      description: "Fraudsters promise high returns with minimal risk through fake investment opportunities. Victims are lured into investing their money, only to lose it all.",
      reportCount: 850,
      date: "2024-08-07",
    },
    {
      id: 5,
      title: "Job Offer Scam - High Paying Remote Jobs",
      description: "Scammers post fake job listings with offers of high-paying remote jobs. They ask for personal information and sometimes a payment for processing fees.",
      reportCount: 780,
      date: "2024-08-11",
    },
  ];
  
  // user stories
export const storiesData = [
  {
    id: 1,
    title: "A Close Call with a Phishing Scam",
    author: "Anjali Verma",
    story: `
      It was a regular Wednesday morning when I received an email that seemed to be from my bank. The email had the bank's logo and a very professional layout. It mentioned that there was suspicious activity on my account and that I needed to verify my identity immediately to avoid my account being locked.

      The email provided a link to click on, which I almost did. However, something didn't feel right. The urgency of the message made me suspicious. I decided to hover over the link instead of clicking on it directly. That's when I noticed the URL was not from my bank's official website but some strange domain I'd never seen before.

      I immediately called my bank's customer service, and they confirmed that they hadn't sent any such email. The representative told me that it was indeed a phishing attempt and thanked me for reporting it. Had I clicked on that link, I would have entered my account details, which would have been stolen.

      This experience taught me a valuable lesson about being cautious with unsolicited emails, no matter how legitimate they might seem. Always verify the source before clicking on any links, especially when it comes to sensitive information.
    `,
    scamType: "Phishing",
    date: "2024-06-12",
    helpfulCount: 23,
    approved: true,
  },
  {
    id: 2,
    title: "Tech Support Scam: How I Almost Fell for It",
    author: "Ravi Sharma",
    story: `
      I received a call one evening from someone claiming to be from Microsoft. The caller had a thick accent and told me that they had detected a virus on my computer and needed to fix it immediately. They sounded very convincing and knew a lot about my operating system.

      The caller instructed me to download a remote access tool so they could "fix" the issue. They were very persistent, saying that my computer was at risk of being permanently damaged. It all felt very urgent, and I started to panic.

      Just before I was about to download the software, I remembered reading about tech support scams online. I asked the caller for their employee ID and said I would call Microsoft directly to verify. At this point, the caller became aggressive, insisting that I had no time to waste.

      This made me even more suspicious, so I hung up the phone and contacted Microsoft through their official website. As I suspected, Microsoft confirmed that the call was a scam. The representative advised me to never allow anyone remote access to my computer unless I had initiated the support request.

      It was a close call, but I was lucky to avoid becoming a victim. This experience made me realize how easily someone can fall for these scams, especially when they use fear tactics to push you into making quick decisions.
    `,
    scamType: "Tech Support Scam",
    date: "2024-07-22",
    helpfulCount: 30,
    approved: true,
  },
  {
    id: 3,
    title: "Investment Scam: Too Good to Be True",
    author: "Priya Singh",
    story: `
      Last year, I was contacted by someone on social media who presented themselves as a successful investor. They had an impressive profile, filled with photos of luxury cars, vacations, and testimonials from other "clients." The person claimed to have a foolproof investment strategy that would guarantee high returns with very little risk.

      Initially, I was skeptical, but the more we talked, the more convinced I became. They showed me what seemed like legitimate proof of returns and even offered to let me start with a small investment to see how it worked. I transferred a modest amount, and within a week, I received a return, just as promised.

      Feeling more confident, I decided to invest a larger sum. This time, things went differently. Days turned into weeks, and I heard nothing. When I tried to contact the person, they were suddenly unavailable. Their social media accounts were either deleted or blocked, and I realized I had been scammed.

      I reported the incident to the authorities, but there was little they could do since the scammer operated from a different country. This experience was devastating, both financially and emotionally. I learned the hard way that if something sounds too good to be true, it probably is. It's crucial to do thorough research and never rush into any financial decisions, no matter how enticing they seem.
    `,
    scamType: "Investment Scam",
    date: "2023-12-05",
    helpfulCount: 18,
    approved: true,
  },
  {
    id: 4,
    title: "Identity Theft: My Nightmare Experience",
    author: "Rahul Mehta",
    story: `
      A few months ago, I started receiving letters from various banks about credit cards and loans that I had supposedly applied for. The problem was, I hadn't applied for any of them. I immediately knew something was wrong, but I had no idea just how bad it was going to get.

      Someone had managed to get hold of my personal information and used it to open multiple credit accounts in my name. They had racked up thousands of rupees in debt, and I was left to deal with the aftermath. My credit score plummeted, and I spent countless hours on the phone with banks, credit bureaus, and even the police, trying to clear my name.

      The process was long and exhausting. I had to prove that I wasn't the one who had opened these accounts and that I was the victim of identity theft. It took months to resolve, and even now, I still monitor my credit report regularly to make sure nothing new pops up.

      This experience was a wake-up call for me. I learned the importance of safeguarding personal information, being cautious with sharing details online, and regularly monitoring my financial accounts for any suspicious activity. Identity theft is a serious issue, and it can happen to anyone.
    `,
    scamType: "Identity Theft",
    date: "2024-01-14",
    helpfulCount: 42,
    approved: true,
  },
  {
    id: 5,
    title: "Online Shopping Scam: How I Got Tricked",
    author: "Sneha Kapoor",
    story: `
      I was browsing an online marketplace when I came across a deal that seemed too good to pass up. A brand-new smartphone, listed at half the retail price. The seller had a few good reviews and a verified badge, so I thought it was safe to proceed.

      I contacted the seller, who seemed polite and professional. They asked me to pay through a direct bank transfer instead of the marketplace's payment system, claiming it would be faster and more secure. I hesitated but eventually agreed because I didn't want to miss out on the deal.

      After transferring the money, the seller stopped responding to my messages. Days went by, and I never received the phone. It was then that I realized I had been scammed. I tried to report the incident to the marketplace, but because the transaction took place outside their system, they couldn't offer much help.

      This experience taught me a valuable lesson about online shopping: always use the official payment systems provided by the marketplace, even if the seller suggests otherwise. If a deal seems too good to be true, it probably is. Trust your instincts and don't let the fear of missing out cloud your judgment.
    `,
    scamType: "Online Shopping Scam",
    date: "2024-04-19",
    helpfulCount: 25,
    approved: true,
  },
]