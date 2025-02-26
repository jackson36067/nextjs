import FeatureSection from "@/components/about/feature-section";
import Testimonial from "@/components/about/testimonial";

export default function About() {
  return (
    <div className="flex flex-col flex-1 p-4 pt-0">
      <FeatureSection />
      <Testimonial />
    </div>
  );
}
