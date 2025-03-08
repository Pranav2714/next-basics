"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NotFound() {
  const pathname = usePathname();
  const reviewId = pathname.split("/").pop();
  const productId = pathname.split("/")[2];
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">
        Review {reviewId} of product {productId} Not Found
      </h1>

      <Link
        href="/"
        className="mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
