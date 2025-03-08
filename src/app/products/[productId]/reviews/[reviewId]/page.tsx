import { notFound, redirect } from "next/navigation";

// function getRandomInt(count: number) {
//   return Math.floor(Math.random() * count);
// }

export default async function Page({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  // const random = getRandomInt(2);
  // if (random === 1) {
  //   throw new Error("Error reviwing message");
  // }
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    redirect("/products");
    notFound();
  }
  return (
    <div>
      <h1>
        This is a review {reviewId} of product {productId}
      </h1>
    </div>
  );
}
