function Categories() {
  const categories = ["Laptop", "Smartphone", "Smartwatches"];
  return (
    <div className="overflow-y-hidden overflow-x-scroll scroll-hidden">
      <div className="inline-flex space-x-2">
        {categories.map((category) => (
          <button className="border md:bg-[#f2f2f2] hover:border-black rounded-full px-4 md:py-1  focus:bg-[#222222] text-[#222222] focus:text-white">
            <span className="text-sm tracking-wider">{category}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
