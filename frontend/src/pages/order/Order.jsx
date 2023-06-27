import React from "react";
import { Link } from "react-router-dom";
import "./Order.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

function Order() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="order">
      {isLoading ? (
        "Loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>{currentUser.isSeller ? "Gigs" : "Orders"}</h1>
            {currentUser.isSeller && (
              <Link to="/add">
                <button>Add New Gig</button>
              </Link>
            )}
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
              <th>Contact</th>
            </tr>
            {data.map((order) => (
              <tr key={order._id}>
                <td>
                  <img className="image" src={order.img} alt="" />
                </td>
                <td>{order.title}</td>
                <td>{order.price}</td>
                <td>
                  <img className="delete" src="./img/message.png" alt="" />
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}

export default Order;
