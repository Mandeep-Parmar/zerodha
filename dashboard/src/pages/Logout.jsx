import { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    // Clear dashboard storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect back to login app
    const frontendUrl =
      import.meta.env.VITE_FRONTEND_URL || "http://localhost:5173";
    window.location.href = `${frontendUrl}/login`;
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Logging out...</span>
        </div>
        <p className="mt-3 text-muted">Logging out of Kite...</p>
      </div>
    </div>
  );
};

export default Logout;
