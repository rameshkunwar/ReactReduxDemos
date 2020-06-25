import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "./redux/actions";
import logo from "./logo.svg";
import "./App.css";
import MyTextArea from "./TextAreaComponent";
import { CheckboxOperation } from "./Checkboxes";
import DropDownWithSelect from "./DropdownWithSelect";
import ProductList from "./shouldComponentUpdatePerformanceDemo/ProductsList";
import faker from "faker";
import DragDrop from "./DragNDrop/DragDrop";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const currentUser = useSelector((state) => state.currentUser);

  const generateRandomList = (length) => {
    const randomList = [];
    for (let i = 0; i < length; i++) {
      randomList.push({
        id: faker.random.uuid(),
        title: faker.company.companyName(),
        url: faker.image.imageUrl(),
        isFavorite: false,
      });
    }
    return randomList;
  };

  // const [products, setProducts] = useState(generateRandomList(600));

  const dispatch = useDispatch();

  const user = { id: 123, name: "t-rox" };

  // const handleProductChange = (changedProduct) => {
  //   let newProducts = products.map((product) => {
  //     if (product.id == changedProduct.id) {
  //       return changedProduct;
  //     }
  //     return product;
  //   });
  // };

  useEffect(() => {
    dispatch(allActions.userActions.setUser(user));
    dispatch(allActions.counterActions.increment());
    dispatch(allActions.counterActions.decrement());
  }, []);

  return (
    <div className='App'>
      <div className='row'>
        <div className='col-sm-12 col-xs-12 col-md-6 col-xl-6'>
          <div className='workspace-container'>
            {currentUser.loggedIn ? (
              <React.Fragment>
                <h1>Welcome {currentUser.user.name}</h1>
                <button
                  onClick={() => dispatch(allActions.userActions.logOut())}
                >
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

            <button
              onClick={() => dispatch(allActions.counterActions.increment())}
            >
              Increase
            </button>
            <button
              onClick={() => dispatch(allActions.counterActions.decrement())}
            >
              Decrease
            </button>

            {/* <h1>My workspace</h1>
        <div className='checkboxes-operation'>
          <CheckboxOperation />
        </div> */}
          </div>
        </div>
        <div className='col-sm-12 col-xs-12 col-md-6 col-xl-6'>
          <div className='m-3 d-flex justify-content-center'>
            <DropDownWithSelect />
            {/* <MyTextArea /> */}
          </div>
          {/* <div className='m-3 d-flex justify-content-center'>
        <ProductList
          products={products}
          onProductChange={handleProductChange}
        />
      </div> */}
        </div>
      </div>
      <div className='row my-5' style={{ borderTop: "2px solid #eaeaea" }}>
        {/* drag and drop row */}
        <div className='col-sm-12 col-xs-12 col-md-6 col-xl-6 my-3'>
          <DragDrop />
        </div>
        <div className='col-sm-12 col-xs-12 col-md-6 col-xl-6 my-3'>
          <h4>tweet embed will come here </h4>
        </div>
      </div>
    </div>
  );
};

export default App;
