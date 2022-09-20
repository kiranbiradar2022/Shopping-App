import { Alert } from "@mui/material";
import React from "react";

export default function Error({ error }) {
  return (
    <div>
      <Alert variant="filled" severity="error">
        {error}
      </Alert>
    </div>
  );
}
