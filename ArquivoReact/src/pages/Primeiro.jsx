import LinkGenerico from "../componentes/LinkGenerico";
import LinkSegundo from "../componentes/LinkSegundo";

const Primeiro = () => {
 return (<div>
            <h5>mini título</h5>
            <p>Meu texto</p>
            <LinkSegundo />
            <LinkGenerico
                texto = "Link Generico"
                endereco = "segundo"
             />
        </div>);
};

export default Primeiro;