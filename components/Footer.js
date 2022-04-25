import React from "react";

function Footer() {
  return (
    <footer className="w-full mt-6 bg-[#f7f7f7] pt-16 pb-4">
      <div className="xl:w-[80%] mx-[5%]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4  justify-between  text-[#222222] mb-10 border-b-2 pb-8">
          <div className="md:space-y-4 leading-8 md:leading-10 border-b">
            <p className="text-black mb-2">Support</p>
            <ul>
              <li>Help Center</li>
              <li>Safety information</li>
              <li>Cancellation options</li>
              <li>Our COVID-19 Response</li>
            </ul>
          </div>
          <div className="md:space-y-4 leading-8 md:leading-10 border-b mt-4 md:mt-0 md:border-none">
            <p className="text-black mb-2">Community</p>
            <ul>
              <li>Airbnb.org: disaster relief housing</li>
              <li>Support Afghan refugees</li>
              <li>Combating discrimination</li>
            </ul>
          </div>
          <div className="md:space-y-4 leading-8 md:leading-10 border-b mt-4 md:mt-0 md:border-none">
            <p className="text-black mb-2">Hosting</p>
            <ul>
              <li>Try hosting</li>
              <li>AirCover: protection for Hosts</li>
              <li>Explore hosting resources</li>
            </ul>
          </div>
          <div className="md:space-y-4 leading-8 md:leading-10 mt-4 md:mt-0">
            <p className="text-black mb-2">About</p>
            <ul>
              <li>Newsroom</li>
              <li>Learn about new features</li>
              <li>Letter from our founders</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between text-[#222222]">
          <div>
            <p>© 2022 Airbnb, Inc.</p>
            <ul className="flex gap-6 md:gap-10">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="order-first md:order-last"> English (US)</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
