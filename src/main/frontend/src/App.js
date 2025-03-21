import { useEffect, useState } from "react"
import axios from "axios"

export default function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    async function getUser() {
      const response = await axios.get(`/user`);
      const data = response.data;

      setUsers(data);
    }

    getUser();
  }, []);

  return (
      <div>
        {
          users ? users.map((user) =>
              <div key={user.user_no}>
                <h3>{user.user_id} {user.user_pwd}</h3>
                <p>{user.introduce}</p>
              </div>
          ) : null
        }
      </div>
  )
}