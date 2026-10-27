const { ACCOUNTS, digits, readBody, cors } = require("./_data");
module.exports = (req, res) => {
  cors(res);
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "method_not_allowed" });
  const body = readBody(req);
  const account_number = digits(body.account_number);
  const code = digits(body.cep ?? body.postcode);
  const acc = ACCOUNTS[account_number];
  // Igual ao backend do evento: HTTP 200 sempre; a decisão fica no campo success.
  if (acc && (code === acc.cep || code === acc.postcode)) {
    return res.status(200).json({ success: true, customer_name: acc.customer_name, account_number });
  }
  return res.status(200).json({ success: false });
};
