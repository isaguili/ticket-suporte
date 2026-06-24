export function remove({ req, res, database }) {
  const { id } = req.params;

  try {
    database.remove("tickets", id);
  } catch (error) {
    res.writeHead(404).end("ID não encontrado.");
  }

  res.writeHead(204).end();
}
