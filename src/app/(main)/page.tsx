import DashboardCard from "@/components/dashboard";
import PostTable from "@/components/posts";
import { MessageCircle, Newspaper, User,Folder } from "lucide-react";

export default function Home() {
  

  return (
    <>
      <div className="block md:flex md:flex-wrap flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard title={"Users"}  count={120} icon=<Newspaper className="text-slate-500" size={72} /> />
        <DashboardCard title={"Posts"} count={220} icon=<Folder className="text-slate-500" size={72} />  />
        <DashboardCard title={"Comments"} count={320} icon=<User className="text-slate-500" size={72} />  />
        <DashboardCard title={"Archives"} count={420} icon=<MessageCircle className="text-slate-500" size={72}/>  />
      </div>
      <PostTable title="Latest Posts" limit={5}/>
    </>
  );
}
