import { useState, useEffect } from "react";
import useUnitInfo from "./hooks/unFetch"
import InputBox from "./comp/UnitBox";

function App() {
  const [from, setFrom] = useState("km");
  const [to, setTo] = useState("miles");
  const [data, setData] = useState(""); // User input
  const [output, setOutput] = useState(""); // Converted output
  const unitInf = useUnitInfo(from); // Fetch unit info
  const options = Object.keys(unitInf || {}); // Get unit keys
  console.log(options)
  useEffect(() => {
    if (!data) {
      setOutput(""); // Reset output if input is empty
      return;
    }

    const value = parseFloat(data);
    let converted = value;

    if (from === "km" && to === "Miles") {
      converted = value * 0.621371;
    } else if (from === "miles" && to === "km") {
      converted = value / 0.621371;
    } else if (from === "kg" && to === "lbs") {
      converted = value * 2.20462;
    } else if (from === "lbs" && to === "kg") {
      converted = value / 2.20462;
    } else if (from === "C" && to === "F") {
      converted = (value * 9) / 5 + 32;
    } else if (from === "F" && to === "C") {
      converted = ((value - 32) * 5) / 9;
    }

    setOutput(converted.toFixed(3)); // Update output with converted value
  }, [data, from, to]); // ✅ Dependencies added for real-time update

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"style={{
                backgroundImage: `url('https://images.pexels.com/photos/2763964/pexels-photo-2763964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}>
        
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form>
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  data={data}
                  unitOptions={options}
                  onUnitChange={(uni) => setFrom(uni)}
                  selectedUnit={from}
                  onAmountChange={(data) => setData(data)} // ✅ Ensure onChange is handled
                />
              </div>

              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  data={output} // ✅ Output is now dynamically updated
                  unitOptions={options}
                  onUnitChange={(uni) => setTo(uni)}
                  selectedUnit={to}
                  dataDisabled
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
