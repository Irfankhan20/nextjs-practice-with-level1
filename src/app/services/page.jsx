import Link from "next/link";

const ServicesPage = () => {
  const data = [
    {
      _id: "65c9f1e6a1b2c3d4e5f67890",
      service_name: "Express Parcel Delivery",
      service_image: "https://i.ibb.co.com/Z6v81MhF/kulna1.jpg",
      service_description:
        "Fast and reliable parcel delivery service with real-time tracking.",
    },
    {
      _id: "65c9f1e6b2c3d4e5f6789012",
      service_name: "Gourmet Meal Catering",
      service_image: "https://i.ibb.co.com/2s5t190/shundorban5.jpg",
      service_description:
        "Delicious gourmet meals delivered to your doorstep for any occasion.",
    },
    {
      _id: "65c9f1e6c3d4e5f678901234",
      service_name: "Luxury Apartment Rentals",
      service_image: "https://i.ibb.co.com/Y3sTd3K/jaflong4.jpg",
      service_description:
        "Find and book fully-furnished luxury apartments for short or long stays.Find and book fully-furnished luxury. ",
    },
    {
      _id: "65c9f1e6d4e5f67890123456",
      service_name: "Visa Consultation Service",
      service_image: "https://i.ibb.co.com/dbKn9tG/kulna2.jpg",
      service_description:
        "Expert visa consultation and application assistance for hassle-free travel.",
    },
  ];

  return (
    <div>
      <h1 className="font-bold text-3xl">Services page</h1>
      <div className="grid grid-cols-4 gap-10">
        {data.map((d) => (
          <div
            key={d._id}
            className="card bg-base-100 w-96 shadow-xl flex flex-col h-full"
          >
            <figure className="h-60 w-full">
              <img
                src={d.service_image}
                alt="Service Image"
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="card-body flex-grow flex flex-col">
              <h2 className="card-title">{d.service_name}</h2>
              <p className="flex-grow">{d.service_description}</p>
              <div className="card-actions justify-end">
                <Link href={`/services/${d._id}`}>
                  <button className="btn btn-primary">See Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
