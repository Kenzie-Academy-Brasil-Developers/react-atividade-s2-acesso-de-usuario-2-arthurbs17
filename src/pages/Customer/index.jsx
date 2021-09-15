import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { members } from "../../data/members";

const Customer = () => {
  const idMember = useParams();
  const member = members.find((person) => person.id === idMember.id);
  return (
    <div>
      <h1>Detalhes do Cliente</h1>
      <p>Nome: {member.name}</p>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Customer;
