import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { url } from "../backendurl";

const Main = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {

    axios.get(`${url}/`, { withCredentials: true }).then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
          console.log(res.data.name);
          navigate("/main");
        } else {
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .catch((err) => {
        console.error("Error during login:", err);
        alert("An error occurred during login.");
      });
  }, [navigate]);

  const handleDelete = () => {
    axios
      .get(`${url}/logout`)
      .then((res) => {
        window.location.reload(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {auth ? (
        <>
          <Box
            display="flex"
            gap={"10px"}
            alignItems="center"
            justifyContent="center"
            height="100vh"
          >
            <Button variant="contained">You are authorized, {name}!</Button>
            <Button
              type="submit"
              variant="contained"
              onClick={handleDelete}
              color="secondary"
            >
              Sign Out
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Box
            display="flex"
            gap={"10px"}
            alignItems="center"
            justifyContent="center"
            height="100vh"
          >
            <Button variant="contained">{message}</Button>
            <Button
              type="submit"
              onClick={() => {
                navigate("/");
              }}
              variant="contained"
              color="secondary"
            >
              Go Back
            </Button>
          </Box>
        </>
      )}
    </>
  );
};

export default Main;
