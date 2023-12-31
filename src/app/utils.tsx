const businessList: string[] = [];
businessList.push("Info / Education");
businessList.push("E-Commerce");
businessList.push("Call Funnels");
businessList.push("Local Agency / Lead Gen");
businessList.push("Organic / Social Media");

const adSpendCounter: string[] = [];
adSpendCounter.push("3,650,500,000");
adSpendCounter.push("3,650,500,174");
adSpendCounter.push("3,650,500,357");
adSpendCounter.push("3,650,502,785");

type ModelProp = {
  post_title: string;
  post_message: string;
}

type TestimonialPost = {
  author_message: (string | {
    content: string;
    className: string;
  })[];
  author_name: string;
  author_description: string;
  author_profile: string;
};

type TwitterPost = {
  post_title: string;
  post_profile: string;
  post_text: string;
};

const modelProp: ModelProp[] = [{
  post_title: "Info Businesses",
  post_message: "Info",
}, {
  post_title: "Call Funnels",
  post_message: "Calls",
}, {
  post_title: "E-Commerce",
  post_message: "E-Commerce",
},
{
  post_title: "Agency",
  post_message: "Agency",
}];

const testimonials: TestimonialPost[] = [
  {
    author_message: [
      "In just 6 months allowed us to scale our ad spend by 43% for Business Mastery and over 100% for Unleash The Power Within. ",
      { content: "And I can't say how impressed.", className: "highlight" },
      " I am with HYROS's world class team."
    ],
    author_name: "TONY ROBBINS Ad Team",
    author_description: "The nation's top life and business strategist.",
    author_profile: "robbins.png",
  },
  {
    author_message: [
      { content: "Has made such a huge difference in the GC camp.", className: "highlight" },
      " Has Helped us really see what’s really going on."
    ],
    author_name: "GRANT CARDONE Ad Team",
    author_description: "#1 sales and marketing trainer in the world",
    author_profile: "cardone.png",
  },
  {
    author_message: ["Everybody who uses it in my mastermind swears by it. The ROI increase from increased tracking accurancy outweights the cost. It's a simple math decision."],
    author_name: "SAM OVENS",
    author_description: "Founder Consulting.com",
    author_profile: "sam.png",
  },
  {
    author_message: ["With HYROS, I can see exactly where my sales are coming from and we are already 300 % more profitable within 72 hours of using the software."],
    author_name: "DAN HENRY",
    author_description: "Founder of GetClients.com and Closedeals.com",
    author_profile: "dan.png",
  },
]

const twitterContent: TwitterPost[] = [
  {
    post_title: "Douglas James",
    post_profile: "photo2.png",
    post_text:
      "After 90 days of using Alex Becker’s True Tracking Software, Hyros, we’ve been able to scale 1 of our offers from $150,000 a month to $300,000 a month WITHOUT increasing ad spend. His team and...",
  },
  {
    post_title: "Stockton Walbeck",
    post_profile: "photo3.png",
    post_text:
      "For 6 years we've been running hundreds of thousands of dollars in ads and have always wondered if our FB and YT data was off or not. We always knew it wasn't 100% correct, and the second we...",
  },
  {
    post_title: "Nicki Geringer",
    post_profile: "photo.png",
    post_text:
      "Thanks to Hyros and the awesome support team we set our webinar/call funnel up in less than 30min. Hyros helped us to increase our daily ad spend form 300€ a day to over 1.200€ a day with...",
  },
  {
    post_title: "Daniel Sn",
    post_profile: "photo4.png",
    post_text:
      "Hyros's tracking is absolutely stellar. We run a webinar funnel and it was quite difficult to track where our ad spend should be going towards due to a myriad of different reasons. Prior to Hyros we were doing ok, but still just...",
  },
  {
    post_title: "Dan Henry",
    post_profile: "photo5.png",
    post_text:
      "I've spent millions of dollars on Facebook ads, and after one day using Hyros, I realize why it's always been so hard. Why people struggle. The fact of the matter is, Facebook, Google Analytics, etc... do not accurately...",
  },
  {
    post_title: "Ryan Wegner",
    post_profile: "photo6.png",
    post_text:
      "Hey @Calin @Alex Becker - Just dropping you guys a quick message to let you know how much Hyros has been helping with my campaigns. I was doing pretty well before (about $20k/month) but was struggling to scale my...",
  },
  {
    post_title: "Boniface Ogunti",
    post_profile: "photo7.png",
    post_text:
      "Hey! guy just wants to give a big shoutout to Alex Becker and his team thank you for all the help and support. Our team is loving the Hyors tracking software. We just started using it and it works very well we...",
  },
  {
    post_title: "Dan Ryder",
    post_profile: "photo4.png",
    post_text:
      "How anyone running traffic on Facebook or Google without real performance tracking is beyond me. If I would have relied on FB stats alone this week I would have missed out on 46% more profit. I would have turned...",
  },
  {
    post_title: "Evan Cutler",
    post_profile: "photo9.png",
    post_text:
      "Hey Guys, we run a digital agency and put True Tracking on a client of ours, the tracking was off by up to 40% on facebook. After setting up true tracking and tracking everything it allowed us to spot so many...",
  }
];

export { businessList, adSpendCounter, modelProp, testimonials, twitterContent };
export type { ModelProp, TestimonialPost, TwitterPost };
