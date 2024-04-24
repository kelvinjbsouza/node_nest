// eslint-disable-next-line no-unused-vars
import { Op } from "sequelize"; // Operador para postgres

import "./database";

// eslint-disable-next-line no-unused-vars
import Customer from "./app/models/Customer";
// eslint-disable-next-line no-unused-vars
import Contact from "./app/models/Contact";

class Playground {
  static async play() {
    // const customer = await Customer.findByPk(2); // Buscar pelo ID
    // const customer = await Customer.findOne({
    //   attributes: ["id", "name"],
    // });
    // const customers = await Customer.findAll({
    //   // attributes: ["id", "name"], // Buscar apenas alguns atributos
    //   attributes: { exclude: ["status", "createdAt", "updatedAt"] }, // Buscar retirando alguns atributos
    //   where: {
    //     id: 1, // Utilizando where
    //   },
    // });
    // -------------------------------------------------------------------------------------------------------
    // const customers = await Customer.findAll({
    //   where: {
    //     status: {
    //       // [Op.eq]: "ACTIVE", // Utilizando condições
    //       [Op.ne]: "ACTIVE",
    //       // [Op.in]: ["ACTIVE", "ARCHIVED"], // para array
    //       // [Op.notIn]: ["ACTIVE", "ARCHIVED"], // para array
    //     },
    //     // name: {
    //     //   [Op.like]: "exemplo%", // para like
    //     // },
    //     created_at: {
    //       // [Op.gte]: new Date(), // maior q data atual
    //       [Op.between]: [new Date(2023, 1, 1), new Date(2023, 12, 31)], // utilizando between
    //     },
    //   },
    // });
    // ------------------------------------------------------------------------------------------------------
    // const customers = await Customer.findAll({
    //   where: {
    //     [Op.or]: {
    //       // Utilizando OR
    //       status: {
    //         [Op.ne]: "ACTIVE",
    //       },
    //       name: {
    //         [Op.like]: "exemplo%", // para like
    //       },
    //     },
    //     created_at: {
    //       [Op.between]: [new Date(2023, 1, 1), new Date(2023, 12, 31)], // utilizando between
    //     },
    //   },
    // });
    // --------------------------------------------------------------------------------------------------
    // JOIN
    // const customers = await Customer.findAll({
    //   include: [
    //     {
    //       model: Contact,
    //       where: {
    //         status: "ACTIVE",
    //       },
    //       required: false, // vira o LEFT JOIN
    //     },
    //   ],
    //   where: {
    //     status: "ACTIVE",
    //   },
    // });
    // ----------------------------------------------------------------------------------------------------
    // const customers = await Customer.findAll({
    //   include: [
    //     {
    //       model: Contact,
    //       where: {
    //         status: "ACTIVE",
    //       },
    //       required: false, // vira o LEFT JOIN
    //     },
    //   ],
    //   where: {
    //     status: "ACTIVE",
    //   },
    //   // order: [["name", "DESC"]],
    //   limit: 2,
    //   offset: 2 * 1 - 2, // limit * page - limit  // poderia ser 25 * 1 - 25 e pg 2 n teria nada
    // });
    // ---------------------------------------------------------------------------------------------------
    // sum, avr, max, min, count
    // const customers = await Customer.count();
    // const customers = await Customer.max("createdAt", {
    //   where: {
    //     status: "ACTIVE",
    //   },
    // });
    // const customers = await Customer.sum();
    // const customers = await Customer.min();
    // const customers = await Customer.avg();
    // ----------------------------------------------------------------------------------
    // Utilizar escopo já definido na MODEL
    // const customers = await Customer.scope("active").findAll();
    // ---------------------------------------------------------------------------------
    // Utilizar escopo como metodo por parametro já definido na MODEL
    // const customers = await Customer.scope({
    //   method: ["created", new Date(2024, 1, 1)],
    // }).findAll();
    // --------------------------------------------------------------------------------
    // Utilizar mais de um escopo de diferentes tipos
    // const customers = await Customer.scope([
    //   ["active"],
    //   { method: ["created", new Date(2024, 1, 1)] },
    // ]).findAll();
    // --------------------------------------------------------------------------------
    // INSERT
    // const customer = await Customer.create({
    //   id: 11,
    //   name: "Supermercado Zazá",
    //   email: "suporte@zaza.com.br",
    // });
    // --------------------------------------------------------------------------------
    // UPDATE
    // const customer = await Customer.findByPk(1);
    // console.log("Antes: ", JSON.stringify(customer, null, 2));
    // const newCustomer = await customer.update({
    //   status: "ACTIVE",
    // });
    // console.log("Depois: ", JSON.stringify(newCustomer, null, 2));
    // --------------------------------------------------------------------------------
    // UPDATE
    // const customer = await Customer.findByPk(11);
    // console.log("Antes: ", JSON.stringify(customer, null, 2));
    // const deleteCustomer = await customer.destroy();
    // console.log("Depois: ", JSON.stringify(deleteCustomer, null, 2));
    // --------------------------------------------------------------------------------
    // HOOKS
    // const countCustomers = await Customer.count();
    // const count = countCustomers + 1;
    // const customer = await Customer.create({
    //   id: count,
    //   name: "Supermercado Zazá 2",
    //   email: "faq@zaza.com.br",
    // });
    // console.log(JSON.stringify(customer, null, 2));
  }
}

Playground.play();
