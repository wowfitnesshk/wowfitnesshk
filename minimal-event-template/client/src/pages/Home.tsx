import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SponsoredBy from "@/components/SponsoredBy";
import AboutEvent from "@/components/AboutEvent";
import OurStats from "@/components/OurStats";
import EventContent from "@/components/EventContent";
import Reviews from "@/components/Reviews";
import SocialFeed from "@/components/SocialFeed";
import BookingForm from "@/components/BookingForm";
import Locations from "@/components/Locations";
import Faq from "@/components/Faq";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SponsoredBy />
      <AboutEvent />
      <OurStats />
      <EventContent />
      <Reviews />
      <SocialFeed />
      <BookingForm />
      <Locations />
      <Faq />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

