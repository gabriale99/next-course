import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string[] };
}

// Use brackets in folder name to allow multiple params in path
// Use double brackets to allow empty params

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProductPage {slug} {sortOrder}
    </div>
  );
};

export default ProductPage;
