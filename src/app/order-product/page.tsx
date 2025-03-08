"use client";
import { useRouter } from "next/navigation";
export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    alert("Order placed successfully");
    console.log("Order placed successfully");
    router.push("/");
  };
  return (
    <div>
      <h1 className=" font-bold ">Order here</h1>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}
