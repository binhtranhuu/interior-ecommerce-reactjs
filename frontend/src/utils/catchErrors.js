const catchErrors = (error) => {
  let errorMsg;

  if (error.response && error.response.data.message) {
    // If the request was made and the server not responded with a status code in the range of 2xx
    errorMsg = error.response.data.message;
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request;
  } else {
    // if something else happened while making the request
    errorMsg = error.message;
  }
  return errorMsg;
};

export default catchErrors;
