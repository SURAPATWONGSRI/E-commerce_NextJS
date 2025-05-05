import { SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const SignIn = () => {
  return (
    <SignInButton mode="modal">
      <Button
        size={"sm"}
        variant={"ghost"}
        className="text-sm  hover:text-darkColor text-lightColor hoverEffect"
      >
        Login
      </Button>
    </SignInButton>
  );
};

export default SignIn;
