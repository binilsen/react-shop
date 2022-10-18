export const expenseFormatter = (data) => {
  const expense = [
    { name: "Jan", expense: 0 },
    { name: "Feb", expense: 0 },
    { name: "Mar", expense: 0 },
    { name: "Apr", expense: 0 },
    { name: "May", expense: 0 },
    { name: "Jun", expense: 0 },
    { name: "Jul", expense: 0 },
    { name: "Aug", expense: 0 },
    { name: "Sep", expense: 0 },
    { name: "Oct", expense: 0 },
    { name: "Nov", expense: 0 },
    { name: "Dec", expense: 0 },
  ];
  data.map((item) => {
    expense[new Date(item.created_at).getMonth() - 1].expense +=
      Number.parseInt(item.total);
  });
  return expense;
};
