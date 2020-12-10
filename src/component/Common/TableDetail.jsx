import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@material-ui/core";

const Row = (r) => {
  return (
    <TableRow>
      <TableCell>{r.label}</TableCell>
      <TableCell>{r.value}</TableCell>
    </TableRow>
  );
};

const TableDetail = (props) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {props.title}
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {Object.keys(props.value).map(index => {
              return (typeof props.label[index] != 'undefined' ? 
                <Row
                  key={index}
                  label={props.label[index]}
                  value={props.value[index]}
                />
               : null);
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableDetail;
