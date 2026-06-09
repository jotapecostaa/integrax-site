# Revisão de segurança — Integrax

Verificações realizadas:

- Removida pasta temporária `.bolt`, se existente.
- Removida dependência não utilizada `@supabase/supabase-js`.
- Mantidas apenas informações públicas de contato.
- Nenhum arquivo `.env` incluído.
- Nenhuma chave de API, token, senha, webhook secreto ou credencial encontrada.
- `.gitignore` reforçado com arquivos de ambiente, caches, builds e pastas de hospedagem.
- `dist/` removido do pacote final para evitar build antigo; a hospedagem deve gerar a versão atual com `npm run build`.

Observação:
WhatsApp, e-mail, Instagram e TikTok são dados públicos da empresa e podem aparecer no front-end.
