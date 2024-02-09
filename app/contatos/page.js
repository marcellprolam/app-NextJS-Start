import Link from "next/link";
import styles from './contatos.module.css'

async function buscarContatos() {
  const resposta = await fetch("http://localhost:3000/api/contatos")
  return await resposta.json()
}

export default async function Page() {
  const contatos = await buscarContatos()
  return (
    <div className={styles.container}>
      <h1>Contatos</h1>
      <Link href="/contatos/criar">Criar</Link>
      <div className={styles.principal}>
        <table className={styles.contatos}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            {
              contatos.map((contato) =>
                <tr key={contato.id}>
                  <td>{contato.nome}</td>
                  <td>{contato.endereco}</td>
                  <td>{contato.telefone}</td>
                </tr>
              )
            }
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Total contatos: {contatos.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}