export default async function ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return (
    <div>
      <h1>This is product {productId}</h1>
    </div>
  );
}
