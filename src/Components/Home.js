import { AppBar, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <AppBar color="secondary">
        <Box display="flex" justifyContent="center" gap="10px">
          <Button color="primary">
              <Link to="/orders">orders</Link>
          </Button>
          <Button color="primary">AAAA</Button>
          <Button color="primary">AAAA</Button>
        </Box>
      </AppBar>
    </div>
  );
}
