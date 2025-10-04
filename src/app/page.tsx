import { currentUser } from "@/modules/authentication/actions";
import UserButton from "@/modules/authentication/components/user-button";

const HomePage = async () => {
  const user = await currentUser();

  return (
    <div>
      <UserButton user={user} />
    </div>
  );
};

export default HomePage;
