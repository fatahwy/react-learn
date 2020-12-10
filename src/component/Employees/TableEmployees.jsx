import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Button, Typography } from "@material-ui/core";
import { Fragment, useState } from "react";
import DialogConfirm from "../Common/DialogConfirm";

const TableEmployess = (props) => {
  let [flag, setFlag] = useState(false)
  let [idemp, setIdemp] = useState(null)

  const onClickBtnDelete = (id_employee) => {
    setIdemp(id_employee)
    setFlag(true)
  }

  const onClickDialogChoice = (flag) => {
    if(flag){
      props.onDeleteEmployee(idemp)
    }
    setFlag(false);
  }

  return (
    <Fragment>
      {flag ? <DialogConfirm flag={(flag) => onClickDialogChoice(flag)}/> : null}

      <Typography variant="h4" gutterBottom>
        List Employee
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nama Depan</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.items.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3}>Data tidak ditemukan</TableCell>
              </TableRow>
            ) : (
                props.items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.first_name}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<SearchIcon />}
                        href={`/employee/detail/${item.id}`}
                      >
                      </Button>
                        &nbsp;
                        <Button
                        variant="contained"
                        color="primary"
                        startIcon={<EditIcon />}
                        href={`/employee/update/${item.id}`}
                      >
                      </Button>
                        &nbsp;
                        <Button onClick={() => onClickBtnDelete(item.id)}
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                      >
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment >
  );
};

export default TableEmployess;
