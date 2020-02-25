import React, { Component } from "react";
import Cars from "./DataSeed";
import MyTextArea from "./TextAreaComponent";
import RestDataSource from "./DataSource/RestDataSource";

class DropDownWithSelect extends Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.dataSource = new RestDataSource(
      "https://the-vehicles-api.herokuapp.com/brands/"
    );

    this.state = {
      isDropDownOpen: false,
      idsOfItemClicked: [],
      isTextAreaOpen: false,
      valueForTextArea: "this is sample value",
      carTypes: []
    };
  }

  // shouldComponentUpdate() {}
  componentDidMount() {
    this.dataSource.GetData((data) => this.setState({ carTypes: data }));
  }

  toggleDropdown = (evt) => {
    this.setState({
      isDropDownOpen: !this.state.isDropDownOpen
    });
  };

  toggleItemClicked = (id, name) => {
    this.setState((state) => {
      const idsOfItemClicked = state.idsOfItemClicked.includes(id)
        ? state.idsOfItemClicked.filter((x) => x !== id)
        : [...state.idsOfItemClicked, id];

      return {
        idsOfItemClicked,
        isTextAreaOpen: !this.state.isTextAreaOpen,
        valueForTextArea: name
      };
    });
  };

  render() {
    return (
      <div className='dropdown'>
        <button
          onClick={this.toggleDropdown}
          className='btn btn-secondary dropdown-toggle'
          type='button'
          id='dropdownMenuButton'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          Dropdown button
        </button>
        {this.state.isDropDownOpen && (
          <div
            className='dropdown-menu show'
            aria-labelledby='dropdownMenuButton'
          >
            {this.state.carTypes
              .filter((x, index) => index < 6)
              .map((x) => {
                return (
                  <div
                    key={x.id}
                    onClick={() => this.toggleItemClicked(x.id, x.brand)}
                    className='dropdown-item d-inline-flex justify-content-between'
                  >
                    <span className='d-flex'> {x.brand} </span>
                    <span className='d-flex align-self-center'>
                      {this.state.idsOfItemClicked.includes(x.id) && (
                        <i className='fa fa-times' aria-hidden='true' />
                      )}
                    </span>
                  </div>
                );
              })}
            {this.state.isTextAreaOpen && (
              <MyTextArea textAreaValue={this.state.valueForTextArea} />
            )}
          </div>
        )}
      </div>
    );
  }
}
export default DropDownWithSelect;
