import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { url } from "../backendurl";
const Main = () => {
  const navigate = useNavigate();
  const [auth, setauth] = useState(false);
  const [name, setname] = useState("");
  const [message, setMessage] = useState("");
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get(url,  { withCredentials: true })
      .then((res) => {
        if (res.data.Status === "Success") {
          setauth(true);
          setname(res.data.name);
          console.log(res.data.name);
          navigate("/main");
        } else {
          setauth(false);
          setMessage(res.data.Error);
        }
      })
      .catch((err) => {
        console.error("Error during login:", err);
        alert("An error occurred during login.");
      });
  }, []);
  const handleDelete = ()=>{
    axios.get(`${url}/logout`,  { withCredentials: true }).then(res=>{
        window.location.reload(true)
    }).catch(err=>console.log(err))
  }
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
            <Button type="submit" variant="contained" onClick={handleDelete} color="secondary">
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
            <Button type="submit" onClick={()=>{
                navigate("/")
            }} variant="contained" color="secondary">
              Go Back
            </Button>
          </Box>
        </>
      )}
    </>
    // <>
    //     <>
    //       <Box
    //         display="flex"
    //         gap={"10px"}
    //         alignItems="center"
    //         justifyContent="center"
    //         height="100vh"
    //       >
    //         <Button variant="contained">You are Authenticated!</Button>
    //         <Button type="submit" onClick={()=>{
    //             navigate("/")
    //         }} variant="contained" color="secondary">
    //           Go Back
    //         </Button>
    //       </Box>
    //     </>
    // </>
  );
};

export default Main;
