import { useState } from "react";

const GrowthToggle = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-full shadow-lg">
      <p className="text-sm">
        Turn on <span className="font-semibold text-orange-600">Growth</span>
      </p>

      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative w-14 h-8 flex items-center rounded-full transition-colors duration-300 ${
          enabled ? "bg-gradient-to-r from-primary to-orange-600" : "bg-gradient-to-r from-primary to-orange-600"
        }`}
      >
        <span
          className={`absolute left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            enabled ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

export default GrowthToggle;
