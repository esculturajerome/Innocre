function SmallCard({ category, Icon }) {
  return (
    <>
      <div
        key={category}
        className="flex items-center  mt-2 space-x-2 rounded-full cursor-pointer hover:bg-gray-100 hover-motion p-2 border"
      >
        {/* Left */}
        <div className="relative h-8 w-8">
          <Icon className="text-[#222222]" />
        </div>
        {/* Right */}
        <div>
          <h2>{category}</h2>
        </div>
      </div>
    </>
  );
}

export default SmallCard;
