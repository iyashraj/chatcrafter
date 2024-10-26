// import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin, TokenResponse } from "@react-oauth/google";

interface GoogleAuthProps {
  handleSuccess: (tokenResponse: TokenResponse) => void;
  handleFailure: (error: string) => void;
}

const GoogleAuth: React.FC<GoogleAuthProps> = (props) => {
  const { handleSuccess, handleFailure } = props;

  const loginHandler = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      if (tokenResponse && tokenResponse.access_token) {
        handleSuccess(tokenResponse);
      } else {
        handleFailure("No access token received.");
      }
    },
    onError: (errorResponse) => {
      const errorMessage =
        errorResponse.error_description ||
        "An error occurred during Google Login.";
      console.error("Google Login Error:", errorMessage);
      handleFailure(errorMessage);
    },
    flow: "implicit",
  });

  return (
    <>
      <div onClick={() => loginHandler()}>google</div>
    </>
  );
};

export default GoogleAuth;
