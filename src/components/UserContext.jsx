import { createContext,} from "react";

export default function UserContest(){

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    navigate("/home");
  };
  useEffect(() => {
    const islogedin = localStorage.getItem("username");
    if (islogedin) {
      navigate("/home");
    }
  });

return{

}
}