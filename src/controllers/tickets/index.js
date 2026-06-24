export function index({ req, res, database }) {
  const { status } = req.query;

  const filters = status ? { status } : null

  try {
    const tickets = database.select("tickets", filters);
    return res.end(JSON.stringify(tickets));
  } catch (e) {
    return res.writeHead(404).end();
  }
}
