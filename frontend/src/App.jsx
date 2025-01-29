import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("/").then((res) => setMessage(res.data));
  }, []);

  return <h1>{message}</h1>;
};

export default App;
