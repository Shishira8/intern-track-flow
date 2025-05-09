
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white shadow-md rounded-lg max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-gray-600 mb-6">Page not found</p>
        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Button onClick={() => navigate("/")}>
          Return to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
