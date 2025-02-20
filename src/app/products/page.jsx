export const dynamic = "force-dynamic";

const ProductsPage = async () => {
  const res = await fetch(
    "https://learning-nextjs-level1.vercel.app/api/items"
  );
  const data = await res.json();

  return (
    <div>
      <h1 className="font-bold text-3xl text-center mt-10">
        this is products page
      </h1>
      <ul className="text-center mt-3">
        {data?.map((singleProduct) => {
          return <li key={singleProduct._id}>{singleProduct?.productName}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProductsPage;
