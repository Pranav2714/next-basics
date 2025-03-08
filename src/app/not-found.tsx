import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">Page Not Found</h1>
      <p className="text-xl text-gray-600 mt-4">
        Requested Page does not exist
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
