import Link from "next/link";
import React from "react";
import Burger from "./Burger";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import NavLinks from "./NavLinks";
import UserAvatar from "./UserAvatar";

async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="max-w-7xl mx-auto py-8 flex justify-between items-center">
      <div className="text-2xl font-semibold">
        <Link href="/">EagleExchange</Link>
      </div>
      <div className="hidden md:flex gap-x-2">
        <NavLinks />
      </div>

      <div>
        {user ? (
          <UserAvatar
            name={user.given_name as string}
            email={user.email as string}
            userImg={
              user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
            }
          />
        ) : (
          <div className="flex gap-x-2">
            <div className="border-2 border-solid border-black px-4 py-2 rounded-full hover:scale-105 transition transform duration-300">
              <LoginLink>Log In</LoginLink>
            </div>
            <div className="border-2 border-solid border-black px-4 py-2 bg-black text-white rounded-full hover:scale-105  transition transform duration-300">
              <RegisterLink>Register</RegisterLink>
            </div>
          </div>
        )}
      </div>
      <div className="md:hidden">
        <Burger />
      </div>
    </nav>
  );
}

export default Navbar;
