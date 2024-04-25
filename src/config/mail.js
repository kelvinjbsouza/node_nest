export default {
  // Essa opção foi criada em razão de que serviços assim são contratados
  // Essa possiblibidade é caráter de TESTE apenas
  // O sistema utilizado para testes é o "Mailtrap"
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: "Sistema <naoresponda@exemplo.com>", // trabalhando em produção o dominio deve existir
  },
};
