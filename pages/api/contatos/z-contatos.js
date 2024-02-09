// const contatos = [
//   {
//     id: 1,
//     nome: "Marcell",
//     endereco: "Rua ABC",
//     telefone: "+55 92 98334-4432"
//   },
//   {
//     id: 2,
//     nome: "Maria",
//     endereco: "Avenida XYZ",
//     telefone: "+55 11 98765-4321"
//   },
//   {
//     id: 3,
//     nome: "Pedro",
//     endereco: "Praça 123",
//     telefone: "+55 21 97654-3210"
//   },
//   {
//     id: 4,
//     nome: "Ana",
//     endereco: "Alameda DEF",
//     telefone: "+55 81 94567-2109"
//   },
//   {
//     id: 5,
//     nome: "José",
//     endereco: "Travessa LMN",
//     telefone: "+55 47 91234-5678"
//   },
//   {
//     id: 6,
//     nome: "Paula",
//     endereco: "Estrada GHI",
//     telefone: "+55 31 92345-6789"
//   },
//   {
//     id: 7,
//     nome: "Carlos",
//     endereco: "Rodovia MNO",
//     telefone: "+55 63 93456-7890"
//   },
//   {
//     id: 8,
//     nome: "Fernanda",
//     endereco: "Viela PQR",
//     telefone: "+55 98 94567-8901"
//   },
//   {
//     id: 9,
//     nome: "Mariana",
//     endereco: "Ladeira STU",
//     telefone: "+55 92 98765-0123"
//   },
//   {
//     id: 10,
//     nome: "Rafael",
//     endereco: "Rua VWX",
//     telefone: "+55 19 97654-3210"
//   },
//   {
//     id: 11,
//     nome: "Lucas",
//     endereco: "Avenida YZA",
//     telefone: "+55 21 92345-6789"
//   },
//   {
//     id: 12,
//     nome: "Carolina",
//     endereco: "Praça 456",
//     telefone: "+55 81 93456-7890"
//   },
//   {
//     id: 13,
//     nome: "Mateus",
//     endereco: "Alameda BCD",
//     telefone: "+55 47 94567-8901"
//   },
//   {
//     id: 14,
//     nome: "Juliana",
//     endereco: "Travessa EFG",
//     telefone: "+55 31 91234-5678"
//   },
//   {
//     id: 15,
//     nome: "Daniel",
//     endereco: "Estrada HIJ",
//     telefone: "+55 63 98765-4321"
//   },
//   {
//     id: 16,
//     nome: "Camila",
//     endereco: "Rodovia KLM",
//     telefone: "+55 98 97654-3210"
//   },
//   {
//     id: 17,
//     nome: "Gabriel",
//     endereco: "Viela NOP",
//     telefone: "+55 92 93456-7890"
//   },
//   {
//     id: 18,
//     nome: "Amanda",
//     endereco: "Ladeira QRS",
//     telefone: "+55 19 94567-8901"
//   },
//   {
//     id: 19,
//     nome: "Luciana",
//     endereco: "Rua TUV",
//     telefone: "+55 21 98765-0123"
//   },
//   {
//     id: 20,
//     nome: "Leonardo",
//     endereco: "Avenida WXY",
//     telefone: "+55 47 97654-3210"
//   }
// ]

const sqlite3 = require("sqlite3").verbose()
let db = new sqlite3.Database("./data/database.db")

export default function handler(req, res) {
  // console.log("api Prolam")
  // res.status(200).json({ message: "api Prolam" })
  // res.status(200).json(contatos)
  db.all(`select * from contatos`, (err, rows) => {
    if (err) {
      console.error(err.message)
      res.status(500).send(err.message);
      return;
    }
    res.json(rows)
  })

}