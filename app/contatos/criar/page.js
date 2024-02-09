"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../contatos.module.css"

export default function Criar() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const contato = {
      nome, endereco, telefone
    }

    const resposta = await fetch("http://localhost:3000/api/contatos", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contato)
    })
    if (resposta.ok) {
      router.push("/contatos")
    }
    else {
      alert("Erro ao criar contato")
    }
  }

  return (
    <div className={styles.container}>
      <h1>Criar contato</h1>
      <div className={styles.principal}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome: </label>
            <input
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              type="text"
              required // Nome, não pode ficar em branco
              maxLength={100} />
          </div>
          <div>
            <label>Endereco: </label>
            <input
              value={endereco}
              onChange={(event) => setEndereco(event.target.value)}
              type="text"
              maxLength={100} />
          </div>
          <div>
            <label>Telefone: </label>
            <input
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
              type="number" />
          </div>
          <button type="submit">Criar</button>
          {/* <button className={styles.espacamento}> */}
          <Link href="/contatos" className={styles.espacamento}>Voltar</Link>
          {/* </button> */}
        </form>
      </div>
    </div>
  );
}