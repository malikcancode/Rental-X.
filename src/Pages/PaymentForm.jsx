import { useState } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackButton from "./BackButton";

const stripePromise = loadStripe(
  "pk_test_51Pjyqx017mOMuVqAmnt09ElcP2leZpkoSuC2YO6TPjpZpEDaRWK2ZrnOEoQCzylzJvc15hwGJYw0TOVFDlNfIes700jym27QOd"
);

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const carRentPrice = new URLSearchParams(location.search).get("rentPrice");
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      toast.error("Payment failed. Please try again.");
    } else {
      toast.success("Payment successful ! Car is on the way ");
      setIsPaymentSuccessful(true);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="backbtn ml-5">
        <BackButton />
      </div>
      <div className="max-w-2xl mt-10 sm:mx-auto ml-10 mr-10 sm:p-24 p-8 bg-white rounded-lg shadow-2xl">
        <ToastContainer />
        <h2 className="text-2xl font-bold mb-4">Payment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <CardElement
              className="p-2 border border-gray-300 rounded"
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
          <div className="mb-4">
            <p className="text-lg">Total Amount: {carRentPrice}</p>
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-lg ${
              isPaymentSuccessful ? "bg-gray-400" : "bg-blue-500"
            } text-white`}
            disabled={!stripe || isPaymentSuccessful}
          >
            {isPaymentSuccessful ? "Payment Successful" : "Pay Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

const StripePayment = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default StripePayment;
