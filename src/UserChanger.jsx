import React, { useContext } from "react";
import { UserContext } from "./App";

function UserChanger() {
  const { userName, setUserName } = useContext(UserContext);

  return (
    <>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
      <div>UserChanger JSX: username = {userName}</div>
    </>
  );
}

export default UserChanger;
