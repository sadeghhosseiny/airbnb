type itemTypes = {
  item: {
    head: string;
    subLinks: {
      link: string;
    }[];
  };
};

function FooterItems({ item }: itemTypes) {
  return (
    <div
      className={`space-y-3 pb-7 ${
        item.head != "About" ? "border-b" : ""
      } border-gray-400 md:border-none`}
    >
      <h1 className="font-bold">{item.head}</h1>
      {item.subLinks.map((item, index) => (
        <p className="text-sm" key={index}>
          <span className="hover:underline cursor-pointer">{item.link}</span>
        </p>
      ))}
    </div>
  );
}

export default FooterItems;
