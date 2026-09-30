const founderImage = "/founder.png";
const heroImage = "/hero.png";
const roofIntallation = "/roof-intallation.png";
const roofReplacement = "/roofReplacement.png";
const roofRepair = "/roofRepair.png";
const completeRoofReplacement = "/completeRoofReplacement.png";
const newResident = "/newResident.png";
const stromDamage = "/stromDamage.png";
const leakingRoof = "/leakingRoof.png";
const residentialRoof = "/residentialRoof.png";
const gutterReplacement = "/gutterReplacement.png";

const commons = {
  heroImage: heroImage,
  rating: 4.8,
  reviewCount: 96,
  yearsInBusiness: 11,
  trustBadges: ["Licensed technicians", "Locally owned"],
  eyebrow: "Comfort service for Austin homes",
  headline: "Reliable heating and cooling, without the guesswork.",
  subheadline:
    "Fast diagnostics, practical options, and experienced technicians who respect your home.",
  hours: ["Mon–Fri: 7:00 AM–7:00 PM", "Sat: 8:00 AM–3:00 PM"],
  services: [
    {
      name: "Roof Installation",
      description:
        "Complete residential roof installation with quality materials, proper ventilation, and careful attention to every detail from start to finish.",
      icon: "installation",
      image: roofIntallation,
    },

    {
      name: "Roof Replacement",
      description:
        "Full replacement for aging or damaged roofs, with practical material options and a properly installed system built for long-term protection.",
      icon: "replacement",
      image: roofReplacement,
    },

    {
      name: "Roof Repair",
      description:
        "Reliable repairs for leaks, damaged shingles, flashing issues, and other roofing problems before they lead to more expensive property damage.",
      icon: "repair",
      image: roofRepair,
    },
  ],
  about: {
    title: "Comfort service built around clear communication.",
    body: "Our technicians explain what they find, what can be done, and what each option means for your home. The goal is simple: solve the problem and leave you confident in the decision.",
  },
  team: [
    {
      name: "Mike Carter",
      role: "Owner & Lead Technician",
      bio: "Our company comes with a repair-first, no-pressure approach. Understand what your roof needs, explore your options, and make the next decision with confidence.",
      image: founderImage,
    },
  ],
  reviews: [
    {
      name: "Daniel K.",
      location: "Austin, TX",
      date: "June 2026",
      text: "They arrived on time, found the issue quickly, and explained the repair before doing anything.",
      rating: 5,
    },
    {
      name: "Laura P.",
      location: "Pflugerville, TX",
      date: "May 2026",
      text: "Professional from scheduling to cleanup. Our AC was back to normal quickly.",
      rating: 5,
    },
    {
      name: "Daniel K.",
      location: "Austin, TX",
      date: "June 2026",
      text: "They arrived on time, found the issue quickly, and explained the repair before doing anything.",
      rating: 5,
    },
    {
      name: "Laura P.",
      location: "Pflugerville, TX",
      date: "May 2026",
      text: "Professional from scheduling to cleanup. Our AC was back to normal quickly.",
      rating: 5,
    },
    {
      name: "Daniel K.",
      location: "Austin, TX",
      date: "June 2026",
      text: "They arrived on time, found the issue quickly, and explained the repair before doing anything.",
      rating: 5,
    },
    {
      name: "Laura P.",
      location: "Pflugerville, TX",
      date: "May 2026",
      text: "Professional from scheduling to cleanup. Our AC was back to normal quickly.",
      rating: 5,
    },
    {
      name: "Daniel K.",
      location: "Austin, TX",
      date: "June 2026",
      text: "They arrived on time, found the issue quickly, and explained the repair before doing anything.",
      rating: 5,
    },
    {
      name: "Laura P.",
      location: "Pflugerville, TX",
      date: "May 2026",
      text: "Professional from scheduling to cleanup. Our AC was back to normal quickly.",
      rating: 5,
    },
    {
      name: "Daniel K.",
      location: "Austin, TX",
      date: "June 2026",
      text: "They arrived on time, found the issue quickly, and explained the repair before doing anything.",
      rating: 5,
    },
    {
      name: "Laura P.",
      location: "Pflugerville, TX",
      date: "May 2026",
      text: "Professional from scheduling to cleanup. Our AC was back to normal quickly.",
      rating: 5,
    },
    {
      name: "Daniel K.",
      location: "Austin, TX",
      date: "June 2026",
      text: "They arrived on time, found the issue quickly, and explained the repair before doing anything.",
      rating: 5,
    },
    {
      name: "Laura P.",
      location: "Pflugerville, TX",
      date: "May 2026",
      text: "Professional from scheduling to cleanup. Our AC was back to normal quickly.",
      rating: 5,
    },
    {
      name: "Daniel K.",
      location: "Austin, TX",
      date: "June 2026",
      text: "They arrived on time, found the issue quickly, and explained the repair before doing anything.",
      rating: 5,
    },
    {
      name: "Laura P.",
      location: "Pflugerville, TX",
      date: "May 2026",
      text: "Professional from scheduling to cleanup. Our AC was back to normal quickly.",
      rating: 5,
    },
    {
      name: "Daniel K.",
      location: "Austin, TX",
      date: "June 2026",
      text: "They arrived on time, found the issue quickly, and explained the repair before doing anything.",
      rating: 5,
    },
    {
      name: "Laura P.",
      location: "Pflugerville, TX",
      date: "May 2026",
      text: "Professional from scheduling to cleanup. Our AC was back to normal quickly.",
      rating: 5,
    },
    {
      name: "Daniel K.",
      location: "Austin, TX",
      date: "June 2026",
      text: "They arrived on time, found the issue quickly, and explained the repair before doing anything.",
      rating: 5,
    },
    {
      name: "Laura P.",
      location: "Pflugerville, TX",
      date: "May 2026",
      text: "Professional from scheduling to cleanup. Our AC was back to normal quickly.",
      rating: 5,
    },
    {
      name: "Daniel K.",
      location: "Austin, TX",
      date: "June 2026",
      text: "They arrived on time, found the issue quickly, and explained the repair before doing anything.",
      rating: 5,
    },
    {
      name: "Laura P.",
      location: "Pflugerville, TX",
      date: "May 2026",
      text: "Professional from scheduling to cleanup. Our AC was back to normal quickly.",
      rating: 5,
    },
  ],
  projects: [
    {
      title: "Complete Roof Replacement",
      location: "Austin",
      service: "Roof Replacement",
      description:
        "Removed an aging roof and installed a new residential roofing system with durable materials and careful attention to flashing and ventilation.",
      image: completeRoofReplacement,
    },

    {
      title: "New Residential Roof Installation",
      location: "Round Rock",
      service: "Roof Installation",
      description:
        "Installed a new roofing system on a residential property, focusing on proper shingle placement, flashing, ventilation, and clean finishing.",
      image: newResident,
    },

    {
      title: "Storm Damage Roof Repair",
      location: "Cedar Park",
      service: "Storm Damage Repair",
      description:
        "Repaired roof damage caused by severe weather, replacing affected shingles and restoring areas that were exposed to leaks and further damage.",
      image: stromDamage,
    },

    {
      title: "Leaking Roof Repair",
      location: "Georgetown",
      service: "Roof Repair",
      description:
        "Located the source of a persistent roof leak and completed targeted repairs to help prevent further water intrusion and interior damage.",
      image: leakingRoof,
    },

    {
      title: "Residential Roof Inspection",
      location: "Pflugerville",
      service: "Roof Inspection",
      description:
        "Completed a detailed roof inspection to identify worn materials, damaged areas, and potential maintenance concerns before they became larger problems.",
      image: residentialRoof,
    },

    {
      title: "Gutter Replacement Project",
      location: "Leander",
      service: "Gutter Installation",
      description:
        "Replaced outdated gutters with a new drainage system designed to move rainwater away from the roof, siding, and foundation more effectively.",
      image: gutterReplacement,
    },
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
      question: "Do you provide roof inspections?",
      answer:
        "Yes. We inspect residential roofs for damaged shingles, leaks, worn materials, flashing problems, and other issues that may need attention.",
    },

    {
      question: "How do I know if my roof needs repair or replacement?",
      answer:
        "It depends on the roof's age, overall condition, extent of the damage, and repair history. We can inspect the roof and explain whether a repair or replacement makes more sense.",
    },

    {
      question: "Do you repair storm and hail damage?",
      answer:
        "Yes. We can inspect roofs after wind, hail, and severe weather and identify damaged areas that may need repair or replacement.",
    },

    {
      question: "How long does a roof replacement take?",
      answer:
        "The timeline depends on the size and condition of the roof, the materials selected, and weather conditions. After an inspection, we can provide a clearer estimate for your project.",
    },

    {
      question: "Can I request a roofing estimate online?",
      answer:
        "Yes. Use the request form to tell us about your property and the roofing service you need. Our team can follow up with the next steps and scheduling details.",
    },

    {
      question: "What types of roofing services do you provide?",
      answer:
        "We provide residential roof installation, roof replacement, roof repair, storm damage repair, roof inspections, and gutter installation.",
    },

    {
      question: "Do you replace damaged gutters?",
      answer:
        "Yes. We provide gutter installation and replacement to help direct rainwater away from your roof, siding, and foundation.",
    },

    {
      question: "How quickly can someone inspect my roof?",
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
    category: "Roofing",
    location: "Austin, TX",
    colors: { primary: "#17324d", primaryDark: "#102438", accent: "#d46b2f" },
    description:
      "Mike’s HVAC provides residential heating and cooling service with a focus on dependable repairs, clear explanations, and long-term comfort.",
    cta: { primary: "Request Service", secondary: "Call Now" },
    contact: {
      phone: "(512) 555-0188",
      email: "service@mikes-hvac.example",
      address: "Austin, TX",
    },
  },
  "4-roofs": {
    name: "4 Roofs",
    slug: "4-roofs",
    category: "Roofing",
    location: "Austin, TX",
    colors: { primary: "#183B56", primaryDark: "#102A3C", accent: "#D97732" },
    description:
      "4 Roofs provides residential and commercial roofing services across Central Texas and the Houston region, with more than 40 years of combined experience and solutions including shingle, metal, tile, flat roofing, and gutter services.",
    cta: { primary: "Get a Free Quote", secondary: "Call Now" },
    contact: {
      phone: "(512) 520-5884",
      email: "contact@4roofstx.com",
      address: "8002 Research Blvd, Suite B, Austin, TX 78758",
    },
  },
  "reliance-roofing": {
    name: "Reliance Roofing",
    slug: "reliance-roofing",
    category: "Roofing",
    location: "Austin, TX",

    colors: {
      primary: "#1F3A4A",
      primaryDark: "#132832",
      accent: "#D97732",
    },

    description:
      "Reliance Roofing is a family-owned roofing and restoration company serving Central Texas with residential and commercial roofing, storm restoration, repairs, and complete re-roofing solutions.",

    cta: {
      primary: "Get a Free Inspection",
      secondary: "Call Now",
    },

    contact: {
      phone: "(512) 709-0676",
      email: "Ben@RelianceTx.com",
      address: "701 Tillery St. Suite 12, Austin, TX 78702",
    },
  },
  "texas-tough-roofing": {
    name: "Texas Tough Roofing",
    slug: "texas-tough-roofing",
    category: "Roofing",
    location: "Houston, TX",
    colors: { primary: "#183B56", primaryDark: "#102A3C", accent: "#D97732" },
    description:
      "Texas Tough Roofing provides roofing, guttering, and exterior painting services for homeowners in the Houston area, with roof installation, repair, and replacement for metal, shingle, and asphalt roofing.",
    cta: { primary: "Get a Free Quote", secondary: "Call Now" },
    contact: {
      phone: "(832) 890-3564",
      email: "texastoughroofing@gmail.com",
      address: "Houston, TX",
    },
  },
  "whitmans-contracting-roofing": {
    name: "Whitmans Contracting & Roofing",
    slug: "whitmans-contracting-roofing",
    category: "Roofing",
    location: "Houston, TX",
    colors: { primary: "#183B56", primaryDark: "#102A3C", accent: "#D97732" },
    description:
      "Whitmans Contracting & Roofing is a family-owned and operated company providing residential and commercial roofing, contracting, and restoration services throughout Texas, with more than 45 years of industry experience.",
    cta: { primary: "Get a Free Estimate", secondary: "Call Now" },
    contact: {
      phone: "713-300-9295",
      email: "info@wcr-texas.com",
      address: "2429 Bissonnet St., Suite 568, Houston, TX 77005",
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
  "hg-roof-repair": {
    name: "HG Roof Repair",
    slug: "hg-roof-repair",
    category: "Roofing",
    location: "San Antonio, TX",
    colors: {
      primary: "#173B4D",
      primaryDark: "#102A37",
      accent: "#D97732",
    },
    description:
      "HG Roof Repair is a locally owned San Antonio roofing company specializing in roof repairs, leak repair, missing shingles, storm damage, and roof inspections throughout San Antonio and Bexar County.",
    cta: {
      primary: "Get a Free Estimate",
      secondary: "Call Now",
    },
    contact: {
      phone: "(210) 396-0922",
      email: "hugoroofer8888@gmail.com",
      address: "345 N San Gabriel Ave, San Antonio, TX 78237",
    },
  },
  "albright-roofing": {
    name: "Albright Roofing",
    slug: "albright-roofing",
    category: "Roofing",
    location: "Flint, TX",
    colors: {
      primary: "#173B4D",
      primaryDark: "#102A37",
      accent: "#D97732",
    },
    description:
      "Albright Roofing is an East Texas roofing company with 16 years in business, providing residential roofing services with a focus on quality work, customer experience, financing, and dependable project completion.",
    cta: {
      primary: "Get a Free Inspection",
      secondary: "Call Now",
    },
    contact: {
      phone: "903-752-1444",
      email: "info@roofingetx.com",
      address:
        "17968 Old Jacksonville Hwy, Bldg 10, #50, P.O. Box 242, Flint, TX 75762",
    },
  },
};

export default businesses;
export { commons };
