import { useState } from "react";
import "./form.css";
const form = () =>{

    // estado inicial do formulario
    const initilForm = {
        nome: "",
        email:"",
        plano:"",
    }

    // Estado do formulario
    const [formState, setFormState] = useState(initilForm);

    //Funcao para lidar com alteracao dos campos de entrada

    const handleInput = (event) => {

        // obter o valor e o nome do campo de entrada
        const target = event.currentTarget;

        // extrair o valor e o nome do campo de entrada
        const {value, name, email, plano} = target;

        // atualizar o estado do formulario com os novos valores
        setFormState({...formState, [name]: value, [email]: value, [plano]: value})
    }

    // Funçao para lidar com a submissao do formulario

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formState.nome, formState.email, formState.plano)

        // limpar o formulario
        setFormState({...initilForm})
       
        
    }

    // Retorna o formulario
    return(
        <div className="container">
             <div className="containerForm">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" value={formState.nome} onChange={handleInput} />
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" value={formState.email} onChange={handleInput} />
                        <label htmlFor="plano">Plano:</label>
                        <input type="text" id="plano" name="plano" value={formState.plano} onChange={handleInput} />
                    </div>
                    <div className="form-control">
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>

        </div>
       
    );
};


export default form;