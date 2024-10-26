// import { GoogleLogin } from '@react-oauth/google';
import {
//   useGoogleLogin,
//   TokenResponse,
  GoogleLogin,
} from "@react-oauth/google";

interface GoogleAuthProps {
  handleSuccess: () => void;
  handleFailure: () => void;
  action_type : "signup_with" | "signin_with" | "continue_with" | "signin" | undefined
}

const GoogleAuth: React.FC<GoogleAuthProps> = (props) => {
  const { handleSuccess, handleFailure, action_type } = props;

  //   const loginHandler = useGoogleLogin({
  //     onSuccess: (tokenResponse) => {
  //       if (tokenResponse && tokenResponse.access_token) {
  //         handleSuccess(tokenResponse);
  //       } else {
  //         handleFailure("No access token received.");
  //       }
  //     },
  //     onError: (errorResponse) => {
  //       const errorMessage =
  //         errorResponse.error_description ||
  //         "An error occurred during Google Login.";
  //       console.error("Google Login Error:", errorMessage);
  //       handleFailure(errorMessage);
  //     },
  //     flow: "implicit",
  //   });

  return (
    <>
      {/* <div onClick={() => loginHandler()}>google</div> */}
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleFailure}
        useOneTap
        text={action_type}
      />
    </>
  );
};

export default GoogleAuth;
