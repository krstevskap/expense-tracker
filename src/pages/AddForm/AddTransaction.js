import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./addTransaction.css";
import AddTransactionForm from "../../components/AddTransactionForm/AddTransactionForm";

const AddTransaction = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleViewTransactions = () => {
    setModal(!modal);
    navigate("/transactions");
  };

  return (
    <div className="add-transaction-container">
      <Header />
      <div className="add-form-container">
        <div className="form">
          <AddTransactionForm toggleModal={toggleModal} />
        </div>
      </div>
      {modal && (
        <div className="modal-container overlay">
          <div className="modal">
            <p>Transaction added successfully!</p>
            <div className="buttons">
              <button onClick={handleViewTransactions}>
                View transactions
              </button>
              <button onClick={toggleModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTransaction;
