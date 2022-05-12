import { useState, useEffect } from "react";
import axios from "axios";
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        //Using cors-anywhere proxy to resolve " No 'Access-Control-Allow-Origin' header error"
        const response = await axios.get(
          `http://cors-anywhere.herokuapp.com/${url}`
        );
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
}
