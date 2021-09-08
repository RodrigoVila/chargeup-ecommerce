import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import AdminTopBar from "@organisms/AdminTopBar";
import AdminSidebar from "@molecules/AdminSidebar";
import AddOrEditProduct from "@molecules/AddOrEditProduct";
import AdminMetrics from "@atoms/AdminMetrics";
import AdminCustomers from "@molecules/AdminCustomers";
import AdminProductList from "@organisms/AdminProductList";
import AdminTransactions from "@molecules/AdminTransactions";

const AdminPage = () => {
  const [selected, setSelected] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const renderComponent = (selectedComponent: any) => {
    const Components = {
      Analytics: <AdminMetrics />,
      Customers: <AdminCustomers />,
      Products: <AdminProductList />,
      Transactions: <AdminTransactions />,
    };

    return Components[selectedComponent] || Components.Analytics;
  };

  return (
    <body className="mt-12 font-sans leading-normal tracking-normal bg-gray-800">
      <AdminTopBar />
      <div className="flex flex-col md:flex-row">
        <AdminSidebar setSelected={setSelected} />
        <div className="flex-1 pb-24 mt-12 bg-gray-100 main-content md:mt-2 md:pb-5">
          <div className="pt-3 bg-gray-800">
            <div className="flex items-center justify-between p-3 mr-6 text-2xl text-white shadow rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800">
              <h3 className="pl-2 font-bold">{selected || "Analytics"}</h3>
              {selected === "Products" && (
                <div className="text-4xl cursor-pointer">+</div>
              )}
            </div>
          </div>
          <>{renderComponent(selected)}</>
          {selected === "Products" && (
            <div className="absolute right-0 items-center mt-4 mr-8 text-4xl text-blue-500 transition duration-500 ease-in-out border border-blue-500 rounded-full cursor-pointer hover:text-white hover:bg-blue-500">
              <BsFillPlusCircleFill onClick={() => {}} />
            </div>
          )}
        </div>
      </div>
    </body>
  );
};

export default AdminPage;