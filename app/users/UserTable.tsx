import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}
const UserTable = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  // Caching only works with fetch in Next.js
  const users: User[] = await res.json();
  // If there are static data in this page, Nextjs will render it in build time statically
  // Otherwise, if Nextjs sees dynamic data (data that refreshes after a period of time), it renders it dynamically in request time

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
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
