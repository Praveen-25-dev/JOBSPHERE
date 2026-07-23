import NavBar from "../components/NavBar";
import notifications from "../data/Notifications";

function Notifications() {
    const notifications =
  JSON.parse(getItem("notifications")) || [];
  return (
    <>
      <NavBar />

      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">
          Notifications
        </h1>

        <div className="space-y-4">
          {notifications.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow"
            >
              <h3 className="font-medium">
                {item.message}
              </h3>

              <p className="text-sm text-gray-500">
                {item.time}
              </p>
            </div>
          ))}
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
  {notifications.length}
</span>
        </div>
      </div>
    </>
  );
}

export default Notifications;