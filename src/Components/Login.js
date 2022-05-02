import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { createTheme } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import BASE_URL from "../Utils/Constants";
import { useNavigate } from "react-router-dom";

const headers = {
  "Access-Control-Allow-Origin": "*",
};
export default function LoginRectangle() {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitLogin = () => {
    axios
      .post(
        `${BASE_URL}/login`,
        { username: user, password: password },
        // { headers }
      )
      .then((response) => {
        localStorage.setItem("jwt-token", `Bearer ${response.data.access_token}`)
        navigate("/home")
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error);
        alert(error);
      });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <div className="flex flex-col items-center w-96 h-96 bg-[#f5f5f5] rounded-2xl">
        <h1 className="justify-between">Log into your account</h1>
        <TextField
          className="mt-2"
          type="text"
          label="Username"
          color="primary"
          onInput={(e) => setUser(e.target.value)}
        />
        <TextField
          className="mt-2"
          type="text"
          label="Password"
          color="primary"
          inputProps={{
            style: {
              border: "solid",
              borderColor: "#f5f5f5",
            },
          }}
          onInput={(e) => setPassword(e.target.value)}
        />
        <Button
          className="mt-2"
          variant="contained"
          color="primary"
          onClick={() => submitLogin()}
        >
          Login
        </Button>
      </div>
    </Box>
  );
}
