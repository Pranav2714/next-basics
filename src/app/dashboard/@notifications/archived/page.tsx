import Card from "../../../Components/Card";
import Link from "next/link";
export default function NotificationsArchived() {
  return (
    <Card>
      Archived Notifications
      <Link href="/dashboard">Default</Link>
    </Card>
  );
}
