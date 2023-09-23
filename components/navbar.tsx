import { UserButton } from "@clerk/nextjs";

import { MobileSidebar } from "@/components/mobile-sidebar";
import { BsMoonStars, BsSun } from "react-icons/bs";
//import { getApiLimitCount } from "@/lib/api-limit";
//import { checkSubscription } from "@/lib/subscription";

const Navbar = async () => {
  //const apiLimitCount = await getApiLimitCount();
  //const isPro = await checkSubscription();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar
      // isPro={isPro}
      //apiLimitCount={apiLimitCount}
      />

      <span className="flex w-full items-center justify-end">
        <UserButton afterSignOutUrl="/" />
      </span>
    </div>
  );
};

export default Navbar;
