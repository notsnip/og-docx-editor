const getRequest = async (url) => {
  try {
    const query = await fetch(url);
    const res = await query.json();
    if (!res.success) {
      // if the request was not successful, throw an error
      throw new Error(`HTTP error! status: ${query.status}`);
    }
    return res;
  } catch (error) {
    console.error(error);
    throw error; // re-throw the error to be handled by the caller
  }
};

export default getRequest;
