"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../contatos.module.css"

const baseUrl =
  (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000");

export default function Criar() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [tipo, setTipo] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const contato = {
      nome, logradouro, telefone, estado, cidade, bairro, numero, tipo
    }

    // const resposta = await fetch("http://localhost:3000/api/contatos", {
    const resposta = await fetch(`${baseUrl}/api/contatos`, {
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
              // onChange={(event) => setNome(event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1))}
              required // não eixar ficar em branco
              type="text"
              maxLength={100} />
          </div>
          <div>
            <label>Estado: </label>
            <input
              value={estado}
              onChange={(event) => setEstado(event.target.value.toUpperCase())}
              required // não eixar ficar em branco
              type="text"
              maxLength={2} />
          </div>
          <div>
            <label>Cidade: </label>
            <input
              value={cidade}
              onChange={(event) => setCidade(event.target.value)}
              required // não eixar ficar em branco
              type="text"
              maxLength={30} />
          </div>
          <div>
            <label>Bairro: </label>
            <input
              value={bairro}
              onChange={(event) => setBairro(event.target.value)}
              required // não eixar ficar em branco
              type="text"
              maxLength={50} />
          </div>
          <div>
            <label>Numero: </label>
            <input
              value={numero}
              onChange={(event) => setNumero(event.target.value)}
              required // não eixar ficar em branco
              type="text"
              maxLength={10} />
          </div>
          <div>
            <label>tipo: </label>
            <select
              value={tipo}
              onChange={(event) => setTipo(event.target.value)}>
              <option>Selecione</option>
              <option value="Pessoal">Pessoal</option>
              <option value="Profissional">Profissional</option>
            </select>
          </div>
          <div>
            <label>Logradouro: </label>
            <input
              value={logradouro}
              onChange={(event) => setLogradouro(event.target.value)}
              required // não eixar ficar em branco
              type="text"
              maxLength={100} />
          </div>
          <div>
            <label>Telefone: </label>
            <input
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
              required // não eixar ficar em branco
            // type="number" 
            />

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