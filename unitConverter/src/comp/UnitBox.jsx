import { useId } from "react";

function InputBox({
  label,
  data,
  onAmountChange, // Fix: Add onChange handler for input
  onUnitChange,
  unitOptions = [],
  selectedUnit = "",
  unitDisabled = false, // Fix: Ensure unitDisabled is applied
  dataDisabled = false,
  className = "",
}) {
  const dataInputID = useId();

  return (
    <div className={`bg-white p-7 rounded-lg text-sm flex ${className}`}>
      {/* Left Side: Input Field */}
      <div className="w-1/2">
        <label htmlFor={dataInputID} className="text-black/50 mb-2 inline-block ">
          {label}
        </label>
        <input
          id={dataInputID}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Value"
          disabled={dataDisabled}
          value={data}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} // Fix: Handle input change
        />
      </div>

      {/* Right Side: Select Unit */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Unit Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedUnit}
          onChange={(e) => onUnitChange && onUnitChange(e.target.value)}
          disabled={unitDisabled} // Fix: Apply unitDisabled
        >
          {unitOptions.map((uni) => (
            <option key={uni} value={uni}>
              {uni}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
