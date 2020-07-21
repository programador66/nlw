import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("items").insert([
    { title: "lâmpadas", image: "lampadas.svg" },
    { title: "Pilhas e Baterias", image: "baterias.svg" },
    { title: "Papéis e Papelão", image: "papeis-papelao.svg" },
    { title: "Resíduos eletrônicos", image: "eletronicos.svg" },
    { title: "Resíduos Orgânicos", image: "orgânicos.svg" },
    { title: "Óleo de cozinha", image: "oleo.svg" },
  ]);
}