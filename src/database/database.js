import fs from "node:fs/promises";

/**
 * crio o caminho onde o arquivo de dados será
 * salvo, import.meta.url é uma propriedade que
 * devolve uma string contendo a URL absoluta
 * (o caminho completo) do arquivo onde o código está sendo
 * executado (substituiu __filename e __dirname no ES6)
 */

const DATABASE_PATH = new URL("db.json", import.meta.url);

export class Database {
  #database = {};

  constructor() {
    fs.readFile(DATABASE_PATH, "utf-8")
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch(() => {
        this.#persist();
      });
  }

  #persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database));
  }

  insert(table, data) {
    //confiro se tabela já existe dentro do objeto, se sim .push[data], senão crio [table] com data
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    this.#persist();
  }

  select(table, filters) {
    let data = this.#database[table] ?? [];

    if (filters) {
      //No método filter, se a função interna retornar true, o ticket passa no teste e é mantido na nova array filtrada.
      data = data.filter((ticket) => {
        // O método Object.entries() retorna uma array dos próprios pares [key, value] enumeráveis de um dado objeto
        // O método some() testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false
        return Object.entries(filters).some(([key, value]) => {
          return ticket[key].toLowerCase().includes(value.toLowerCase());
        });
      });
    }

    return data;
  }

  update(table, id, data) {
    const ticketIndex = this.#database[table].findIndex(
      (ticket) => ticket.id === id,
    );

    if (ticketIndex > -1) {
      this.#database[table][ticketIndex] = {
        ...this.#database[table][ticketIndex],
        ...data,
        //...data é o mesmo que:
        // equipment: data.equipment,
        // description: data.description,
        // updated_at: data.updated_at,
      };
    }

    this.#persist();
  }

  remove(table, id) {
    // this.#database[table] = this.#database[table].filter(
    //   (ticket) => ticket.id !== id,
    // );

    const ticketIndex = this.#database[table].findIndex(
      (ticket) => ticket.id === id,
    );

    if (ticketIndex > -1) {
      this.#database[table].slice(ticketIndex, 1);
      this.#persist();
    }
  }
}
