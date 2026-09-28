# Portfólio | Rafael Joda

Meu portfólio de desenvolvimento de software, com projetos, certificados e formas de contato.

**[Acessar o portfólio](https://rafaeljodaporfolio.vercel.app/)**

## Sobre mim

Sou estudante de Engenharia de Software na FIAP e busco uma oportunidade de estágio em desenvolvimento de software. Desenvolvo projetos web com React, TypeScript e Node.js, além de projetos acadêmicos com Python e análise de dados.

## O que você encontra no site

- Projetos com opção de ver mais ou recolher a lista.
- Página separada de certificados.
- Temas claro e escuro com transição de cores.
- Navegação com rolagem suave e animações de interface.
- Personagem animado no rodapé e sons opcionais de interação.
- Formulário de contato e links para LinkedIn, e-mail e telefone.

## Tecnologias deste repositório

O site usa **HTML, CSS e JavaScript**, sem etapa de compilação. Os sons de interação usam a Web Audio API. O formulário utiliza o serviço externo FormSubmit, e a hospedagem é feita na Vercel.

## Estrutura

| Arquivo ou pasta | Função |
| --- | --- |
| `public/index.html` | Página principal e conteúdo do portfólio |
| `public/styles.css` | Estilos, temas e animações |
| `public/app.js` | Interações, projetos e formulário |
| `public/avatar.png` | Imagem do personagem |
| `public/certificados/` | Página, script e imagens dos certificados |
| `vercel.json` | Configuração de publicação da pasta `public` |

## Executar localmente

Com Git e Python 3 instalados:

```bash
git clone https://github.com/RafaelJoda/Portfolio-RafaelJoda.git
cd Portfolio-RafaelJoda
python -m http.server 8000 --directory public
```

No macOS ou Linux, use `python3` se necessário. Abra [localhost:8000](http://localhost:8000). Para encerrar o servidor, pressione `Ctrl+C`.

## Publicar na Vercel

1. Envie os arquivos para o repositório no GitHub, mantendo `public` e `vercel.json` na raiz.
2. Importe o repositório na Vercel.
3. Selecione **Other** como framework, deixe o comando de build vazio e defina **public** como diretório de saída.
4. Publique. As próximas alterações enviadas à branch de produção gerarão novos deploys.

A página de certificados está em `certificados/index.html`. Preserve esse arquivo e os links relativos ao mover o projeto.

## Personalizar

- Edite os textos e links da página em `public/index.html`.
- Ajuste cores, espaçamentos e efeitos em `public/styles.css`.
- Atualize os dados e comportamentos dos projetos em `public/app.js`.
- Para alterar certificados, revise `public/certificados/index.html`, `page.js` e as imagens da pasta.

## Formulário de contato

O destinatário é **rafaeljoda06@outlook.com**. O FormSubmit exige a ativação pelo e-mail enviado ao destinatário no primeiro uso. Após publicar, faça um envio de teste, confira a caixa de entrada e o spam e conclua a ativação solicitada. Um novo domínio pode exigir nova confirmação.

A entrega real precisa ser conferida na caixa de entrada; a mensagem de sucesso da interface, sozinha, não confirma o recebimento. Se trocar o destinatário, atualize a configuração em `public/app.js` e repita o teste.

## Contato

- [Portfólio](https://rafaeljodaporfolio.vercel.app/)
- [LinkedIn](https://www.linkedin.com/in/rafael-joda)
- [GitHub](https://github.com/RafaelJoda)
- [rafaeljoda06@outlook.com](mailto:rafaeljoda06@outlook.com)
- [Telefone: (11) 97044-4072](tel:+5511970444072)
