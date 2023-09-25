import axios from "axios";

import { getHeadersAndParams } from "../utils/common-utils";

export const getData = async (formData, jsonText, paramData, headerData) => {
  const apiType = formData.type.toLowerCase();
  const apiUrl = formData.url;
  const apiHeaders = getHeadersAndParams(headerData);
  const apiParams = getHeadersAndParams(paramData);

  try {
    return await axios({
      method: apiType,
      url: apiUrl,
      body: jsonText,
      headers: apiHeaders,
      params: apiParams,
    });
  } catch (error) {
    console.log("Error while getting the response ", error);
    return "error";
  }
};
export const handleSubmitData = async (
  formData,
  jsonText,
  paramData,
  headerData
) => {
  const apiType = formData.type.toLowerCase();
  const apiUrl = formData.url;
  const apiHeaders = getHeadersAndParams(headerData);
  const apiParams = getHeadersAndParams(paramData);
  const requestData = {
    method: apiType,
    url: apiUrl,
    body: jsonText,
    headers: apiHeaders,
    params: apiParams,
  };

  // Send the request to the server
  const backend_url =
    "https://postman-clone-backend-8i18.vercel.app/send-request";
  try {
    const response = await fetch(backend_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();

    return JSON.stringify(data, null, 2); // Display response data
  } catch (error) {
    console.error("Error sending request:", error);
  }
};
