import { create } from "../controllers/tickets/create.js";
import { index } from "../controllers/tickets/index.js";
import { update } from "../controllers/tickets/update.js";
import { updateStatus } from "../controllers/tickets/updateStatus.js";
import { remove } from "../controllers/tickets/remove.js";

export const tickets = [
  {
    method: "GET",
    path: "/tickets",
    controller: index,
  },
  {
    method: "POST",
    path: "/tickets",
    controller: create,
  },
  {
    method: "PUT",
    path: "/tickets/:id",
    controller: update,
  },
  {
    method: "PATCH",
    path: "/tickets/:id/close",
    controller: updateStatus,
  },
  {
    method: "DELETE",
    path: "/tickets/:id",
    controller: remove,
  },
]

/**
 * Você quer salvar a função para ser usada no futuro por outra pessoa
 * sistema? Passe apenas o nome dela, sem parênteses (listener, create).
 * Quem for usar no futuro vai colocar os parênteses e mandar os dados.
 *
 * Você está dentro do fluxo de execução e precisa que a função rode
 * AGORA com os dados atuais? Coloque os parênteses e passe os
 * argumentos (jsonHandler(req, res)).
*/
