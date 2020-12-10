import { Component, Fragment } from "react";
import { FormCreateEmployee } from "../../component/Employees";
import ButtonBack from "../../component/Common/ButtonBack";
import * as API from "../../services"

class EmployeeUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        id: props.match.params.id,
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
    API.updateEmployee(this.state.data.id, this.state.data)
      .then(
        (resp) => {
          this.props.history.push(
            `/employee/detail/${this.state.data.id}`
          );
        },
        (err) => {
          console.log(err);
        }
      );
  };

  componentDidMount = () => {
    API.getDetailEmployee(this.state.data.id)
      .then(resp => {
        this.setState({
          data: resp,
        });
      });
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

export default EmployeeUpdate;
