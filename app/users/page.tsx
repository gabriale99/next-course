import React from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sortUser: string };
}

const UsersPage = async ({ searchParams: { sortUser } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <UserTable sortBy={sortUser} />
    </>
  );
};

export default UsersPage;
