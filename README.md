# NovaMart — backend mock (cópia própria)

Três funções serverless (Vercel) que reproduzem o backend do evento, sem estado e sem segredos:

| Rota | Entrada (POST JSON) | Saída |
|---|---|---|
| `/api/lookup_order` | `{"order_id":"12345"}` | dados do pedido, ou `{"status":"not_found"}` |
| `/api/verify_identity` | `{"account_number":"10000001","cep":"01310100"}` | `{"success":true,"customer_name":…}` ou `{"success":false}` (sempre HTTP 200) |
| `/api/update_shipping_address` | `{"account_number","order_id","new_address"}` | `{"success":true,"updated_at":…}` |

Dados de teste: contas 10000001 (Juliana Souza, CEP 01310100) e 10000002 (Rafael Lima, CEP 04538132); pedidos 12345 (enviado, 2026-11-05) e 67890 (em processamento, 2026-11-08). `postcode` também é aceito.

## Página do widget

`public/index.html` é a página NovaMart com o widget do agente; o Vercel serve a pasta `public` na raiz, então a mesma URL do deploy abre a página (`https://SUA-URL/`) e expõe as rotas `/api/*`.

## Deploy
1. `npm i -g vercel` (ou use o site do Vercel → "Add New Project" → importar esta pasta).
2. Nesta pasta: `vercel deploy --prod`.
3. Copie a URL gerada (ex.: `https://novamart-backend-xxxx.vercel.app`) e devolva para o Claude: as tools do agente serão apontadas para `…/api/lookup_order`, `…/api/verify_identity` e `…/api/update_shipping_address` via MCP.

## Teste rápido
```
curl -s -X POST https://SUA-URL/api/verify_identity -H 'Content-Type: application/json' -d '{"account_number":"10000001","cep":"01310100"}'
```
