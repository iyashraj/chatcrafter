import React from "react";
import { TiWarningOutline } from "react-icons/ti";

interface IProps {
  errorMessage: string | undefined | null;
}
const ErrorServices: React.FC<IProps> = ({ errorMessage }) => {
  return (
    <div className="flex text-ccred items-center gap-1">
      <TiWarningOutline />
      <span className="text-sm">{errorMessage}</span>
    </div>
  );
};

export default ErrorServices;
