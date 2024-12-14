import Hero from "../components/page-parts/home/Hero";
import HomeCards from "../components/page-parts/home/HomeCards";
import JobListing from "../components/JobListing";
import ViewAllJobs from "../components/page-parts/home/ViewAllJobs";

const Home = () => {
  return (
    <>
      <Hero title="Become" subtitle="The one you've always wanted to be!" />
      <HomeCards />
      <JobListing isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default Home;
