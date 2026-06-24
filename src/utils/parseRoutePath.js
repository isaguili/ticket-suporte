//analiso caminho da rota por meio de um regex para identificar parâmetros nomeados
export function parseRoutePath(path) {
  // no path [/tickets/:id], captura [id]
  const routeParametersRegex = /:([a-zA-Z]+)/g;
  // substitui [/tickets/:id] por ["/tickets/(?<id>[a-z0-9_]+)"]
  const params = path.replaceAll(routeParametersRegex, "(?<$1>[a-z0-9_\-]+)");
  //na URL /tickets, devolve /\/tickets(?<query>\?(.*))?$/
  const pathRegex = new RegExp(`${params}(?<query>\\?(.*))?$`)

  return pathRegex
}
