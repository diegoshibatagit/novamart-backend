// Dados mock da NovaMart — cópia fiel do backend do evento (partner-training-brasil.vercel.app),
// registrada em fontes/backend-respostas.json em 2026-10-27. Sem segredos, sem estado.
const ORDERS = {
  "12345": { currency: "BRL", expected_delivery_date: "2026-11-05", fulfillment_center: "CD-SP-03",
    items: [{ name: "Fone Nova X1", price: 749, qty: 1 }], order_id: "12345",
    shipping_address: "Av. Paulista, 1578, São Paulo – SP", status: "shipped", status_label: "enviado" },
  "67890": { currency: "BRL", expected_delivery_date: "2026-11-08", fulfillment_center: "CD-RJ-01",
    items: [{ name: "Caixa de Som Nova Mini", price: 399, qty: 2 }], order_id: "67890",
    shipping_address: "Rua Visconde de Pirajá, 550, Rio de Janeiro – RJ", status: "processing", status_label: "em processamento" }
};
const ACCOUNTS = {
  "10000001": { customer_name: "Juliana Souza", cep: "01310100", postcode: "94107" },
  "10000002": { customer_name: "Rafael Lima", cep: "04538132", postcode: "94107" }
};
const digits = (v) => String(v ?? "").replace(/\D/g, "");
function readBody(req) {
  if (!req.body) return {};
  if (typeof req.body === "string") { try { return JSON.parse(req.body); } catch { return {}; } }
  return req.body;
}
function cors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}
module.exports = { ORDERS, ACCOUNTS, digits, readBody, cors };
