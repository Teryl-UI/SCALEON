import { CampaignProvider } from "@/components/site/campaign";
import { Hero } from "@/components/site/hero";
import {
  GrowthSection,
  OperatingSection,
  PipelineSection,
  ReviewsSection,
  SignalSection,
  SignupSection,
} from "@/components/site/sections";

export default function HomePage() {
  return (
    <CampaignProvider>
      <main>
        <Hero />
        <SignalSection />
        <OperatingSection />
        <PipelineSection />
        <GrowthSection />
        <ReviewsSection />
        <SignupSection />
      </main>
    </CampaignProvider>
  );
}
