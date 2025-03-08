import Card from "../../Components/Card";
import Link from "next/link";
export default function Notifications() {
  return (
    <Card>
      Notifications
      <Link href="dashboard/archived">Archived</Link>
    </Card>
  );
}
