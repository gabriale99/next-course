import React from "react";

interface Props {
  params: { slug: string[] };
}

// Use brackets in folder name to allow multiple params in path
// Use double brackets to allow empty params

const ProductPage = ({ params: { slug } }: Props) => {
  return <div>ProductPage {slug}</div>;
};

export default ProductPage;
