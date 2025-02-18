import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
}

// Route params only works on page
const UserDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) {
    notFound();
  }
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
