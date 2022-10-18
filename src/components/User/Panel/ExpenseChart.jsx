import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { MComponents } from "../../MUIExporter";
import withAction from "../../withAction";
import { expenseFormatter } from "../../Utilites/expenseFormatter";

const ExpenseChart = (props) => {
  const [expenseData, setExpensedata] = useState();
  const { cookies } = props;
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/orders", {
        headers: {
          authorization: cookies,
        },
      })
      .then((response) => {
        if (response.data.length != 0)
          setExpensedata(expenseFormatter(response.data));
      });
  }, []);
  return (
    <>
      {expenseData && (
        <MComponents.Box
          sx={{ background: "white", borderRadius: 2, my: 2, py: 2 }}
        >
          <BarChart width={730} height={250} data={expenseData}>
            <CartesianGrid strokeDasharray="2" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="expense" fill="#272343" />
          </BarChart>
        </MComponents.Box>
      )}
    </>
  );
};

export default withAction(ExpenseChart);
