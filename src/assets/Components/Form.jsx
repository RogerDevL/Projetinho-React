import { useState } from "react";
import "./form.css";

// Funcao que retorna um arquivo JSX, no caso, o form
const form = () =>{

    // estado inicial do formulario, com seus 3 campos de sua escolha
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

    // Funçao para lidar com o formulario, como validacao, listar no console e 
    // limpar o formulario apos preencher os campos.
    const handleSubmit = (event) => {
        if(!formState.nome || !formState.email || !formState.plano) {
            alert("Preencha todos os campos!")
            return;
        }
        event.preventDefault()
        console.log(formState.nome, formState.email, formState.plano)

        // limpar o formulario
        setFormState({...initilForm})
       
        
    }

    // funcao para retornar o formulario
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