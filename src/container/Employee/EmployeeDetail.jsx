import React, { Component, Fragment } from "react";
import TableDetail from "../../component/Common/TableDetail";
import ButtonBack from "../../component/Common/ButtonBack";
import * as API from "../../services"

class EmployeeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: {
        id: "ID",
        first_name: "Nama Depan",
        last_name: "Nama Belakang",
        email: "E-Mail",
      },
      item: {},
      isLoading: false,
    };
  }

  componentDidMount = () => {
    API.getDetailEmployee(this.props.match.params.id)
      .then(
        (resp) => {
          this.setState({
            item: resp,
          });
        },
        (err) => {
          console.log(err);
        }
      );
  };

  render() {
    if (this.state.item.length === 0) {
      return <h3>Data kosong</h3>;
    }

    return (
      <Fragment>
        <ButtonBack url_to="/employee" />
        <TableDetail
          title="Detail Employee"
          value={this.state.item}
          label={this.state.label}
        />
      </Fragment>
    );
  }
}

export default EmployeeDetail;
