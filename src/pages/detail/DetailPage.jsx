import React from "react";
import CardDetail from "../../components/sectionsdetail/card-detail/CardDetail";
import InputReview from "../../components/sectionsdetail/form-input-review/InputReview";
import UlasanPengunjung from "../../components/sectionsdetail/ulasan-pengunjung.jsx/UlasanPengunjung";

function DetailPage() {
  return (
    <>
      <CardDetail />
      <InputReview />
      <UlasanPengunjung />
    </>
  );
}

export default DetailPage;
