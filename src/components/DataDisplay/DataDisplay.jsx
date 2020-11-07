import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";

import styles from "./DataDisplay.module.css";

const columns = [
  { fileld: "id", headerName: "ID", width: 50 },
  { field: "effective", headerName: "Effective", width: 160 },
  { field: "posting", headerName: "Posting", width: 160 },
  { field: "card_number", headerName: "Card Number", width: 160 },
  { field: "description", headerName: "Description", width: 160 },
  { field: "amount", headerName: "Amount", width: 160 },
  { field: "normal_point", headerName: "Normal Point", width: 160 },
  { field: "extra_point", headerName: "Extra Point", width: 160 },
  {
    field: "campaign_eligibility",
    headerName: "Campaign Eligibility",
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    effective: "08/10/20",
    posting: "08/10/20",
    card_number: "4742 00005 4384 3025",
    description: "Dummy Store for..",
    amount: 2500.0,
    normal_point: 125,
    extra_point: 625,
    campaign_eligibility: "Yes",
  },
  {
    id: 2,
    effective: "08/10/20",
    posting: "08/10/20",
    card_number: "3741 01105 2384 0455",
    description: "Dummy Store for..",
    amount: 1500.0,
    normal_point: 325,
    extra_point: 325,
    campaign_eligibility: "Yes",
  },
  {
    id: 3,
    effective: "08/10/20",
    posting: "08/10/20",
    card_number: "2743 22005 6584 1075",
    description: "Dummy Store for..",
    amount: 4500.0,
    normal_point: 515,
    extra_point: 235,
    campaign_eligibility: "Yes",
  },
  {
    id: 4,
    effective: "08/10/20",
    posting: "08/10/20",
    card_number: "1744 03005 3584 2345",
    description: "Dummy Store for..",
    amount: 6500.0,
    normal_point: 25,
    extra_point: 145,
    campaign_eligibility: "Yes",
  },
  {
    id: 5,
    effective: "08/10/20",
    posting: "08/10/20",
    card_number: "0746 45305 1484 2145",
    description: "Dummy Store for..",
    amount: 2500.0,
    normal_point: 325,
    extra_point: 251,
    campaign_eligibility: "Yes",
  },
  {
    id: 6,
    effective: "08/10/20",
    posting: "08/10/20",
    card_number: "9747 24505 6184 5425",
    description: "Dummy Store for..",
    amount: 1500.0,
    normal_point: 435,
    extra_point: 654,
    campaign_eligibility: "Yes",
  },
];

export default function DataDisplay() {
  const [normal, setNormal] = useState(0);
  const [extra, setExtra] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleSelected = (data) => {
    let newNormal = 0,
      newExtra = 0,
      newAmount = 0;

    if (data.rows === []) {
      setNormal(0);
      setExtra(0);
      setAmount(0);
      return;
    }

    data.rows.map((obj) => {
      newNormal += obj.normal_point;
      newExtra += obj.extra_point;
      newAmount += obj.amount;
      return 0;
    });

    setNormal(newNormal);
    setExtra(newExtra);
    setAmount(newAmount);
  };

  return (
    <>
      <div className={styles.table}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={6}
          onSelectionChange={(newSelection) => {
            handleSelected(newSelection);
          }}
          checkboxSelection
        />
      </div>

      <div className={styles.total}>
        <p>
          Total Normal Points :
          <span style={{ fontWeight: "bold" }}>{normal}</span>
        </p>
        <p>
          Total Extra Points :
          <span style={{ fontWeight: "bold" }}>{extra}</span>
        </p>
        <p>
          Total Amount : <span style={{ fontWeight: "bold" }}>{amount} B</span>
        </p>
      </div>
    </>
  );
}
