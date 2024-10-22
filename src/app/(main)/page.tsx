import DashboardCard from "@/components/dashboard";

export default function Home() {
  

  return (
    <>
      <div className="block md:flex md:flex-wrap flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard title={"Users"}  id={"120"} />
        <DashboardCard title={"Posts"} id={"220"} />
        <DashboardCard title={"Comments"} id={"320"} />
        <DashboardCard title={"Archives"} id={"420"} />
      </div>
    </>
  );
}
