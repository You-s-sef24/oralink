import AdminAnalytics from "./AdminAnalytics";
import UsersList from "./UsersList";

export default function AdminDashboard() {
  return (
    <div className="p-2">
      <AdminAnalytics />

      <hr />

      <UsersList />
    </div>
  );
}
