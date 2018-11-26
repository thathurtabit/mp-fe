const fetchJSONTimed = (url, options = {}, timeout = 10000) => {
  Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Fetch timed out')), timeout)
    ),
  ]);
};

export default fetchJSONTimed;
