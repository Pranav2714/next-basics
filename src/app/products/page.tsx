import Link from "next/link";

export default function ProductsPage() {
  return (
    <div>
      <h1>This is Products</h1>
      <ul>
        <li>
          <h3>
            <Link href="/products/1">Product 1</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/products/2">Product 2</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/products/3">Product 3</Link>
          </h3>
        </li>
      </ul>
      <Link href="/">Home</Link>
    </div>
  );
}
