import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { members } from "../../data/members";

const Company = () => {
  const idMember = useParams();
  const member = members.find((person) => person.id === idMember.id);
  return (
    <div>
      <h1>Detalhes da Empresa</h1>
      <p>Nome da Empresa: {member.name}</p>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Company;
