import React, { useEffect, useState } from "react";

const Index = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const FinalData = await response.json();
    setUsers(FinalData);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      {users.map((user) => {
        return (
          <div className="card_item" key={user.id}>
            <div className="card_inner">
              <div className="userName">{user.name}</div>
              <div className="userUrl">{user.username}</div>
              <div className="userUrl">
                <b>Email:</b>
                {user.email}
              </div>
              <div className="userUrl">
                <b>Widsite:</b>
                {user.wibsite}
              </div>
              <div className="userUrl">
                <b>Address:</b>
                {user.address.street}
              </div>
              <div className="userUrl">
                <b>Phone:</b>
                {user.phone}
              </div>
              <div className="btns">
                <button className="seeMore">Todos</button>
                <button className="seeMore">Posts</button>
                <button className="seeMore">Galarey</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
