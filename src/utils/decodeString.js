const decodeString = (encodedString) => {
  const parser = new DOMParser();
  const decodedString = parser.parseFromString(
    `<!doctype html><body>${encodedString}`,
    "text/html"
  ).body.textContent;

  return decodedString;
};

export default decodeString;
