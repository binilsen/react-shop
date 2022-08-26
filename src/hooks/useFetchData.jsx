import { useCallback, useEffect, useState } from "react";

const useFetchData = ({ url, token = null, method = "GET", body = null }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);
  const [fetchToken, setFetchToken] = useState(null);
  const fetchData = useCallback(async () => {
    const response = await fetch(url, {
      headers: {
        Authorization: token,
      },
      body: body,
      method: method,
    }).catch((e) => setServerError(e));
    if (response.headers.get("authorization"))
      setFetchToken(response.headers.get("authorization"));
    const data = await response.json();
    setApiData(data);
    if (response.status != 200) setServerError("Server Error");
    setIsLoading(false);
  }, []);
  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [fetchData]);

  return { isLoading, apiData, serverError, fetchToken };
};

export default useFetchData;
