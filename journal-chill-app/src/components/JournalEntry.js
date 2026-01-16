import {Card, Grid, Typography} from "@mui/material";
import React from "react";

function JournalEntry() {
  return (
    <Card
      container
      sx={{
        display: "grid",
        border: "1px solid #ccc",
        placeItems: "center",
        gridTemplateColumns: "1fr 1fr 1fr",
        height: "90px",
        width: "100%",
      }}
    >
      <Grid
        sx={{
          width: "100%",
          maxWidth: "100%",
          height: "100%",
        }}
        item
        xs={3}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
          }}
          src="https://picsum.photos/200/300"
          alt=""
        />
      </Grid>
      <Grid
        sx={{
          placeItems: "center",
          overflow: "hidden",
        }}
        item
        xs={9}
      >
        <Typography variant="h6">Un nuevo dia</Typography>
        <Typography paragraph>
          Esto es un paragraph. Esto es un paragraph. Esto es un paragraph.
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography paragraph >Monday <br/> 28 </Typography>
      </Grid>
    </Card>
  );
}

export default JournalEntry;
