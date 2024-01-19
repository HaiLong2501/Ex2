import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Services from "./Services";
import RecentWork from "./RecentWork";
import TwitterFeed from "./TwitterFeed";
import Footer from "./Footer";

export default function Homepage() {
  return (
    <div className="homePage">
      <Header />
      <Banner />
      <Services />
      <RecentWork />
      <TwitterFeed />
      <Footer />
    </div>
  );
}
