import styles from './contatos.module.css'
import Link from "next/link";

const baseUrl =
  (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000");

async function buscarContatos() {
  try {
    const resposta = await fetch(`${baseUrl}/api/contatos`, { cache: 'no-store' });
    // const resposta = await fetch("http://localhost:3000/api/contatos")
    return await resposta.json();
  } catch (erro) {
    console.error(erro);
    return [];
  }
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
              <th>Cidade/UF</th>
              <th>Bairro</th>
              <th>Numero</th>
              <th>Tipo</th>
              <th>Endereço</th>
              <th>Telefone</th>
              <th>Data/Hora</th>
              <th>🛠</th>
            </tr>
          </thead>
          <tbody>
            {
              contatos.map((contato) =>
                <tr key={contato.id}>
                  <td>{contato.nome}</td>
                  <td>{contato.cidade}<br />{contato.estado}</td>
                  <td>{contato.bairro}</td>
                  <td>{contato.numero}</td>
                  <td>{contato.tipo}</td>
                  <td>{contato.endereco}</td>
                  <td>{contato.telefone}</td>
                  <td>{contato.datas}<br />{contato.horas}</td>
                  <td>
                    <Link href={`/contatos/${contato.id}/editar`}>
                      ✍
                    </Link> | {" "}
                    <Link href={`/contatos/${contato.id}/excluir`}>
                      ❌
                    </Link>
                  </td>
                </tr>
              )
            }
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="9">Total contatos: {contatos.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}