export async function jsonHandler(req, res) {
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    req.body = null;
  }

  res.setHeader("Content-type", "application/json");
}

/** Em JavaScript, os objetos são dinâmicos. Isso significa que
 * você pode inventar uma propriedade nova em um objeto a
 * qualquer momento: objeto.novaPropriedade = valor
 *
 * O jsonHandler intercepta a requisição, cria a propriedade
 * .body e joga o JSON lá dentro. A partir do momento em que essa
 * função roda, as próximas funções do seu servidor passam a ter
 * acesso ao req.body.
*/
