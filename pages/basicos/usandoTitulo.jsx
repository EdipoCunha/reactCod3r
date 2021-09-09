import Titulo from '../../components/Titulo'


export default function usandoTitulo() {
  return (
    <div>
      <Titulo 
      principal = "Página de cadastro"
      secundario = "Incluir, alterar e excluir coisas!"     
      />
      <Titulo 
      principal = "Página de login"
      secundario = "Informe seu email e senha"
      pequeno = {true}     
      />
      </div>
  )
}