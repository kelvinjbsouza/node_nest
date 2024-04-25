export default {
  // Essa opção foi criada em razão de que serviços assim são contratados
  // Essa possiblibidade é caráter de TESTE apenas
  // O sistema utilizado para testes é o "Mailtrap"
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  secure: false,
  auth: {
    user: "f050ae56f5008f",
    pass: "c3e3087357f241",
  },
  default: {
    from: "Sistema <naoresponda@exemplo.com>", // trabalhando em produção o dominio deve existir
  },
};
