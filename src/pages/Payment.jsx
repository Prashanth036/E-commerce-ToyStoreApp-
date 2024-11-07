import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cancelCart } from "../reduxStore/reducers/productReducer";

const MockPaymentPage = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      try {
        const response = await fetch("http://localhost:8080/mock_payment");
        const data = await response.json();
        setPaymentStatus(data);
        dispatch(cancelCart());

      } catch (error) {
        setPaymentStatus({ status: false, message: "Payment API call failed!" });
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentStatus();
  }, []);

  const handleRetry = () => {
    navigate("/cart");
  };

  const handleGoToHomepage = () => {
    dispatch(cancelCart());
    navigate("/homepage");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-lg w-full bg-white shadow-lg p-8 rounded-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Payment {paymentStatus.status ? "Success" : "Failure"}
        </h1>

        <div className="text-center">
          {paymentStatus.status ? (
            <div className="text-green-600">
              <p className="text-xl mb-4">Your payment was successful!</p>
              <p className="text-lg">{paymentStatus.message}</p>
            </div>
          ) : (
            <div className="text-red-600">
              <p className="text-xl mb-4">Oops! Something went wrong.</p>
              <p className="text-lg">{paymentStatus.message}</p>
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            className={`py-2 px-6 rounded-md font-semibold ${
              paymentStatus.status ? "bg-green-600 text-white" : "bg-red-600 text-white"
            }`}
            onClick={paymentStatus.status ? handleGoToHomepage : handleRetry}
          >
            {paymentStatus.status ? "Go to Homepage" : "Retry Payment"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MockPaymentPage;
