import { Button } from "./ui/button";

const SignIn = () => {
  return (
    <Button
      size={"sm"}
      variant={"ghost"}
      className="text-sm  hover:text-darkColor text-lightColor hoverEffect"
    >
      Login
    </Button>
  );
};

export default SignIn;
