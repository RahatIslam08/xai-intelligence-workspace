import Card from "@/components/ui/Card";
import DashboardHeader from "./DashboardHeader";

export default function Dashboard() {
  return (
   <Card className="relative min-h-[520px] overflow-hidden rounded-3xl p-6">
      <DashboardHeader />
    </Card>
  );
}