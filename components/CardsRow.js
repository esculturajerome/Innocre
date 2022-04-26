import Card from "./Card";

function CardsRow() {
  const cards = [
    {
      id: "1",
      category: "Collection",
      subText: "Plan a trip with tips from a local",
      url: "/test",
      imageLink: "/images/banner-1.jpg",
    },
    {
      id: "2",
      category: "Collection",
      subText: "Feed your wanderlust",
      url: "/test",
      imageLink: "/images/banner-2.jpg",
    },
    {
      id: "3",
      category: "Collection",
      subText: "Most Popular around the world",
      url: "/test",
      imageLink: "/images/banner-3.jpg",
    },
    {
      id: "4",
      category: "Workshops",
      subText: "Learn the secrets of successful hosting",
      url: "/test",
      imageLink: "/images/banner-4.jpg",
    },
  ];
  return (
    <div>
      <h2 className="text-xl md:text-4xl mb-3 font-Walsheim">New this week</h2>
      <div className="overflow-y-hidden overflow-x-scroll scroll-hidden text-white">
        <div className="inline-flex space-x-4">
          {cards.map((card) => (
            <Card
              key={card.id}
              category={card.category}
              subText={card.subText}
              url={card.url}
              imageLink={card.imageLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardsRow;
