import React from "react";
import { inPlaceSort } from "fast-sort";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortBy?: string;
}

const UserTable = async ({ sortBy }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  // Caching only works with fetch in Next.js
  const users: User[] = await res.json();
  // If there are static data in this page, Nextjs will render it in build time statically
  // Otherwise, if Nextjs sees dynamic data (data that refreshes after a period of time), it renders it dynamically in request time
  if (!!sortBy) {
    inPlaceSort(users).asc(sortBy === "name" ? "name" : "email");
  }

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortUser=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortUser=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
