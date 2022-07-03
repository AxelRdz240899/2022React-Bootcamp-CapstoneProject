import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";
import PropTypes from "prop-types";

export function useWizelineGetEndpoints(url) {
  const { ref: apiRef, loadingResponse: isApiMetadataLoading } = useLatestAPI();
  const [response, setResponseStatus] = useState(() => ({
    data: {},
    loadingResponse: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => { };
    }

    const controller = new AbortController();

    async function getFromEndpoint() {
      let apiParameters = url.replace("{apiRef}", apiRef);
      try {
        setResponseStatus({ data: { results: [] }, loadingResponse: true });
        const response = await fetch(`${API_BASE_URL}${apiParameters}`, {
          signal: controller.signal,
        });
        const data = await response.json()
        setResponseStatus({ data, loadingResponse: false });
      } catch (err) {
        setResponseStatus({ data: { results: [] }, loadingResponse: false });
      }
    }

    getFromEndpoint();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, url]);

  return response;
}

useWizelineGetEndpoints.propTypes = {
  url: PropTypes.string.isRequired,
};
