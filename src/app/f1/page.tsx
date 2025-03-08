import Link from "next/link";

export default function F1() {
  return (
    <div>
      <h1>F1</h1>
      <Link href={"/f1/f2"}>f2</Link>
      <Link href={"/f3"}>f3</Link>
    </div>
  );
}
