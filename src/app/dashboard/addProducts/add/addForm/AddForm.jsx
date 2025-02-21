"use client";

import { useRouter } from "next/navigation";

const AddForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const payload = { productName };
    const res = await fetch("http://localhost:3000/api/items", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "content-type": "application/json" },
    });
    const result = await res.json();
    console.log(result);
    form.reset();
    router.push("/products");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input
          className="border p-3"
          type="text"
          name="productName"
          placeholder="Product Name"
        />
        <button type="submit" className="btn btn-accent">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;
