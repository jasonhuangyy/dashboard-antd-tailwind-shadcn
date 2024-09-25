import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import DashboardCard from "@/components/dashboard/DashboardCard";
import PostTable from "@/components/posts/PostTable";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper size={40} />}
        />
        <DashboardCard
          title="Categories"
          count={60}
          icon={<Folder size={40} />}
        />
        <DashboardCard title="Users" count={560} icon={<User size={40} />} />
        <DashboardCard
          title="Comments"
          count={1200}
          icon={<MessageCircle size={40} />}
        />
      </div>

      <AnalyticsChart />
      <div className="mt-4"></div>
      <PostTable title="Recent Posts" limit={5} />
    </>
  );
}
