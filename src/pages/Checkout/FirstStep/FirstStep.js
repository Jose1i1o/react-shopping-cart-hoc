import React from "react";
import SummaryTotal from "../../../components/OrderSummary";
import AccountForm from "../../../components/Forms/AccountForm";
import withLayout from "../../../hoc/withLayout";

function FirstStep() {
  return (
    <div className="row">
      <AccountForm />
      <SummaryTotal className="col col-4" />
    </div>
  );
}

export default withLayout(FirstStep);
