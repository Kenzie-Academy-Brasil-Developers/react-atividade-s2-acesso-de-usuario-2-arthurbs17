import { useState } from "react";
import { Link } from "react-router-dom";
import { members } from "../../data/members";
import "./index.css";

const Signin = () => {
  const [member, setMember] = useState({
    name: "",
    type: "",
    id: (Number(members[members.length - 1].id) + 1).toString(),
  });
  const addMember = () => {
    members.push(member);
  };

  return (
    <div className="container">
      <input
        placeholder="Nome ou Empresa"
        type="text"
        value={member.name}
        onChange={(event) =>
          setMember((prevState) => {
            return { ...prevState, name: event.target.value };
          })
        }
      />
      <input
        placeholder="pj ou pf"
        type="text"
        value={member.type}
        onChange={(event) =>
          setMember((prevState) => {
            return { ...prevState, type: event.target.value };
          })
        }
      />
      <button onClick={() => addMember()}>Sign in</button>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Signin;
