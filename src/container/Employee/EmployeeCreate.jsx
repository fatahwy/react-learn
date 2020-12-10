import React, { Component, Fragment } from "react";
import * as API from '../../services';

import { FormCreateEmployee } from "../../component/Employees";
import ButtonBack from "../../component/Common/ButtonBack";

class EmployeeCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        id: "",
        first_name: "",
        last_name: "",
        email: "",
      },
    };
  }

  handleChangeFormInput = (e) => {
    let temp_data = { ...this.state.data };
    temp_data[e.name] = e.value;
    temp_data["id"] = new Date().getTime();

    this.setState({
      data: temp_data,
    });
  };

  handleSubmitForm = () => {
    API.addEmployee(this.state.data).then(resp => {
      this.props.history.push(
        `/employee/detail/${resp.data.id}`
      );
    },
      (err) => {
        console.log(err);
      }
    );
  };

  render() {
    return (
      <Fragment>
        <ButtonBack url_to="/employee" />
        <FormCreateEmployee
          data={this.state.data}
          handleChange={this.handleChangeFormInput}
          handleSubmit={this.handleSubmitForm}
        />
      </Fragment>
    );
  }
}

export default EmployeeCreate;
