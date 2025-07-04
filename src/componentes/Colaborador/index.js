import './Colaborador.css'

const Colaborador = ({ nome, imagem, cargo, corDeFundo, }) => {
    return (<div className='colaborador'>
        <div className='cabecalho'>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape' style={{ backgroundColor: corDeFundo }}>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>)
}

export default Colaborador