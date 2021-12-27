import FooterItems from "../footerItems/footerItems";

function Footer() {
  const Links = [
    {
      head: "Support",
      subLinks: [
        {
          link: "Help Center",
        },
        {
          link: "Safety information",
        },
        {
          link: "Cancellation options",
        },
        {
          link: "Our Covid-19 Response",
        },
        {
          link: "Supporting people with disabilities",
        },
        {
          link: "Report a neighborhood concern",
        },
      ],
    },
    {
      head: "Community",
      subLinks: [
        {
          link: "Airbnb.org: disaster relief housing",
        },
        {
          link: "Support Afghan refugees",
        },
        {
          link: "Celebrating diversity & belonging",
        },
        {
          link: "Combating discrimination",
        },
      ],
    },
    {
      head: "Hosting",
      subLinks: [
        {
          link: "Try hosting",
        },
        {
          link: "AirCover: protection for Hosts",
        },
        {
          link: "Explore hosting resources",
        },
        {
          link: "Visit our community forum",
        },
        {
          link: "How to host responsibly",
        },
      ],
    },
    {
      head: "About",
      subLinks: [
        {
          link: "Newsroom",
        },
        {
          link: "Learn about new features",
        },
        {
          link: "Letter from our founders",
        },
        {
          link: "Careers",
        },
        {
          link: "Investors",
        },
        {
          link: "Airbnb Luxe",
        },
      ],
    },
  ];
  return (
    <div className="bg-gray-200">
      <div className="max-w-6xl space-y-10 md:space-y-0 mx-16 flex flex-col md:flex-row md:mx-auto justify-evenly py-12">
        {Links.map((item, index) => (
          <FooterItems key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Footer;
