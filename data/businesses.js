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
    colors: {
      primary: "#0F4C5C",
      primaryDark: "#083642",
      accent: "#16A6A0",
    },
    description:
      "Tucker Plumbing LLC is a family-owned and operated plumbing company serving the greater Houston area for more than 20 years, providing residential, commercial, and institutional plumbing services with certified master plumbers.",
    cta: { primary: "Get a Free Quote", secondary: "Call Now" },
    contact: {
      phone: "(281) 469-5354",
      email: "service@tuckerplumbing.net",
      address: "8219 Coolshire Ln, Houston, TX 77070",
    },
  },
  "24-hour-plumbing": {
    name: "24-Hour Plumbing",
    slug: "24-hour-plumbing",
    category: "Plumbing",
    location: "Dallas, TX",
    colors: {
      primary: "#0F4C5C",
      primaryDark: "#083642",
      accent: "#16A6A0",
    },
    description:
      "24-Hour Plumbing is a family-owned and operated plumbing company serving Dallas and the surrounding DFW area since 1999, providing reliable residential plumbing services from everyday repairs to complex installations and emergency plumbing needs.",
    cta: {
      primary: "Get a Free Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "972-900-5514",
      email: "",
      address: "2227 Park Springs Ct, Arlington, TX 76013",
    },
  },
  "the-plumbing-service": {
    name: "The Plumbing Service",
    slug: "the-plumbing-service",
    category: "Plumbing",
    location: "Arlington, TX",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "The Plumbing Service provides commercial and residential plumbing throughout the Dallas-Fort Worth area, offering repairs, remodels, gas and water line services, sewer work, water heater service, drain cleaning, leak locating, and other plumbing solutions.",
    cta: {
      primary: "Get a Free Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "817-225-2153",
      email: "brent@theplumbingservice.com",
      address: "PO BOX 150971, Arlington, TX 76015",
    },
  },
  "mosqueda-plumbing": {
    name: "Mosqueda Plumbing Co",
    slug: "mosqueda-plumbing",
    category: "Plumbing",
    location: "Arlington, TX",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Mosqueda Plumbing Co is a family-owned and operated plumbing company serving Arlington and the DFW Metroplex, providing residential, commercial, remodeling, drain cleaning, water heater, new construction, and plumbing services.",
    cta: {
      primary: "Request a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(682) 427-4043",
      email: "Info@MosquedaPlumbing.com",
      address: "Arlington, TX",
    },
  },
  "ping-plumbing": {
    name: "Ping Plumbing LLC",
    slug: "ping-plumbing",
    category: "Plumbing",
    location: "Arlington, TX",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Ping Plumbing LLC is a local DFW plumbing company serving residential and commercial customers with service plumbing, cast-iron sewer replacement, drain and sewer services, water heater installation and repair, and remodel plumbing.",
    cta: {
      primary: "Call Ping Plumbing",
      secondary: "Get a Quote",
    },
    contact: {
      phone: "(817) 204-4784",
      email: "pingplumbingtexas@gmail.com",
      address: "Arlington, TX",
    },
  },
  "smith-plumbing-dfw": {
    name: "Smith Plumbing Company",
    slug: "smith-plumbing-dfw",
    category: "Plumbing",
    location: "Grand Prairie, TX",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Smith Plumbing Company has served the DFW area since 1954, providing plumbing repair, water heater services, slab leak repair, repiping, leak detection, and other residential plumbing services.",
    cta: {
      primary: "Get a Free Estimate",
      secondary: "Call Now",
    },
    contact: {
      phone: "(972) 264-9430",
      email: "",
      address: "Grand Prairie, TX",
    },
  },
  "ingram-plumbing-service": {
    name: "Ingram Plumbing Service",
    slug: "ingram-plumbing-service",
    category: "Plumbing",
    location: "Fairview, TX",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Ingram Plumbing Service provides residential and commercial plumbing services, from faucet installation and repairs to sewer line replacement, with a focus on reliable service, quality parts, and individualized plumbing solutions.",
    cta: {
      primary: "Get a Free Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "469-671-1664",
      email: "ingramplumbingservice@gmail.com",
      address: "681 Forest Oaks Drive, Fairview, TX 75069",
    },
  },
  "texas-slab-leak-repair": {
    name: "Texas Slab Leak Repair",
    slug: "texas-slab-leak-repair",
    category: "Plumbing",
    location: "Dallas, TX",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Texas Slab Leak Repair specializes in slab leak detection and repair throughout the Dallas-Fort Worth area, providing sewer, gas, water leak, general plumbing, and slab repair services since 1998.",
    cta: {
      primary: "Get a Price Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(972) 900-5514",
      email: "",
      address: "12484 Abrams Rd, Dallas, TX 75243",
    },
  },
  "plumbgreat-plumbing": {
    name: "Plumbgreat Plumbing",
    slug: "plumbgreat-plumbing",
    category: "Plumbing",
    location: "Tampa, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Plumbgreat Plumbing is an owner-operated licensed plumbing company serving Tampa, providing drain cleaning, faucet repair and installation, water heater services, garbage disposal repair, toilet services, and water treatment solutions.",
    cta: {
      primary: "Get a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "813-595-3563",
      email: "cthompson@plumbgreat.com",
      address: "Tampa, FL",
    },
  },
  "sample-plumbing": {
    name: "Sample Plumbing Inc.",
    slug: "sample-plumbing",
    category: "Plumbing",
    location: "Tampa, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Sample Plumbing Inc. is a family-owned and operated plumbing service and contracting company serving Tampa Bay and Central Florida, providing residential and commercial plumbing, repairs, installations, water heaters, re-piping, trenchless sewer repair, and new construction services.",
    cta: {
      primary: "Get a Free Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(813) 251-0280",
      email: "kpsample@outlook.com",
      address: "Tampa, FL",
    },
  },
  "docks-decks-marine": {
    name: "Docks & Decks Marine",
    slug: "docks-decks-marine",
    category: "Marine",
    location: "Florida",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Docks & Decks Marine provides marine construction and waterfront services including dock and deck work for residential and commercial properties.",
    cta: {
      primary: "Request a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(727) 275-8937",
      email: "",
      address: "Florida",
    },
  },
  "mclain-plumbing-mechanical": {
    name: "McLain Plumbing & Mechanical",
    slug: "mclain-plumbing-mechanical",
    category: "Plumbing",
    location: "Tampa, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "McLain Plumbing & Mechanical is a family-owned plumbing and HVAC company serving Tampa, providing plumbing repairs, remodeling, residential and commercial new construction, and commercial property service and repair.",
    cta: {
      primary: "Request a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(813) 876-9046",
      email: "sandramclain01@yahoo.com",
      address: "2403 E 4th Ave, Tampa, FL 33605",
    },
  },
  "henry-gonzalez-plumbing": {
    name: "Henry Gonzalez Plumbing Co.",
    slug: "henry-gonzalez-plumbing",
    category: "Plumbing",
    location: "Tampa, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Henry Gonzalez Plumbing Co. is a family-owned and operated full-service plumbing company serving Tampa, providing residential and commercial plumbing, emergency service, new construction, remodeling, backflow testing and repair, and warranty repair work.",
    cta: {
      primary: "Get a Free Estimate",
      secondary: "Call Now",
    },
    contact: {
      phone: "(813) 251-1980",
      email: "main@henrygonzalezplumbing.com",
      address: "2107 W. Kathleen Street, Tampa, FL 33607",
    },
  },
  "orlando-pipe-doctor": {
    name: "Pipe Doctor Home Services",
    slug: "orlando-pipe-doctor",
    category: "Plumbing",
    location: "Orlando, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Pipe Doctor Home Services provides plumbing, water heating, and cooling services for homeowners in the Orlando area.",
    cta: {
      primary: "Request Service",
      secondary: "Call Now",
    },
    contact: {
      phone: "(813) 251-1980",
      email: "",
      address: "Orlando, FL",
    },
  },
  "asap-service-plumbing": {
    name: "ASAP Service Plumbing",
    slug: "asap-service-plumbing",
    category: "Plumbing",
    location: "Orlando, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "ASAP Service Plumbing provides residential and commercial plumbing services throughout the Orlando and Kissimmee area, including drain repair, sewer services, water heaters, repiping, slab leak repair, hydro jetting, and trenchless pipe lining.",
    cta: {
      primary: "Book a Service",
      secondary: "Call Now",
    },
    contact: {
      phone: "(407) 565-8808",
      email: "service@asapserviceplumbing.com",
      address: "1101 Miranda Ln, Kissimmee, FL 34741",
    },
  },
  "plumb-perfect-florida": {
    name: "Plumb Perfect Florida",
    slug: "plumb-perfect-florida",
    category: "Plumbing",
    location: "Orlando, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Plumb Perfect Florida was established in 2021 by Hunter Vann and provides professional plumbing services for customers in the Orlando area.",
    cta: {
      primary: "Get a Free Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "407-712-4963",
      email: "",
      address: "6441 S Chickasaw Trail, Suite #159, Orlando, FL 32829",
    },
  },
  "highlights-plumbing": {
    name: "Highlights Plumbing Services",
    slug: "highlights-plumbing",
    category: "Plumbing",
    location: "Kissimmee, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Highlights Plumbing Services is a small plumbing business operated by Maxene St. Gerard, providing residential, commercial, emergency, drain cleaning, pipe repair, water heater, sewer, gas plumbing, and inspection services across Central Florida.",
    cta: {
      primary: "Get a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(954) 513-7653",
      email: "highlightsplumbingservices@gmail.com",
      address: "1923 Magical Lane, Kissimmee, FL 34744",
    },
  },
  "orlando-city-plumbing": {
    name: "Orlando City Plumbing",
    slug: "orlando-city-plumbing",
    category: "Plumbing",
    location: "Orlando, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Orlando City Plumbing provides residential and commercial plumbing services including repairs, repiping, drain cleaning, water heater installation, fixture installation, inspections, and major plumbing projects throughout Orlando and surrounding areas.",
    cta: {
      primary: "Get a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(407) 790-6795",
      email: "office@orlandocityplumbing.com",
      address: "Orlando, FL",
    },
  },
  "jaffe-plumbing": {
    name: "Jaffe Plumbing",
    slug: "jaffe-plumbing",
    category: "Plumbing",
    location: "Orlando, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Jaffe Plumbing is an Orlando plumbing company providing residential and commercial plumbing services, including plumbing repairs, installations, gas services, and water heater services.",
    cta: {
      primary: "Request Service",
      secondary: "Call Now",
    },
    contact: {
      phone: "407-879-7997",
      email: "",
      address: "1012 Malaga St, Orlando, FL 32822",
    },
  },
  "larson-plumbing": {
    name: "Larson Plumbing",
    slug: "larson-plumbing",
    category: "Plumbing",
    location: "Tampa, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Larson Plumbing is a family-owned and operated Tampa plumbing company providing residential and commercial plumbing repairs and installations, drain cleaning, water heater services, remodeling, fixtures, and 24-hour emergency plumbing.",
    cta: {
      primary: "Get a Free Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(813) 242-0911",
      email: "info@larsonplumbing.net",
      address: "3205 E 8th Ave, Tampa, FL 33605",
    },
  },
  "aqua-mechanical-group": {
    name: "Aqua Mechanical Group",
    slug: "aqua-mechanical-group",
    category: "Plumbing",
    location: "Florida",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Aqua Mechanical Group provides mechanical and plumbing services for customers in Florida.",
    cta: {
      primary: "Request a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(813) 251-1980",
      email: "",
      address: "Florida",
    },
  },
  "associated-plumbing": {
    name: "Associated Plumbing Inc.",
    slug: "associated-plumbing",
    category: "Plumbing",
    location: "Tampa, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Associated Plumbing Inc. provides residential and commercial plumbing services in the Tampa area, including drain cleaning, water jetting, water heater services, garbage disposals, sewer camera inspections, sinks, faucets, and related plumbing work.",
    cta: {
      primary: "Get a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(813) 991-7960",
      email: "",
      address: "7402 N 56th St, Suite 525, Tampa, FL 33617",
    },
  },

  /// batch 2 ---
  "michael-adams-plumbing": {
    name: "Michael Adams Plumbing LLC",
    slug: "michael-adams-plumbing",
    category: "Plumbing",
    location: "Jacksonville, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Michael Adams Plumbing LLC provides residential plumbing services in Jacksonville, including plumbing repairs, clogged drain services, leaky faucet repairs, water heater installation and replacement, water softener installation, and general plumbing maintenance.",
    cta: {
      primary: "Get a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(904) 639-5300",
      email: "michael.adams@michaeladamsplumbing.com",
      address: "410 Blanding Blvd, Ste 10 #308, Jacksonville, FL",
    },
  },
  "everybodys-plumbing-company": {
    name: "Everybody's Plumbing Company, Inc.",
    slug: "everybodys-plumbing-company",
    category: "Plumbing",
    location: "Jacksonville, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Everybody's Plumbing Company, Inc. provides residential and commercial plumbing services in Jacksonville, including plumbing repairs, drain cleaning, water heater services, sewer services, and general plumbing maintenance.",
    cta: {
      primary: "Get a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(305) 439-9023",
      email: "",
      address: "7014 Macbeth Rd, Jacksonville, FL 32244",
    },
  },
  "affordable-plumbing": {
    name: "Affordable Plumbing Company",
    slug: "affordable-plumbing",
    category: "Plumbing",
    location: "Jacksonville, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Affordable Plumbing Company provides residential and commercial plumbing services in Jacksonville, including plumbing repairs, drain and sewer line cleaning, 24/7 emergency plumbing, re-piping, leak detection, water heater services, and bathroom and kitchen remodels.",
    cta: {
      primary: "Get a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(904) 288-9003",
      email: "dispatch@affordableplumbingjacksonville.com",
      address: "4565 St. Augustine Road, Jacksonville, FL 32207",
    },
  },
  "betros-plumbing": {
    name: "Betros Plumbing",
    slug: "betros-plumbing",
    category: "Plumbing",
    location: "Jacksonville, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Betros Plumbing provides residential and commercial plumbing services in Jacksonville and Northeast Florida, including plumbing repairs, emergency plumbing, sewer and drain services, water plumbing, gas lines, plumbing fixtures, and commercial plumbing projects.",
    cta: {
      primary: "Get a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(904) 683-1968",
      email: "info@betrosplumbing.com",
      address: "2600 West Beaver Street, Jacksonville, FL 32254",
    },
  },
  "peyton-plumbing": {
    name: "Peyton Plumbing",
    slug: "peyton-plumbing",
    category: "Plumbing",
    location: "Jacksonville, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Peyton Plumbing provides residential and commercial plumbing services in Jacksonville, including plumbing repairs, water heater installation and replacement, drain cleaning, sewer repairs, whole-home repiping, water softener installation, and commercial plumbing services.",
    cta: {
      primary: "Get a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(904) 678-1754",
      email: "service@peytonplumbing.com",
      address: "3780 Kori Rd, Suite 3, Jacksonville, FL 32257",
    },
  },
  "1-tom-plumber": {
    name: "1-Tom-Plumber Jacksonville",
    slug: "1-tom-plumber",
    category: "Plumbing",
    location: "Jacksonville, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "1-Tom-Plumber Jacksonville provides residential and commercial plumbing services, drain cleaning, water damage restoration, and excavation, with 24/7 emergency plumbing service throughout Jacksonville and surrounding communities.",
    cta: {
      primary: "Schedule Appointment",
      secondary: "Call Now",
    },
    contact: {
      phone: "(904) 325-7175",
      email: "jacksonville@1tomplumber.com",
      address: "14476 Duval Pl W, Suite 701, Jacksonville, FL 32218",
    },
  },
  "oconnors-plumbing": {
    name: "O'Connor's Plumbing Company",
    slug: "oconnors-plumbing",
    category: "Plumbing & Septic",
    location: "Jacksonville, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "O'Connor's Plumbing Company provides residential and commercial plumbing and septic services in Jacksonville and Northeast Florida, including drain cleaning, water heater services, sewer repairs, repiping, septic tank pumping, drain field installation, and emergency plumbing.",
    cta: {
      primary: "Get a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(904) 767-4059",
      email: "oconnorsplumbingfl@gmail.com",
      address: "530 Ellis Rd S #202, Jacksonville, FL 32254",
    },
  },
  "billy-and-sons-plumbing": {
    name: "Billy & Sons Plumbing",
    slug: "billy-and-sons-plumbing",
    category: "Plumbing",
    location: "Jacksonville Beach, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Billy & Sons Plumbing provides residential and commercial plumbing services in Jacksonville Beach, including drain cleaning, clogged toilet repair, sewer line maintenance, leak detection, water heater services, water line repair, water main replacement, and pipe thawing.",
    cta: {
      primary: "Get a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(904) 590-8100",
      email: "",
      address: "204 2nd Ave S, Jacksonville Beach, FL 32250",
    },
  },
  "tactical-plumbing": {
    name: "Tactical Plumbing, Inc.",
    slug: "tactical-plumbing",
    category: "Plumbing",
    location: "Jacksonville, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Tactical Plumbing, Inc. provides professional plumbing services in the Jacksonville area, serving residential and commercial customers.",
    cta: {
      primary: "Get a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(904) 962-4779",
      email: "",
      address: "",
    },
  },
  "superior-plumbing": {
    name: "Superior Plumbing and Pipe Lining",
    slug: "superior-plumbing",
    category: "Plumbing",
    location: "Jacksonville, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Superior Plumbing and Pipe Lining provides residential and commercial plumbing services in Jacksonville, including trenchless pipe lining, water heater installation and repair, pipe cleaning and jetting, re-piping, plumbing fixture repair and replacement, pipe descaling, and cast iron pipe relining.",
    cta: {
      primary: "Get a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(904) 238-8001",
      email: "office@superiorplumbingjax.com",
      address: "8350 Arlington Expressway, Jacksonville, FL 32211",
    },
  },
  "don-harris-plumbing": {
    name: "Don Harris Plumbing Co",
    slug: "don-harris-plumbing",
    category: "Plumbing",
    location: "Jacksonville, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Don Harris Plumbing Co provides professional plumbing services in Jacksonville, Florida.",
    cta: {
      primary: "Get a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(904) 772-0900",
      email: "",
      address: "4029 Blanding Blvd, Jacksonville, FL 32210",
    },
  },
  "beckwith-plumbing": {
    name: "Beckwith Plumbing Inc.",
    slug: "beckwith-plumbing",
    category: "Plumbing",
    location: "Jacksonville, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Beckwith Plumbing Inc. provides residential and commercial plumbing services in Jacksonville, including water heater repair and installation, bathroom and kitchen renovations, repiping, leak and clog troubleshooting, sewer repairs, plumbing fixture installation, water meters, and new construction plumbing.",
    cta: {
      primary: "Get a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(904) 693-0250",
      email: "beckwithplumbing@gmail.com",
      address: "1949 Jersey St, Jacksonville, FL 32210",
    },
  },
  "nolan-plumbing": {
    name: "Nolan Plumbing & Irrigation",
    slug: "nolan-plumbing",
    category: "Plumbing & Irrigation",
    location: "Jacksonville, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Nolan Plumbing & Irrigation provides residential and commercial plumbing, irrigation, septic, drainage, pump and well, backflow protection, and water filtration services in Jacksonville.",
    cta: {
      primary: "Get a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(904) 783-4321",
      email: "info@nolanplumbingandirrigation.com",
      address: "9020 Beach Blvd, Jacksonville, FL 32216",
    },
  },
  "peoples-plumbing": {
    name: "People's Plumbing",
    slug: "peoples-plumbing",
    category: "Plumbing",
    location: "Jacksonville, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "People's Plumbing provides professional residential and commercial plumbing services in the Jacksonville area.",
    cta: {
      primary: "Get a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(305) 439-9023",
      email: "",
      address: "",
    },
  },
  "titan-plumbing-repair": {
    name: "Titan Plumbing Repair",
    slug: "titan-plumbing-repair",
    category: "Plumbing",
    location: "Miami, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Titan Plumbing Repair provides residential and commercial plumbing repair services throughout Miami-Dade and surrounding areas, including water heater repair and urgent plumbing services.",
    cta: {
      primary: "Request Service",
      secondary: "Call Now",
    },
    contact: {
      phone: "786-487-9288",
      email: "office@titanplumbingrepair.com",
      address: "",
    },
  },
  "miami-shores-plumbing": {
    name: "Miami Shores Plumbing",
    slug: "miami-shores-plumbing",
    category: "Plumbing",
    location: "Miami Shores, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Miami Shores Plumbing provides residential and commercial plumbing services throughout Miami-Dade and Broward counties, including drain cleaning, fixture installation, water heater services, sewer and septic services, and emergency plumbing.",
    cta: {
      primary: "Get a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(305) 751-2446",
      email: "",
      address: "900 NW 144th Street, Miami, FL 33168",
    },
  },
  "decorators-plumbing": {
    name: "Decorator's Plumbing",
    slug: "decorators-plumbing",
    category: "Plumbing Fixtures & Design",
    location: "Miami, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Decorator's Plumbing is a family-owned Miami Design District interior atelier and plumbing showroom offering luxury plumbing fixtures, finishes, and design products for homeowners, designers, and trade professionals.",
    cta: {
      primary: "Explore Brands",
      secondary: "Contact Us",
    },
    contact: {
      phone: "305-576-0022",
      email: "info@decoratorsplumbing.com",
      address: "3612 NE 2nd Avenue, Miami, FL 33137",
    },
  },

  "liriano-plumbing": {
    name: "Liriano Plumbing Inc.",
    slug: "liriano-plumbing",
    category: "Plumbing",
    location: "Miami, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "Liriano Plumbing Inc. provides residential plumbing services throughout South Florida, including emergency plumbing, faucet and fixture repair, drain and sewer services, water heater services, and general plumbing repairs.",
    cta: {
      primary: "Schedule Service",
      secondary: "Call Now",
    },
    contact: {
      phone: "(305) 439-9023",
      email: "",
      address: "14325 SW 52nd St, Miami, FL 33175",
    },
  },

  "ihm-plumbing-services": {
    name: "IHM Plumbing Services",
    slug: "ihm-plumbing-services",
    category: "Plumbing",
    location: "Miami, FL",
    colors: {
      primary: "#164E63",
      primaryDark: "#0B3444",
      accent: "#0EA5A4",
    },
    description:
      "IHM Plumbing Services provides licensed and insured plumbing services throughout Miami-Dade, Broward, and West Palm Beach.",
    cta: {
      primary: "Get a Quote",
      secondary: "Call Now",
    },
    contact: {
      phone: "(786) 701-2236",
      email: "info@ihmplumbingservices.com",
      address: "",
    },
  },
};

export default businesses;
export { commons };
