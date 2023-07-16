import MetricCard from '@admin/MetricCard';

const AdminAnalytics = () => {
  return (
    <div className="flex flex-wrap">
      <MetricCard title="Total Products" metric="12" cardColor="purple" />
      <MetricCard title="Total Revenue" metric="$3.250" cardColor="indigo" />
      <MetricCard title="Total Users" metric="249" cardColor="blue" />
      <MetricCard title="New Users" metric="2" cardColor="green" />
      <MetricCard title="Server Uptime" metric="152 Days" cardColor="yellow" />
      <MetricCard title="To Do List" metric="7 Tasks" cardColor="pink" />
      <MetricCard title="Issues" metric="3" cardColor="red" />
    </div>
  );
};

export default AdminAnalytics;
