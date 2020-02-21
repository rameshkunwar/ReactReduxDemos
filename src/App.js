import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "./redux/actions";
import logo from "./logo.svg";
import "./App.css";
import MyTextArea from "./TextAreaComponent";
import { CheckboxOperation } from "./Checkboxes";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const currentUser = useSelector((state) => state.currentUser);

  const dispatch = useDispatch();

  const user = { id: 123, name: "t-rox" };

  useEffect(() => {
    dispatch(allActions.userActions.setUser(user));
    dispatch(allActions.counterActions.increment());
    dispatch(allActions.counterActions.decrement());
  }, []);

  return (
    <div className='App'>
      <div className='workspace-container'>
        {currentUser.loggedIn ? (
          <React.Fragment>
            <h1>Welcome {currentUser.user.name}</h1>
            <button onClick={() => dispatch(allActions.userActions.logOut())}>
              Logout
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h1>Login</h1>
            <button
              onClick={() => dispatch(allActions.userActions.setUser(user))}
            >
              Log in a t-rex
            </button>
          </React.Fragment>
        )}

        <h1>Counter = {counter}</h1>

        <button onClick={() => dispatch(allActions.counterActions.increment())}>
          Increase
        </button>
        <button onClick={() => dispatch(allActions.counterActions.decrement())}>
          Decrease
        </button>

        {/* <h1>My workspace</h1>
        <div className='checkboxes-operation'>
          <CheckboxOperation />
        </div> */}
      </div>
      <div className='m-3'>
        <MyTextArea />
      </div>
    </div>
  );
};

export default App;
