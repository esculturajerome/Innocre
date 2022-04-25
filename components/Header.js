import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BeakerIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";

function header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChange = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <div className="h-15 bg-white text-black py-4 flex justify-between items-center border-b md:w-[90%] m-auto">
      {/* {renderThemeChange()} */}
      <p className="ml-4 md:ml-0">Innocre</p>
    </div>
  );
}

export default header;
