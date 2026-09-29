import { notFound } from "next/navigation";
import businesses from "@/data/businesses";
import { commons } from "@/data/businesses";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import TrustBar from "@/components/TrustBar/TrustBar";
import QuoteForm from "@/components/QuoteForm/QuoteForm";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import Team from "@/components/Team/Team";
import Reviews from "@/components/Reviews/Reviews";
import Projects from "@/components/Projects/Projects";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import ServiceAreas from "@/components/ServiceAreas/ServiceAreas";
import FAQ from "@/components/FAQ/FAQ";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Footer from "@/components/Footer/Footer";

export function generateStaticParams() {
  return Object.keys(businesses).map((business) => ({ business }));
}

export async function generateMetadata({ params }) {
  const { business: slug } = await params;
  const business = businesses[slug];
  if (!business) return { title: "Business not found" };
  return {
    title: `${business.name} | ${business.category} Services in ${business.location}`,
    description: business.subheadline,
    openGraph: {
      title: business.name,
      description: business.subheadline,
      images: business.heroImage ? [business.heroImage] : [],
    },
  };
}

export default async function BusinessPage({ params }) {
  const { business: slug } = await params;
  const business = businesses[slug];
  if (!business) notFound();

  const theme = {
    "--business-primary": business.colors?.primary || "#17233d",
    "--business-primary-dark":
      business.colors?.primaryDark || business.colors?.primary || "#0d1729",
    "--business-accent": business.colors?.accent || "#c82d35",
  };

  return (
    <div className="site" style={theme}>
      <Navbar business={business} />
      <main>
        <Hero business={business} commons={commons}/>
        <Reviews business={business} commons={commons}/>
        <Team commons={commons}/>
        <Services commons={commons}/>
        <Projects commons={commons}/>
        <WhyChooseUs commons={commons}/>
        <FAQ commons={commons}/>
        <FinalCTA business={business}/>
      </main>
      <Footer business={business} commons={commons}/>
    </div>
  );
}
