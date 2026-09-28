# Portfólio — Rafael Joda

Site completo em HTML, CSS e JavaScript, pronto para edição. Não é um projeto Next.js e não precisa de npm install nem de compilação.

## Publicar na Vercel

1. Extraia o ZIP e abra a pasta `portfolio-rafael-joda`.
2. Coloque o conteúdo dessa pasta em um repositório no GitHub. `vercel.json` e `public/` devem ficar na raiz do repositório.
3. Na Vercel, crie um projeto e importe o repositório.
4. Use Framework Preset **Other**, Build Command vazio e Output Directory **public**. O arquivo `vercel.json` já define o diretório de saída.
5. Clique em Deploy.

Se você subir a pasta inteira dentro do repositório, selecione `portfolio-rafael-joda` como Root Directory.

Alternativa pelo terminal, dentro desta pasta: `npx vercel --prod`.

Documentação: https://vercel.com/docs/builds/configure-a-build

## Rodar localmente

Abra esta pasta no VS Code. No terminal, execute:

```bash
python -m http.server 8000 --directory public
```

No Windows, se `python` não funcionar, tente `py -m http.server 8000 --directory public`.

Abra http://localhost:8000 no navegador. A página de certificados fica em http://localhost:8000/certificados/.

Use um servidor local: abrir index.html com duplo clique pode quebrar caminhos que começam com `/`.

## Onde editar

| Arquivo | Conteúdo |
| --- | --- |
| public/index.html | Textos, projetos, menu, contatos e formulário |
| public/styles.css | Cores, layout, responsividade e animações das duas páginas |
| public/app.js | Tema, áudio, scroll, detalhes dos projetos, ver mais/menos e envio do formulário |
| public/avatar.png | Personagem usado no topo e no rodapé |
| public/certificados/index.html | Página dos sete certificados |
| public/certificados/page.js | Alternância animada de tema na página de certificados |
| public/certificados/certificado-1.png até certificado-7.png | Imagens originais dos certificados |
| vercel.json | Configuração de publicação |

Os quatro primeiros projetos ficam diretamente na seção `projetos`. Os cinco extras estão dentro de `additional-projects`. Se adicionar ou remover projetos, ajuste também os contadores e textos no HTML e no final de `app.js`.

As descrições dos quatro projetos com janela de detalhes estão no objeto `projects` de `app.js`.

O CSS mantém ajustes sucessivos: em caso de regras repetidas, as regras mais abaixo prevalecem. As cores ficam nas variáveis de `:root` (escuro) e `html[data-theme=light]` (claro).

## Formulário de contato

Destino: **rafaeljoda06@outlook.com**. O formulário usa o serviço externo FormSubmit; não requer chave de API neste projeto.

Após publicar na Vercel, envie uma mensagem de teste e confirme a ativação recebida no Outlook (verifique o spam). Um novo domínio pode exigir nova ativação. A aceitação pelo serviço não confirma a entrega na caixa de entrada; confira o recebimento de uma segunda mensagem após ativar.

O endereço de destino está no HTML e no `fetch` de `app.js`. Atualize ambos se precisar trocá-lo. O JavaScript já usa o domínio atual como origem do formulário.

O site mostra um estado de erro e preserva o texto se a requisição não puder ser confirmada. O link de e-mail direto continua disponível.

## Incluído

- Nove projetos, com quatro visíveis e cinco no botão Ver mais.
- Página separada com sete certificados e seis links de credenciais.
- O certificado de Excel pode ser ampliado pela imagem, mas não possui link de validação cadastrado.
- Tema claro e escuro, scroll suave, personagem animado e sons opcionais.
- LinkedIn, e-mail e telefone.

Este pacote é uma cópia independente da versão publicada no ChatGPT. Editá-lo ou publicá-lo na Vercel não altera automaticamente aquela versão, e vice-versa.
