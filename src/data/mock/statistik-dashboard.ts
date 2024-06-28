export type DashboardStatisticTile = {
  label: string;
  value: number;
  symbols?: string;
  description?: string;
  icon?: string;
};

export const dashboardStatisticTiles: DashboardStatisticTile[] = [
  {
    label: "Total Revenue",
    symbols: "$",
    value: 234232,
    description: "20% increase from last month",
    icon: "bx:dollar",
  },
  {
    label: "Total Sales",
    symbols: "+",
    value: 4523,
    description: "10% increase from last month",
    icon: "bx:purchase-tag-alt",
  },
  {
    label: "Total Orders",
    symbols: "+",
    value: 234,
    description: "5% increase from last month",
    icon: "bx:purchase-tag",
  },
  {
    label: "Total Customers",
    value: 4523,
    symbols: "+",
    description: "10% increase from last month",
    icon: "bx:user",
  },
];
