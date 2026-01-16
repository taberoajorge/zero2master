import React from "react";
import {
  Button,
  Container,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import {Box} from "@mui/system";

function NoteAppBar() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h6">
        28 DE MARZO DE 2020
      </Typography>
      <div>
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton>
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip describeChild title="Does not add if it already exists.">
          <Button>Add</Button>
        </Tooltip>
      </div>
    </Container>
  );
}

export default NoteAppBar;
