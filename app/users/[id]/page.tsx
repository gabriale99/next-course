import React from "react";

interface Props {
  params: { id: number };
}

// Route params only works on page
const UserDetailPage = ({ params: { id } }: Props) => {
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
