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
      if (i < Math.floor(valueStars)) {
        stars.push(<StarIcon className="h-8 w-8 text-yellow-500" key={i} />);
      } else {
        stars.push(<StarIcon className="h-8 w-8 text-gray-400" key={i} />);
      }
    }
    return stars;
  };

  const convertDate = (date) => new Date(date).toLocaleString().split(",")[0];

  // const stars = getStars(getValueStars).map((star) => star);
  // console.log(stars);

  console.log(review);

  return (
    <section className="container my-16">
      <div className="text-3xl h-[400px] overflow-y-scroll border">
        {review.map((item) => console.log(item))}
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
                    className="rounded-full"
                  />
                  <h1 className="ms-5 text-xl font-bold">
                    {item.id_reviewers.first_name}
                    {item.id_reviewers.last_name}
                  </h1>
                </div>
                <div className="flex mt-2 items-center">
                  <div className="flex">{getStars(item.stars)}</div>
                  <h2 className="ms-2 text-lg font-bold text-yellow-500">
                    {item.stars}/5
                  </h2>
                </div>
                <h2 className="text-sm mt-3">
                  {convertDate(item.date_create)}
                </h2>
              </div>
              <div className="lg:w-3/4">
                <h1 className="text-lg py-3">{item.text_review}</h1>
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
