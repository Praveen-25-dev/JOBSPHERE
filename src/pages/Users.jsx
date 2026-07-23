import NavBar from "../components/NavBar";

function Users() {
  const users = [
    {
      id: 1,
      name: "Praveen",
      email: "praveen@gmail.com",
    },
    {
      id: 2,
      name: "Rahul",
      email: "rahul@gmail.com",
    },
  ];

  return (
    <>
      <NavBar />

      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">
          Manage Users
        </h1>

        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow p-4 rounded mb-3"
          >
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Users;