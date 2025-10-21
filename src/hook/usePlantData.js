import axios from "axios";
import { useEffect, useState } from "react";

const usePlantsData = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("/plantData.json")
      .then((data) => {
        setAllData(data.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { allData, loading, error };
};
export default usePlantsData;
