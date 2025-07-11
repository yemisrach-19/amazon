import React, { useContext, useEffect } from "react";

import Routing from "./Routing";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { Type } from "./Utility/actionType";
import { auth } from "./Utility/fireBase";

const App = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: Type.SET_USER, user: authUser });
      } else {
        dispatch({ type: Type.SET_USER, user: null });
      }
    });
  }, []);
  return (
    <div>
      <Routing />
    </div>
  );
};

export default App;
