import { useEffect, useState } from "react";

export function useFetch(url, append = false) {
  let [data, setData] = useState([]);
  let [isPending, setIsPending] = useState(false);
  let [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const res = await req.json();

        setData((prev) => (append ? [...prev, ...res.results] : res.results));

        setIsPending(false);
      } catch (err) {
        setError(err.message);
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isPending, error };
}
