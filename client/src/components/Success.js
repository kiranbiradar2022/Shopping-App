import React from "react";
import { Alert } from "@mui/material";
export default function Success({ success }) {
  return (
    <div>
      <Alert variant="filled" severity="success">
        {success}
      </Alert>
    </div>
  );
}
