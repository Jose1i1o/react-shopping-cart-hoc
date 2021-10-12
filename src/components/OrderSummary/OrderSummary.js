import React, { useContext } from "react";
import SummaryItem from "../SummaryItem";

import { ContextState } from "../../context/contextState";

function getTotal(cart) {
  return cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
}

function SummaryTotal({ ...props }) {
  const value = useContext(ContextState);
  const { cartItems } = value;

  return (
    <aside {...props}>
      <div className="row flex-column">
        <div className="col shopping__cart__header">
          <h2 className="h3 mt-2">Order summary</h2>
          <hr className="mb-3" />
        </div>
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <SummaryItem
              key={item.id}
              title={item.title}
              price={item.price}
              img={item.img}
              quantity={item.quantity}
            />
          ))}
        <div className="col shopping__cart__footer">
          <div className="row row-cols-1 flex-column">
            <div className="col">
              <div className="d-flex justify-content-between">
                <h4 className="h5">Total</h4>
                <h4>
                  <strong>{getTotal(cartItems)}€</strong>
                </h4>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SummaryTotal;
