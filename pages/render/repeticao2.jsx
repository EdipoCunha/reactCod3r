import listaProdutos from "../../Data/listaProdutos"
import Produto from "../../model/produto"

export default function repeticao2() {


      const comBorda = {
        border: "1px solid #000",
      }

  function renderizarLinhas() {
    return listaProdutos.map((produto => {
      return (
        <tr key={produto.id}>
          <td style={comBorda}>{produto.id}</td>
          <td style={comBorda}>{produto.nome}</td>
          <td style={comBorda}>{produto.nome}</td>
        </tr>
      )
    }))
  
    } return (
    <div>
      <table style={{}}>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {renderizarLinhas()}
        </tbody>
      </table>
    </div>
  )
}