const url =
  "https://weatherapi-com.p.rapidapi.com/current.json?q=uttar%20pradesh";

(async () => {
  try {
    const response = await fetch(url);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();
