import Card from "@/components/ui/Card";

const stats = [
  {
    title: "Revenue",
    value: "$8.42M",
    growth: "+13.4%",
  },
  {
    title: "Customers",
    value: "2,847",
    growth: "+11.4%",
  },
  {
    title: "Accuracy",
    value: "96.8%",
    growth: "+4.2%",
  },
];

export default function DashboardStats() {
  return (
    <div className="mt-6 grid grid-cols-3 gap-4">
      {stats.map((item) => (
        <Card key={item.title} className="rounded-2xl p-5">
          <p className="text-sm text-[var(--text-secondary)]">
            {item.title}
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-emerald-400">
            {item.growth}
          </p>
        </Card>
      ))}
    </div>
  );
}