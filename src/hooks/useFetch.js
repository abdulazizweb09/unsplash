import { useEffect, useState } from "react";

export function useFetch(url) {
  let [data, setData] = useState(null);
  let [isPending, setIsPending] = useState(false);
  let [error, setError] = useState(null);
  let [links, setLinks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data.results);
        setIsPending(false);
        setLinks(data.results.links?.download);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);


  return { data, isPending, error,links };
}
