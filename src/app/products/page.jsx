// import dbConnect from "@/lib/dbConnect";

export const dynamic = "force-dynamic";

const ProductsPage = async () => {
  const res = await fetch("http://localhost:3000/api/items");
  const data = await res.json();
  // const data = await dbConnect("practice_data").find({}).toArray();

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
