import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import BasicTable from "../Table/BasicTable";
import Tabs from "../Extra/Tabs/Tabs";
import Codes from "../Extra/Codes/Codes";

import styles from "./DataDisplay.module.css";

const data = {
  tabs: [
    {
      tabName: "Tab 1",
      rows: [
        {
          effective: "18/10/20",
          posting: "18/10/20",
          card_number: "3242 4234 2424 3325",
          description: "Tobs Store for..",
          amount: 2500.0,
          normal_point: 125,
          extra_point: 625,
          campaign_eligibility: "Yes",
        },
        {
          effective: "28/10/20",
          posting: "28/10/20",
          card_number: "3331 3205 2284 3325",
          description: "Dummy Store for..",
          amount: 1500.0,
          normal_point: 325,
          extra_point: 325,
          campaign_eligibility: "Yes",
        },
        {
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "2743 22005 6584 1075",
          description: "Dummy Store for..",
          amount: 4500.0,
          normal_point: 515,
          extra_point: 235,
          campaign_eligibility: "Yes",
        },
        // {
        //   effective: "08/10/20",
        //   posting: "08/10/20",
        //   card_number: "1744 03005 3584 2345",
        //   description: "Dummy Store for..",
        //   amount: 6500.0,
        //   normal_point: 25,
        //   extra_point: 145,
        //   campaign_eligibility: "Yes",
        // },
        // {
        //   effective: "08/10/20",
        //   posting: "08/10/20",
        //   card_number: "0746 45305 1484 2145",
        //   description: "Dummy Store for..",
        //   amount: 2500.0,
        //   normal_point: 325,
        //   extra_point: 251,
        //   campaign_eligibility: "Yes",
        // },
        // {
        //   effective: "08/10/20",
        //   posting: "08/10/20",
        //   card_number: "9747 24505 6184 5425",
        //   description: "Dummy Store for..",
        //   amount: 1500.0,
        //   normal_point: 435,
        //   extra_point: 654,
        //   campaign_eligibility: "Yes",
        // },
        // {
        //   effective: "08/10/20",
        //   posting: "08/10/20",
        //   card_number: "4742 00005 4384 3025",
        //   description: "Dummy Store for..",
        //   amount: 2500.0,
        //   normal_point: 125,
        //   extra_point: 625,
        //   campaign_eligibility: "Yes",
        // },
        // {
        //   effective: "08/10/20",
        //   posting: "08/10/20",
        //   card_number: "3741 01105 2384 0455",
        //   description: "Dummy Store for..",
        //   amount: 1500.0,
        //   normal_point: 325,
        //   extra_point: 325,
        //   campaign_eligibility: "Yes",
        // },
        // {
        //   effective: "08/10/20",
        //   posting: "08/10/20",
        //   card_number: "2743 22005 6584 1075",
        //   description: "Dummy Store for..",
        //   amount: 4500.0,
        //   normal_point: 515,
        //   extra_point: 235,
        //   campaign_eligibility: "Yes",
        // },
        // {
        //   effective: "08/10/20",
        //   posting: "08/10/20",
        //   card_number: "1744 03005 3584 2345",
        //   description: "Dummy Store for..",
        //   amount: 6500.0,
        //   normal_point: 25,
        //   extra_point: 145,
        //   campaign_eligibility: "Yes",
        // },
        // {
        //   effective: "08/10/20",
        //   posting: "08/10/20",
        //   card_number: "0746 45305 1484 2145",
        //   description: "Dummy Store for..",
        //   amount: 2500.0,
        //   normal_point: 325,
        //   extra_point: 251,
        //   campaign_eligibility: "Yes",
        // },
        // {
        //   effective: "08/10/20",
        //   posting: "08/10/20",
        //   card_number: "9747 24505 6184 5425",
        //   description: "Dummy Store for..",
        //   amount: 1500.0,
        //   normal_point: 435,
        //   extra_point: 654,
        //   campaign_eligibility: "Yes",
        // },
      ],
    },
    {
      tabName: "Tab 2",
      rows: [
        {
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
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "9747 24505 6184 5425",
          description: "Dummy Store for..",
          amount: 1500.0,
          normal_point: 435,
          extra_point: 654,
          campaign_eligibility: "Yes",
        },
        {
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
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "9747 24505 6184 5425",
          description: "Dummy Store for..",
          amount: 1500.0,
          normal_point: 435,
          extra_point: 654,
          campaign_eligibility: "Yes",
        },
      ],
    },
    {
      tabName: "Tab 3",
      rows: [
        {
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
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "9747 24505 6184 5425",
          description: "Dummy Store for..",
          amount: 1500.0,
          normal_point: 435,
          extra_point: 654,
          campaign_eligibility: "Yes",
        },
        {
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
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "9747 24505 6184 5425",
          description: "Dummy Store for..",
          amount: 1500.0,
          normal_point: 435,
          extra_point: 654,
          campaign_eligibility: "Yes",
        },
      ],
    },
  ],
  codes: [
    { name: "Comm Code", code: "RTY7362" },
    { name: "Comm Code", code: "GAW2442" },
    { name: "Minimum Per Booking", code: "AQW1937" },
    { name: "Prez Code", code: "MWG5378" },
  ],
};

const installmentData = [
  {
    Terms: "3 Months",
    Period: "10/2020 to 01/2021",
    "Interest %": "0.84%",
    "Effective Rate %": "15.0%",
    Amount: "3400.0 B",
    Installment: "1,196.0 B",
  },
  {
    Terms: "4 Months",
    Period: "13/2020 to 11/2021",
    "Interest %": "1.84%",
    "Effective Rate %": "13.0%",
    Amount: "2400.0 B",
    Installment: "2,196.0 B",
  },
  {
    Terms: "6 Months",
    Period: "09/2020 to 12/2021",
    "Interest %": "2.14%",
    "Effective Rate %": "14.0%",
    Amount: "3210.0 B",
    Installment: "2,122.0 B",
  },
  {
    Terms: "12 Months",
    Period: "04/2020 to 05/2021",
    "Interest %": "2.32%",
    "Effective Rate %": "23.0%",
    Amount: "6382.0 B",
    Installment: "3,926.0 B",
  },
];

const useStyles = makeStyles({
  button: {
    margin: "1rem 0",
    textTransform: "none",
  },
});

export default function DataDisplay() {
  const [open, setOpen] = useState(false);
  const [normal, setNormal] = useState(0);
  const [extra, setExtra] = useState(0);
  const [amount, setAmount] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    let newNormal = 0,
      newExtra = 0,
      newAmount = 0;

    if (selectedRows === []) {
      setNormal(0);
      setExtra(0);
      setAmount(0);
      return;
    }

    selectedRows.map((obj) => {
      newNormal += obj.normal_point;
      newExtra += obj.extra_point;
      newAmount += obj.amount;
      return 0;
    });

    setNormal(newNormal);
    setExtra(newExtra);
    setAmount(newAmount);

    if(!selectedRows.length) setOpen(false)
  }, [selectedRows]);

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleSelected = (data) => {
    setSelectedRows(data);
    setOpen(false)
  };

  const handleTabClicked = (value) => {
    setSelectedTab(value);
    setSelectedRows([])
  };

  return (
    <>
      <div className={styles.table}>
        <div className={styles.tabs}>
          {data.tabs.map((tab, key) => {
            return (
              <Tabs
                data={tab}
                number={key}
                handleClicked={handleTabClicked}
                selected={selectedTab === key}
                key={key}
              />
            );
          })}
        </div>

        <div className={styles.codes}>
          {data.codes.map((code, key) => {
            return <Codes name={code.name} code={code.code} key={key} />;
          })}
        </div>

        <BasicTable
          data={data.tabs[selectedTab].rows}
          isRadio={true}
          handleSelected={handleSelected}
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

      {selectedRows.length !== 0 && (
        <div className={styles.installment}>
          <Button className={classes.button} variant="outlined" color="primary" onClick={handleOpen}>
            Show Installment Details
          </Button>
        </div>
      )}

      {
        open && <>
          <BasicTable data={installmentData} isRadio={true} />
          <Button className={classes.button} variant="outlined" color="primary">Submit</Button>
        </>
      }
    </>
  );
}
