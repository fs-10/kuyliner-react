import React, { useState, useEffect } from "react";
import ImgSlide3 from "../../../assets/herosection/herosection-slide-3.png";
import MenuSatu from "../../../assets/menu-section/menu-dua.jpg";
import LogoMenuSatu from "../../../assets/menu-section/logo-menu-satu.jpg";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

function MenuSection() {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    const { data } = await axios.get(
      `${import.meta.env.VITE_PUBLIC_API_URL}/products/search/${search}`
    );

    setProduct(data);
  };

  const getProduct = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_PUBLIC_API_URL}/products/search/`
    );
    setProduct(data);
  };


  return (
    <>
      <form className="container my-10" onSubmit={handleSearch}>
        <div className="relative mx-auto mb-4 flex w-9/12 flex-wrap items-stretch">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search || ""}
            className="relative m-0 mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-2xl font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Cari Kuliner ..."
            aria-label="Search"
            aria-describedby="button-addon1"
          />

          {/* <!--Search button--> */}
          <button
            className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={handleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </form>

      <section className="pb-7 bg-white">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16"></div>
          </div>

          <section className="flex flex-wrap justify-center lg:justify-start">
            {product.data &&
              product.data.map((item) => (
                <Link
                  to={`/detail/${item._id}`}
                  className="w-80 lg:w-1/3 xl:w-1/4"
                  key={item._id}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 w-11/12">
                    <img src={item.product_image} className="w-full  " />
                    <div className="py-5 px-6 bg-white">
                      <div
                        className="fl
                      ex items-center justify-start mb-2 bg-white"
                      >
                        <img
                          src={item.profile_image}
                          className="rounded-full"
                        />
                        <h3>
                          <p
                            // href="#"
                            className="block ms-4 font-medium text-lg text-dark hover:text-primary truncate"
                          >
                            {item.supplier_id.supplier_username}
                          </p>
                        </h3>
                      </div>
                      <h2 className="font-extrabold text-3xl text-dark mb-2">
                        {item.name_product}
                      </h2>
                      <h2 className="font-base text-lg text-dark mb-4">{}</h2>
                    </div>
                  </div>
                </Link>
              ))}
          </section>
        </div>
      </section>
    </>
  );
}

export default MenuSection;
