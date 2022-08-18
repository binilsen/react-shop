import { useEffect, useState } from "react";

const useFetchData = (url, token = null, body = null, method = "GET") => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  const fetchData = async () => {
    const response = await fetch(url, {
      headers: {
        Authorization: token,
      },
      body: body,
      method: method,
    }).catch((e) => setServerError(e));
    const data = await response.json();
    setApiData(data);
    if (response.status != 200) setServerError("Server Error");
    setIsLoading(false);
  };
  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [url, token]);

  return { isLoading, apiData, serverError };
};

export default useFetchData;
