import { useEffect, useState } from "react";
import units from "../hooks/units.json";

function useUnitInfo(uni) {
  const [data, setData] = useState(null);

  useEffect(() => {
      setData(units);
   }, [uni]);

  return data; // Return the fetched unit data
}

export default useUnitInfo;
