
import FeaturedDevelopers from "../Components/FeaturedDevelopers";
import UserReviews from "../Components/UserReviews";
import Banner from "../ui/Banner";
import OurApps from "../ui/OurApps";
import Stats from "../ui/Stats";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section className="py-10 bg-gradient-to-tl to-[#632EE3] from-[#9F62F2] ">
        <Stats></Stats>
      </section>
      <section className="pt-16">
        <OurApps></OurApps>
        <UserReviews></UserReviews>
        <FeaturedDevelopers></FeaturedDevelopers>
      </section>
      
    </div>
  );
};

export default Home;
