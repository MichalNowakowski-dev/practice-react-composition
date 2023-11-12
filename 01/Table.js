import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

class Table extends React.Component {
  render() {
    const { data } = this.props;
    const total = [...data].map((el) => el.price * el.quantity);

    return (
      <table>
        <TableHeader />
        <TableBody data={data} />
        <TableFooter total={total} />
      </table>
    );
  }
}

export default Table;
