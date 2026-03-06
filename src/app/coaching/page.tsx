import { CoachingHero } from "@/components/coaching/CoachingHero";
import { Authority } from "@/components/coaching/Authority";
import { Services } from "@/components/Services";
import { TargetAudience } from "@/components/TargetAudience";
import { BKSApproach } from "@/components/coaching/BKSApproach";
import { ApplicationForm } from "@/components/coaching/ApplicationForm";
import { Testimonials } from "@/components/Testimonials";

export default function CoachingPage() {
    return (
        <div className="bg-white">
            <CoachingHero />
            <Authority />
            <Services />
            <TargetAudience />
            <BKSApproach />
            <Testimonials />
            <ApplicationForm />
        </div>
    );
}
