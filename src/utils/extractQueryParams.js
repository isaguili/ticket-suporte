export function extractQueryParams(query) {
  return (
    query
      .slice(1)
      .split("&")
      //reduce((acumulador, valorAtual) => {}, {}) <-- indica que devolve objeto
      .reduce((queryParams, param) => {
        const [key, value] = param.split("=");
        queryParams[key] = value;
        return queryParams
      }, {})
  );
}
