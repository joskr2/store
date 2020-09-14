import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { useStateValue } from "../../StateProvider/Provider";
import Order from "../Order/Order";
import "./Orders.scss";

const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snpahot) =>
          setOrders(
            snpahot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
        <h1 className="orders__title">Tus ordenes</h1>
      <div className="orders__order">
        {
            orders?.map((order) => (
                 <Order order={order}/>
            ))
        }
      </div>
    </div>
  );
};

export default Orders;
