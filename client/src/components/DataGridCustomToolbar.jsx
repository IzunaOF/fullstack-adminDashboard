import React from "react";
import { Search } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment, useTheme } from "@mui/material";
import {
  GridToolbarColumnsButton,
  GridToolbarExport,
  GridToolbarContainer,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import FlexBetween from "./FlexBetween";

export const DataGridCustomToolbar = ({
  searchInput,
  setSearchInput,
  setSearch,
}) => {
  const iconsColor = 200;
  return (
    <GridToolbarContainer>
      <FlexBetween width={"100%"}>
        <FlexBetween>
          <GridToolbarColumnsButton
            sx={{ color: useTheme().palette.secondary[iconsColor] }}
          />
          <GridToolbarDensitySelector
            sx={{ color: useTheme().palette.secondary[iconsColor] }}
          />
          <GridToolbarExport
            sx={{ color: useTheme().palette.secondary[iconsColor] }}
          />
        </FlexBetween>
        <TextField
          label="Search..."
          sx={{
            mb: "0.5rem",
            width: "15rem",
          }}
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setSearch(searchInput);
                    setSearchInput("");
                  }}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FlexBetween>
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;
