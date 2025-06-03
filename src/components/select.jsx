import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false); // tanlagandan so'ng yopiladi
  };

  // tashqaridan bosilganda dropdown yopilishi
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-1 font-bold text-[14px] text-[#031651] rounded border border-gray-300 bg-white cursor-pointer"
      >
        {i18n.language.toUpperCase()}
        <ChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          size={18}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-md z-50 w-24">
          {["uz", "en", "ru"].map((lang) => (
            <div
              key={lang}
              onClick={() => handleLangChange(lang)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#031651] font-semibold text-sm"
            >
              {lang.toUpperCase()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
