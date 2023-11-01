import React from "react";
import SearchIcon from '../../../assets/logo/search-regular.svg';

function SearchSection() {
  return (
    <section className="flex justify-center my-10">
      <div>
        <label className="text-[#FFC836] font-bold text-lg">Cari Kuliner</label>
        <div className="border border-[#FFC836] flex px-3 py-2 justify-between w-[80vw] rounded-md">
          <input type="text" placeholder="Cari" className="text-2xl outline-none w-full" /><br />
          <button>
            <img src={SearchIcon} alt="" className="" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
