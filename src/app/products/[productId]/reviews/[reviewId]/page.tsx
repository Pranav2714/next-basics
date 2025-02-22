export default async function Page({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  return (
    <div>
      <h1>
        This is a review {reviewId} of product {productId}
      </h1>
    </div>
  );
}
