const founderImage = "/plumberOwner.png";
const heroImage = "/heroImagePlumbing.png";
const emergencyPlumbing = "/emergency-plumbing.png";
const drainCleaning = "/drainCleaning.png";
const waterHeater = "/waterHeater.png";
const pipeRepair = "/pipeRepair.png";
const fixture = "/fixture.png";
const sewerLine = "/sewerLine.png";
const wholeHome = "/wholeHome.png";
const emergencyPipe = "/emergencyPipe.png";
const waterHeaterReplace = "/waterHeaterReplace.png";

const commons = {
  heroImage: heroImage,
  rating: 4.8,
  reviewCount: 96,
  yearsInBusiness: 11,
  trustBadges: ["Licensed plumbers", "Locally owned"],

  eyebrow: "Reliable plumbing service for your home",

  headline: "Reliable plumbing, built to keep your home running smoothly.",

  subheadline:
    "Quality plumbing repairs, installations, and emergency service backed by experienced professionals who treat your home with care.",
  hours: ["Mon–Fri: 7:00 AM–7:00 PM", "Sat: 8:00 AM–3:00 PM"],
  services: [
    {
      name: "Emergency Plumbing",
      description:
        "Fast help for urgent plumbing problems including major leaks, burst pipes, overflowing fixtures, and other issues that need immediate attention.",
      icon: "emergency",
      image: emergencyPlumbing,
    },
    {
      name: "Drain Cleaning",
      description:
        "Professional drain cleaning to clear stubborn clogs, slow drains, and buildup and help restore proper water flow throughout your home.",
      icon: "drain",
      image: drainCleaning,
    },
    {
      name: "Water Heater Repair",
      description:
        "Diagnosis and repair for water heaters that are leaking, producing inconsistent hot water, or not working properly.",
      icon: "water-heater",
      image: waterHeater,
    },
    {
      name: "Pipe Repair",
      description:
        "Reliable repairs for leaking, damaged, or aging pipes to help prevent water damage and keep your home's plumbing system working properly.",
      icon: "pipe",
      image: pipeRepair,
    },
    {
      name: "Fixture Installation",
      description:
        "Professional installation of faucets, sinks, toilets, showers, and other plumbing fixtures with careful attention to proper connections and finishing.",
      icon: "installation",
      image: fixture,
    },
    {
      name: "Sewer Line Services",
      description:
        "Inspection and repair solutions for sewer line problems, recurring blockages, backups, and other issues affecting your home's drainage system.",
      icon: "sewer",
      image: sewerLine,
    },
  ],
  about: {
    title: "Comfort service built around clear communication.",
    body: "Our technicians explain what they find, what can be done, and what each option means for your home. The goal is simple: solve the problem and leave you confident in the decision.",
  },
  team: [
    {
      name: "Peggy Carter",
      role: "Owner & Lead Technician",
      bio: "Our company comes with a repair-first, no-pressure approach. Understand what your roof needs, explore your options, and make the next decision with confidence.",
      image: founderImage,
    },
  ],
  reviews: [
    {
      name: "Daniel M.",
      location: "Austin, TX",
      date: "June 2026",
      text: "They responded quickly to our plumbing issue and explained exactly what needed to be fixed before starting the work.",
      rating: 5,
    },
    {
      name: "Sarah R.",
      location: "Round Rock, TX",
      date: "May 2026",
      text: "Our kitchen drain had been giving us problems for weeks. They cleared it quickly and everything has been working perfectly since.",
      rating: 5,
    },
    {
      name: "Michael T.",
      location: "Cedar Park, TX",
      date: "May 2026",
      text: "Very professional service. The technician found the leak quickly and completed the repair without leaving a mess behind.",
      rating: 5,
    },
    {
      name: "Jessica L.",
      location: "Pflugerville, TX",
      date: "April 2026",
      text: "We had no hot water and they were able to diagnose the water heater problem and get it working again.",
      rating: 5,
    },
    {
      name: "Robert K.",
      location: "Georgetown, TX",
      date: "April 2026",
      text: "Great communication from scheduling through completion. The plumber arrived on time and clearly explained the options.",
      rating: 5,
    },
    {
      name: "Amanda P.",
      location: "Leander, TX",
      date: "March 2026",
      text: "They replaced our old faucet and handled everything professionally. The new installation looks great and works perfectly.",
      rating: 5,
    },
    {
      name: "Chris W.",
      location: "Austin, TX",
      date: "March 2026",
      text: "Called them for an emergency leak and they were able to get someone out quickly. Excellent service and very helpful.",
      rating: 5,
    },
    {
      name: "Jennifer S.",
      location: "Round Rock, TX",
      date: "February 2026",
      text: "Our bathroom drain was completely backed up. They found the blockage and had everything flowing normally again in no time.",
      rating: 5,
    },
    {
      name: "David H.",
      location: "Cedar Park, TX",
      date: "February 2026",
      text: "Professional, courteous, and straightforward. They gave us a clear explanation of the pipe issue and completed the repair properly.",
      rating: 5,
    },
    {
      name: "Emily C.",
      location: "Pflugerville, TX",
      date: "January 2026",
      text: "Really happy with the service. They arrived when promised, worked efficiently, and cleaned everything up afterward.",
      rating: 5,
    },
    {
      name: "Mark B.",
      location: "Austin, TX",
      date: "January 2026",
      text: "We needed a new water heater and the whole process was much easier than expected. The installation was clean and professional.",
      rating: 5,
    },
    {
      name: "Rachel G.",
      location: "Leander, TX",
      date: "December 2025",
      text: "They took the time to explain what was causing our recurring plumbing problem instead of just treating the symptoms.",
      rating: 5,
    },
    {
      name: "Tom W.",
      location: "Georgetown, TX",
      date: "December 2025",
      text: "Excellent experience from start to finish. The technician was knowledgeable and completed the repair quickly.",
      rating: 5,
    },
    {
      name: "Nicole A.",
      location: "Austin, TX",
      date: "November 2025",
      text: "We had a leaking bathroom fixture and they took care of it the same day. Friendly service and fair communication throughout.",
      rating: 5,
    },
    {
      name: "Brian F.",
      location: "Round Rock, TX",
      date: "November 2025",
      text: "They inspected our plumbing system and helped us understand what needed attention now and what could wait.",
      rating: 5,
    },
    {
      name: "Ashley D.",
      location: "Cedar Park, TX",
      date: "October 2025",
      text: "Fast response, clean work, and no unnecessary hassle. I would definitely call them again for future plumbing work.",
      rating: 5,
    },
    {
      name: "Kevin J.",
      location: "Pflugerville, TX",
      date: "October 2025",
      text: "Our sewer line was causing repeated backups. They identified the problem and explained the repair clearly before getting started.",
      rating: 5,
    },
    {
      name: "Lauren N.",
      location: "Austin, TX",
      date: "September 2025",
      text: "Very impressed with how professional the entire experience was. The technician answered all of our questions and did a great job.",
      rating: 5,
    },
    {
      name: "Steven R.",
      location: "Leander, TX",
      date: "September 2025",
      text: "They fixed a pipe leak that had started causing water damage. Quick service and everything was left clean afterward.",
      rating: 5,
    },
    {
      name: "Megan T.",
      location: "Round Rock, TX",
      date: "August 2025",
      text: "Easy to schedule, showed up on time, and fixed our plumbing problem without any unnecessary complications.",
      rating: 5,
    },
  ],

  projects: [
    {
      title: "Whole-Home Plumbing Repair",
      location: "Austin",
      service: "Plumbing Repair",
      description:
        "Diagnosed and repaired multiple plumbing issues throughout a residential property, restoring reliable water flow and preventing further leaks.",
      image: wholeHome,
    },
    {
      title: "Emergency Pipe Leak Repair",
      location: "Round Rock",
      service: "Pipe Repair",
      description:
        "Located and repaired a leaking residential water pipe before the issue could cause additional damage to the home.",
      image: emergencyPipe,
    },
    {
      title: "Water Heater Replacement",
      location: "Cedar Park",
      service: "Water Heater Installation",
      description:
        "Replaced an aging water heater with a new residential system designed to provide dependable hot water and improved reliability.",
      image: waterHeaterReplace,
    },
    // {
    //   title: "Main Drain Cleaning",
    //   location: "Georgetown",
    //   service: "Drain Cleaning",
    //   description:
    //     "Cleared a severe main drain blockage and restored proper drainage throughout the home's plumbing system.",
    //   image: leakingRoof,
    // },
    // {
    //   title: "Bathroom Fixture Upgrade",
    //   location: "Pflugerville",
    //   service: "Fixture Installation",
    //   description:
    //     "Removed outdated bathroom fixtures and installed new plumbing fixtures with properly sealed and tested connections.",
    //   image: residentialRoof,
    // },
    // {
    //   title: "Sewer Line Repair",
    //   location: "Leander",
    //   service: "Sewer Line Services",
    //   description:
    //     "Addressed a recurring sewer drainage problem and completed targeted repairs to restore reliable wastewater flow from the property.",
    //   image: gutterReplacement,
    // },
  ],

  whyChooseUs: [
    {
      title: "Fast diagnostics",
      description:
        "Get a clear explanation of the problem before choosing a solution.",
    },
    {
      title: "Respectful technicians",
      description: "Clean, careful service inside your home.",
    },
    {
      title: "Practical options",
      description: "Recommendations based on the property and the problem.",
    },
    {
      title: "Clear communication",
      description:
        "Straightforward updates and honest recommendations throughout the service.",
    },
  ],
  serviceAreas: ["Austin", "Pflugerville", "Round Rock"],
  faqs: [
    {
      question: "Do you provide plumbing inspections?",
      answer:
        "Yes. We inspect residential plumbing systems for leaks, damaged pipes, drainage problems, water pressure issues, and other problems that may need attention.",
    },

    {
      question: "How do I know if my plumbing needs repair or replacement?",
      answer:
        "It depends on the age and condition of the plumbing, the extent of the problem, and whether the issue has happened repeatedly. We can inspect the system and explain whether a repair or replacement makes more sense.",
    },

    {
      question: "Do you handle emergency plumbing problems?",
      answer:
        "Yes. We can help with urgent plumbing problems such as burst pipes, major leaks, clogged drains, overflowing fixtures, and other issues that require immediate attention.",
    },

    {
      question: "How long does a plumbing repair take?",
      answer:
        "The timeline depends on the type and extent of the plumbing problem. After inspecting the issue, we can provide a clearer idea of the work required and the expected completion time.",
    },

    {
      question: "Can I request a plumbing estimate online?",
      answer:
        "Yes. Use the request form to tell us about your property and the plumbing service you need. Our team can follow up with the next steps and scheduling details.",
    },

    {
      question: "What types of plumbing services do you provide?",
      answer:
        "We provide residential plumbing services including leak repair, drain cleaning, pipe repair, fixture installation, water heater service, and general plumbing maintenance.",
    },

    {
      question: "Do you repair leaking pipes and fixtures?",
      answer:
        "Yes. We can diagnose and repair common plumbing leaks involving pipes, faucets, toilets, sinks, and other residential plumbing fixtures.",
    },

    {
      question: "How quickly can someone come out for a plumbing problem?",
      answer:
        "Scheduling depends on current availability and the type of service required. Submit a request with your property details and our team can confirm the next available appointment.",
    },
  ],

  socials: {
    instagram: "https://instagram.com/yourbusiness",
    whatsapp: "https://wa.me/15125550123",
    linkedin: "https://linkedin.com/company/yourbusiness",
  },
};

const businesses = {
  "mikes-hvac": {
  name: "Mike's HVAC",
  slug: "mikes-hvac",
  category: "Plumbing",
  location: "Austin, TX",
  colors: {
    primary: "#17324d",
    primaryDark: "#102438",
    accent: "#d46b2f",
  },
  description:
    "Mike’s HVAC provides residential plumbing services with a focus on dependable repairs, clear communication, and practical solutions for keeping your home’s plumbing running smoothly.",
  cta: {
    primary: "Request Service",
    secondary: "Call Now",
  },
  contact: {
    phone: "(512) 555-0188",
    email: "service@mikes-hvac.example",
    address: "Austin, TX",
  },
},
  "tucker-plumbing": {
    name: "Tucker Plumbing LLC",
    slug: "tucker-plumbing",
    category: "Plumbing",
    location: "Houston, TX",
    colors: { primary: "#173B4D", primaryDark: "#102A37", accent: "#D97732" },
    description:
      "Tucker Plumbing LLC is a family-owned and operated plumbing company serving the greater Houston area for more than 20 years, providing residential, commercial, and institutional plumbing services with certified master plumbers.",
    cta: { primary: "Get a Free Quote", secondary: "Call Now" },
    contact: {
      phone: "(281) 469-5354",
      email: "service@tuckerplumbing.net",
      address: "8219 Coolshire Ln, Houston, TX 77070",
    },
  },
};

export default businesses;
export { commons };
