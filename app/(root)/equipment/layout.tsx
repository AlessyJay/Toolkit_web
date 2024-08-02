"use client";

import React from "react";
import MerchantInfoSummary from "@/components/merchants/MerchantInfoSummary";
import MerchantMainTabs from "@/components/merchants/MerchantMainTabs";
import EquipmentMainTabs from "@/components/equipments/EquipmentMainTabs";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
        <div className="px-12 w-full max-sm:w-fit">
            <EquipmentMainTabs />
            <div className="h-auto w-auto mb-0 border p-5 border-solid border-gray-300 shadow-md rounded-tr-lg rounded-br-lg rounded-bl-lg">
              {children}
            </div>
            <br/>
        </div>
    </>
  );
};

export default layout;