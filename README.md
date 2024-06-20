# Contact Form

Este é um projeto de formulário de contato simples que permite aos usuários enviar suas consultas e solicitações de suporte. O formulário coleta informações como Nome, Sobrenome, Endereço de Email, Tipo de Consulta e Mensagem. O formulário também inclui uma verificação de consentimento antes do envio.

## Funcionalidades

- **Formulário Responsivo:** O formulário se adapta a diferentes tamanhos de tela, proporcionando uma boa experiência de usuário tanto em dispositivos móveis quanto em desktops.
- **Validação de Formulário:** O formulário possui validação de campo para garantir que todos os campos obrigatórios sejam preenchidos corretamente.
- **Mensagens de Erro Dinâmicas:** Exibição de mensagens de erro específicas para cada campo obrigatório não preenchido.
- **Envio via AJAX:** O formulário pode ser enviado sem recarregar a página (quando configurado com um backend adequado).
- **Armazenamento de Sessão:** A mensagem de sucesso é armazenada na sessão, permitindo que a mensagem persista após o envio bem-sucedido do formulário.

## Estrutura do Projeto

```plaintext
/
├── assets/
│   ├── fonts/
│   │   ├── static/
│   │   │   ├── Karla-Regular.ttf
│   │   │   └── Karla-Bold.ttf
│   └── images/
│       └── favicon-32x32.png
├── styles.css
├── script.js
├── index.html
└── README.md
```
