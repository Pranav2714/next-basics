import { Metadata } from "next";
type Props = {
  params: Promise<{ productId: string }>;
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  return {
    title: `Product ${id}`,
  };
};
export default async function Products({ params }: Props) {
  const productId = (await params).productId;
  return (
    <div>
      <h1>This is product {productId}</h1>
    </div>
  );
}
// meta data cnnot be used with used client components
//to use it amke a separete comp and export in in page.tsx
