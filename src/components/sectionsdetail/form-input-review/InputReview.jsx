import React, { useEffect, useState } from "react";
import LogoMenuSatu from "../../../assets/menu-section/logo-menu-satu.jpg";
import { StarIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useLocation } from "react-router-dom";

function InputReview() {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("userId");
  const { pathname } = useLocation();

  const [user, setUser] = useState("");
  const [rating, setRating] = useState(1);
  const [hover, setHover] = useState(1);
  const [review, setReview] = useState({
    text_review: "",
  });

  useEffect(() => {
    (async () => {
      await axios
        .get(`${import.meta.env.VITE_PUBLIC_API_URL}/user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => setUser(data.data));
    })();
  }, []);

  const handleInput = (e) => {
    const value = e.target.value;
    setReview({ text_review: value });
  };
  const getIdProduct = pathname.split("/")[2];

  // console.log(useLocation());

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const test = await axios.post(
        `${import.meta.env.VITE_PUBLIC_API_URL}/review`,
        {
          text_review: review.text_review,
          stars: rating,
          id_products: getIdProduct,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  return (
    <section className="container">
      <div>
        <div className="flex items-center">
          <img
            src={user.profile_image ? user.profile_image : ""}
            className="rounded-full lg:rounded-full"
          />
          <h1 className="ms-5 font-bold">{`${user.first_name ? user.first_name : ""} ${user.last_name ? user.last_name : ""}`}</h1>
        </div>

        <section className="flex my-3">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <StarIcon
                key={index}
                onClick={() => setRating(index)}
                onMouseLeave={() => setHover(rating)}
                className={`cursor-pointer ${
                  index <= (rating || hover)
                    ? "h-10 w-10 text-yellow-500 cursor-pointer"
                    : "h-10 w-10 text-gray-400"
                }
                  `}
              />
            );
          })}
        </section>

        <textarea
          name="test"
          id=""
          cols="30"
          rows="10"
          placeholder="Tuliskan Ulasanmu"
          className="w-full p-5 border-2 border-gray-400 rounded-lg mt-4"
          value={review.text_review}
          onChange={handleInput}
        />
        <button
          className="text-base font-semibold text-white bg-primary py-2 px-8 my-4 rounded-lg hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
          onClick={handleSubmit}
        >
          Kirim
        </button>
      </div>
    </section>
  );
}

export default InputReview;
