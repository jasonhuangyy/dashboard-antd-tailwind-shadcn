import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type DashboardCardProps = {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
};
const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
  return (
    <Card className="p-4 pb-0">
      <CardContent>
        <h3 className="text-3xl text-center mb-4  text-slate-500 dark:text-slate-200">
          {title}
        </h3>
        <div className="flex items-center justify-center gap-6 ">
          <div className="rounded-full p-4 bg-secondary">{icon}</div>
          <h3 className="text-5xl font-semibold text-primary">{count}</h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
