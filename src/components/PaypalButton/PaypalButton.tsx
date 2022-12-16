import { useState, useEffect } from 'react';
import { sumTotal } from '@/utilities';
import { useAppSelector } from '@/redux';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

export default function PaypalButton() {

  const products = useAppSelector(state => state.cartProducts)
  const [approved, setApproved] = useState(false);
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const [price, setPrice] = useState(0)

  useEffect(() => {
    setPrice(sumTotal(products))
  }, [products])

  const createOrder = (data: any, actions: any) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Sunflower",
            amount: {
              currency_code: "USD",
              value: price,
            },
          },
        ],
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID: any) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then(function (details: any) {
      const { payer } = details;
      setSuccess(true);
      setApproved(true);
    });
  };

  const onError = (data: any, actions: any) => {
    setErrorMessage("An Error occured with your payment ");
  };

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AQnY7t35rSyTNW3A0LK70uIe26h_NLkV-ZQ0WiUHy95rOLeUB_PhV6fgWPPWIe96cf65ODrzEcuYUxQd",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </PayPalScriptProvider>
  );
}