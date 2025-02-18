import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortUser: string };
}

const UsersPage = async ({ searchParams: { sortUser } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortBy={sortUser} />
      </Suspense>
    </>
  );
};

export default UsersPage;
