const ServiceDetailPage = ({ params }) => {
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
  const id = params.id;
  const singleData = data.find((d) => d._id == id);
  return (
    <div>
      <h1 className="text-3xl font-bold">ServiceDetailPage</h1>
      <p className="text-2xl font-semibold">Service ID: {id}</p>
      <p className="text-2xl font-semibold">
        Service Name: {singleData.service_name}
      </p>
      <img src={singleData.service_image} alt="" />
    </div>
  );
};

export default ServiceDetailPage;
