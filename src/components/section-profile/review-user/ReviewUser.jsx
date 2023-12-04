import React, { useEffect, useState } from "react";
import LogoMenuSatu from "../../../assets/menu-section/logo-menu-satu.jpg";
import { AtSymbolIcon, StarIcon } from "@heroicons/react/24/solid";
import MenuSatu from "../../../assets/menu-section/menu-dua.jpg";
import axios from "axios";
import { data } from "autoprefixer";

function ReviewUser() {
  const [review, setReview] = useState([]);
  const [supplier, setSupplier] = useState([]);

  const id = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    (async () => {
      await axios
        .get(`${import.meta.env.VITE_PUBLIC_API_URL}/review`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => setReview(data.data))
        .catch((err) => console.log(err));
    })();

    (async () => {
      await axios
        .get(`${import.meta.env.VITE_PUBLIC_API_URL}/supplier`)
        .then(({ data }) => setSupplier(data.data))
        .catch((err) => console.log(err));
    })();
  }, []);

  const getStars = (valueStars) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(valueStars)) {
        stars.push(<StarIcon className="h-8 w-8 text-yellow-500" key={i} />);
      } else {
        stars.push(<StarIcon className="h-8 w-8 text-gray-400" key={i} />);
      }
    }
    return stars;
  };

  const getDataSupplier = (supplierId, getData) => {
    return supplier
      .filter((item) => item._id == supplierId)
      .map((test) => test[getData]);
  };

  const convertDate = (date) => new Date(date).toLocaleString().split(",")[0];

  return (
    <section className="container my-10">
      <h1 className="text-lg font-semibold mb-3">All Reviews From Resort</h1>
      <section className="overflow-y-scroll h-[500px] border">

        {review &&
          review.map((item, index) => (
            <div
              className="p-5 my-5 mx-4 border-2 border-gray-300 rounded-lg lg:flex"
              key={index}
            >
              <div className="lg:w-3/4 pe-10">
                <h1 className="text-2xl">{item.id_products.name_product}</h1>
                <div className="flex items-center mt-3">
                  <img
                    src={getDataSupplier(
                      item.id_products.supplier_id,
                      "profile_image"
                    )}
                    className="w-9 h-9 rounded-full"
                  />
                  <h1 className="text-sm ms-3">
                    {getDataSupplier(
                      item.id_products.supplier_id,
                      "supplier_username"
                    )}
                  </h1>
                  <h1 className="text-sm ms-3">
                    | {getDataSupplier(item.id_products.supplier_id, "address")}
                  </h1>
                </div>
                <h1 className="text-sm mt-2">{convertDate(item.date_create)}</h1>
                <div className="flex items-center">
                  <div className="flex mt-2">{getStars(item.stars)}</div>
                  <h1 className="text-sm mt-2 ms-3 text-yellow-500">
                    {item.stars}/5
                  </h1>
                </div>
                <h1 className="text-sm mt-3">
                  {item.text_review}
                </h1>
              </div>
              <div className="lg:flex lg:w-1/4 relative mt-5 lg:mt-0 lg:right-5">
                <img
                  src={item.id_products.product_image}
                  className="mx-auto lg:w-96 lg:h-56 px-6"
                />
              </div>
            </div>
          ))}
      </section>
    </section>
  );
}

export default ReviewUser;
