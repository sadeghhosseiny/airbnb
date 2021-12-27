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
    <div className="space-y-3 pb-7 border-b border-gray-400 md:border-none">
      <h1 className="font-bold">{item.head}</h1>
      {item.subLinks.map((item, index) => (
        <p key={index}>{item.link}</p>
      ))}
    </div>
  );
}

export default FooterItems;
