import { FaCheckCircle, FaCircle } from "react-icons/fa";

const GreenCheckmark = () => {
  return (
    <span className="me-1 position-relative">
      <FaCheckCircle style={{ top: "2px" }}
        className="text-success me-1 position-absolute fs-5" />
      <FaCircle className="text-white me-1 fs-6" />
    </span>
  );
};

export default GreenCheckmark;