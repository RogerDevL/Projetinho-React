import "./card.css";

// Funcao que retorna um arquivo JSX, no caso, o Card
const Card = () => {

    // Listando os card, de acordo com os parametros
  const cardPlano = [
    {
      titulo: "Plano Vermelho",
      description: "Direito a um Dependente",
      preco:"R$40,00",
      link: "#",
    },
    {
      titulo: "Plano Branco",
      description: "Direito a 2 convidados e dependente",
      preco:"R$80,00",
      link: "#",
    },
    {
      titulo: "Plano Preto ",
      description: "Direito a 4 convidados e dependente",
      preco:"R$120,00",
      link: "#",
    },
    {
      titulo: "Plano Tricolor",
      description: "Direito a 6 convidados e dependente",
      preco:"R$180,00",
      link: "#",
    },
  ];

  // Funcao para retornar os cards de acordo com a posicao e os parametros que esta acima
  return (
    <div className="card-container">

      {cardPlano.map((card, index) => {
        return (
          <div className="card" key={index}>
            <h2>{card.titulo}</h2>
            <p>{card.description}</p>
            <p>{card.preco}</p>
            <a href={card.link}>Veja mais</a>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
