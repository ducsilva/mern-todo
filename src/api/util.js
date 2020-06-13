export const handleError = (error) => {
  debugger;
  const { response, request, message } = error;
  if (response) {
    const { data, status } = response;
    const { message: errorMessage } = data;
    //Request made and server responded
    if (errorMessage) {
      return { error: { message: errorMessage } };
    }
    return { error: { message: `[${status}] ${data}` }, data };
  }
  if (request) {
    //The request was made but no response was received
    return { error: request };
  }
  //Something happened in setting up the request that trigger an Error
  return { error: message };
};
