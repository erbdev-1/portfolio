import FeaturedCard from "@/components/cards/featured/featured-card";
import ExpandableFeatured from "@/components/expandable/expandable-featured";
import Heading from "@/components/heading/heading";
import { featuredData } from "@/data";

const MainFeaturedCard = featuredData[0];

export default function FeaturedSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      {/* Heading */}
      <Heading number="01" title_1="Featured" title_2="Work" />

      {/* Main Featured Card */}
      <FeaturedCard
        active
        title={MainFeaturedCard.title}
        tag={MainFeaturedCard.tag}
        video={MainFeaturedCard.video}
        credits={MainFeaturedCard.credits}
      />
      <div className="mt-24">
        <ExpandableFeatured />
      </div>
    </div>
  );
}
