import React, { useState } from "react";
import AdminClientInvite from "./AdminClientInvite";
import AdminCustomerSearch from "./AdminCustomerSearch";
import AdminCustomerList from "./AdminCustomerList";

const AdminCustomers = () => {
  return (
    <div className="content-center">
      <AdminCustomerSearch />
      <AdminCustomerList />
      <AdminClientInvite />
    </div>
  );
};

export default AdminCustomers;
