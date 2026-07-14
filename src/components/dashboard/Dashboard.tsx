import Card from "@/components/ui/Card";
import Sidebar from "./sidebar";
import Header from "./header";


export default function Dashboard() {
  return (
    <Card className="relative overflow-hidden rounded-3xl p-0">
      <div className="flex h-[620px]">
        <Sidebar />

        <div className="flex-1 p-6">

  <Header />

  {/* Stats will go here */}

</div>
      </div>
    </Card>
  );
}