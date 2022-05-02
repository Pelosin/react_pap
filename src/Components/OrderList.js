import { Box, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BASE_URL from "../Utils/Constants";

const jwtToken = localStorage.getItem("jwt-token");

console.log(jwtToken);

const headers = {
  Authorization: jwtToken,
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
  "Access-Control-Allow-Headers":  "Content-Type, Authorization, X-Requested-With"
};

export default function OrderList() {
  const [orderList, setOrderList] = useState([]);

  const orderListFunction = async () => {
    try {
      const result = await axios.get(`${BASE_URL}/order/all`, { headers: headers });
      setOrderList(result.data)
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    orderListFunction()
  }, [])

  
  //   axios
  //     .get(`${BASE_URL}/order/all`, { headers: {Authorization : jwtToken } })
  //     .then((response) => {
  //       console.log(response);
  //       // setOrderList(response.data.)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <ul>
        {lineOrderList.map(lineOrder => <li>{lineOrder.id}</li>)}
      </ul>
      <ul>
        {/* {orderList.map(order => <li>{}</li>} */}
      </ul>
    </Box>
  );
}
