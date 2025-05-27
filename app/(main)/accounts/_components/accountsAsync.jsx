"use client";

import { Suspense } from "react";
import { BarLoader } from "react-spinners";
import AccountsChart from "./accountsChart";
import TransactionsTable from "./table";

export default function AccountsAsync({ transactions }) {
  return (
    <>
      <div className="p-10">
        <Suspense fallback={<BarLoader color="#9333ea" />}>
          <AccountsChart transactions={transactions} />
        </Suspense>
      </div>
      <div className="p-10">
        <Suspense fallback={<BarLoader color="#9333ea" />}>
          <TransactionsTable transactions={transactions} />
        </Suspense>
      </div>
    </>
  );
}
