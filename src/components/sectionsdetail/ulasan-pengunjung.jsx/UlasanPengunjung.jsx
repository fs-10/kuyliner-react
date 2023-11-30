import React, { useEffect, useState } from "react";
import LogoMenuSatu from "../../../assets/menu-section/logo-menu-satu.jpg";
import { StarIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useLocation } from "react-router-dom";

function UlasanPengunjung() {
  const [review, setReview] = useState([]);
  const { pathname } = useLocation();
  const id = pathname.split("/");

  useEffect(() => {
    (async () => {
      await axios
        .get(`${import.meta.env.VITE_PUBLIC_API_URL}/review/common/${id[2]}`)
        .then(({ data }) => setReview(data.data));
    })();
  }, []);

  const getStars = (valueStars) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < valueStars) {
        stars.push(<StarIcon className="h-8 w-8 text-yellow-500" key={i} />);
      } else {
        stars.push(<StarIcon className="h-8 w-8 text-gray-400" key={i} />);
      }
    }
    return stars;
  };

  return (
    <section className="container my-16">
      <div className="text-3xl h-[400px] overflow-y-scroll border">
        {review.length != 0 ? (
          review.map((item, index) => (
            <section
              key={index}
              className="w-full border-2 border-gray-400 p-3 rounded-lg lg:flex items-center mb-5"
            >
              <div className="lg:w-1/4 ">
                <div className="flex items-center">
                  <img
                    src={item.id_reviewers.profile_image}
                    alt=""
                    className="rounded-full"
                  />
                  <h1 className="ms-5 text-xl font-bold">Asuma Toki</h1>
                </div>
                <div className="flex mt-2 items-center">
                  <div className="flex">
                    <StarIcon className="h-8 w-8 text-yellow-500" />
                    <StarIcon className="h-8 w-8 text-yellow-500" />
                    <StarIcon className="h-8 w-8 text-yellow-500" />
                    <StarIcon className="h-8 w-8 text-yellow-500" />
                    <StarIcon className="h-8 w-8 text-gray-400" />
                  </div>
                  <h2 className="ms-2 text-lg font-bold text-yellow-500">
                    4.0/5.0
                  </h2>
                </div>
                <h2 className="text-sm mt-3">11/02/2023</h2>
              </div>
              <div className="lg:w-3/4">
                <h1 className="text-lg py-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam, perspiciatis incidunt nostrum at voluptate eius.
                </h1>
              </div>
            </section>
          ))
        ) : (
          <h4 className="text-center mt-44">This product has no review</h4>
        )}

      </div>
    </section>
  );
}

export default UlasanPengunjung;
