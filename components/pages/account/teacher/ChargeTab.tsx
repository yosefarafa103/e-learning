import { Button } from "@/components/ui/button";
import React from "react";

const ChargeTab = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold text-primary mb-4">My Charge</h2>
      <div className="bg-background rounded-2xl shadow-sm p-6 border">
        <p className="text-primary">Current Balance: $120.50</p>
        <Button variant="green" className="mt-4">
          Add Funds
        </Button>
      </div>
    </>
  );
};

export default ChargeTab;
