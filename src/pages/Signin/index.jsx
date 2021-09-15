import { useState } from "react";
import { Link } from "react-router-dom";
import { members } from "../../data/members";
import { useHistory } from "react-router";
import "./index.css";

const Signin = () => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [member, setMember] = useState({
    name: "",
    type: "",
    id: (Number(members[members.length - 1].id) + 1).toString(),
  });
  const addMember = () => {
    if (
      member.type.toLowerCase() === "pf" ||
      member.type.toLowerCase() === "pj"
    ) {
      members.push(member);
      history.push("/");
    } else {
      setError(true);
    }
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
      {error && <span>Tipo errado, informe se é pf ou pj</span>}
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Signin;
