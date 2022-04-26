function SmallCard({ category, Icon }) {
  return (
    <>
      <div
        key={category}
        className="flex items-center  mt-2 space-x-2 rounded-full cursor-pointer hover:bg-gray-100 p-2 focus:bg-gray-100"
      >
        {/* Left */}
        <div className="relative h-8 w-8">
          <Icon className="text-mainTextColor" />
        </div>
        {/* Right */}
        <div>
          <h2 className="text-mainTextColor">{category}</h2>
        </div>
      </div>
    </>
  );
}

export default SmallCard;
