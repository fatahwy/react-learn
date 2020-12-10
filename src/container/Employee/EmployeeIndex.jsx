import React, { Component, Fragment } from "react";
import * as API from "../../services";

import { TableEmployess } from "../../component/Employees";
import { Button, CircularProgress } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

class EmployeeIndex extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      total_page: 1,
      items: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });

    API.getListEmployee()
      .then(
        (resp) => {
          this.setState({
            total_page: resp.length,
            items: resp,
            isLoading: false,
          });
        },
        (err) => {
          console.log(err);
        }
      );
  }

  handleDeleteEmployee = (id) => {
    API.deleteEmployee(id)
      .then(resp => {
        let temp_data = [...this.state.items]

        this.setState({
          items: temp_data.filter(v => v.id !== id),
        })
      }, err => console.log(err))
  };

  render() {
    if (this.state.isLoading) {
      return <CircularProgress />;
    }

    return (
      <Fragment>
        <Button
          style={{ float: "right" }}
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          href="/employee/create"
        >
          Tambah
        </Button>
        <TableEmployess items={this.state.items} onDeleteEmployee={id => this.handleDeleteEmployee(id)} />
      </Fragment>
    );
  }
}

export default EmployeeIndex;
