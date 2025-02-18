import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  // Caching only works with fetch in Next.js
  const users: User[] = await res.json();
  // If there are static data in this page, Nextjs will render it in build time statically
  // Otherwise, if Nextjs sees dynamic data (data that refreshes after a period of time), it renders it dynamically in request time

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
