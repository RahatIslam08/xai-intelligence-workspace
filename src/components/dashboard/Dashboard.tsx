import Card from "@/components/ui/Card";
import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./DashboardStats";
import DashboardChart from "./DashboardChart";
import DashboardInsights from "./DashboardInsights";
import DashboardSources from "./DashboardSources";

export default function Dashboard() {
  return (
    <Card className="relative min-h-[620px] overflow-hidden rounded-3xl p-6">

      <DashboardHeader />

      <DashboardStats />

      <DashboardChart />

      <div className="mt-6 grid grid-cols-2 gap-4">
        <DashboardInsights />
        <DashboardSources />
      </div>

    </Card>
  );
}