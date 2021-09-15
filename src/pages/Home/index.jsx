import { Link } from "react-router-dom";
import { members } from "../../data/members";
import "./index.css";

const Home = () => {
  return (
    <div className="container">
      {members.map((member) =>
        member.type === "pj" ? (
          <Link key={member.id} to={`/company/${member.id}`}>
            {member.name}
          </Link>
        ) : (
          <Link key={member.id} to={`/customer/${member.id}`}>
            {member.name}
          </Link>
        )
      )}
      <Link to="/signin">Sign In</Link>
    </div>
  );
};

export default Home;
