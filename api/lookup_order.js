const { ORDERS, digits, readBody, cors } = require("./_data");
module.exports = (req, res) => {
  cors(res);
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "method_not_allowed" });
  const body = readBody(req);
  const order_id = digits(body.order_id);
  const order = ORDERS[order_id];
  if (!order) return res.status(200).json({ order_id, status: "not_found" });
  return res.status(200).json(order);
};
