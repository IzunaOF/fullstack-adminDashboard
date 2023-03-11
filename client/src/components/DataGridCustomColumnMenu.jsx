import React from "react";
import {
  GridColumnMenuContainer,
} from "@mui/x-data-grid";

const DataGridCustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;
  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
    </GridColumnMenuContainer>
  );
};

export default DataGridCustomColumnMenu;
