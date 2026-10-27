const { digits, readBody, cors } = require("./_data");
module.exports = (req, res) => {
  cors(res);
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "method_not_allowed" });
  const body = readBody(req);
  const order_id = digits(body.order_id);
  const new_address = String(body.new_address ?? "").trim();
  if (!digits(body.account_number) || !order_id || !new_address) {
    return res.status(400).json({ success: false, error: "missing_fields" });
  }
  // Stateless, como o mock do evento: sempre confirma com updated_at.
  return res.status(200).json({ success: true, order_id, new_address, updated_at: new Date().toISOString() });
};
