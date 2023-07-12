"use client";

import { title } from "@/components/primitives";
// import Link from "next/link";
import { Input, Button, Divider, Link } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { AppleIcon, GoogleIcon } from "@/components/icons";

export default async function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center">
        <h1 className={title()}>Sign </h1>
        <h1 className={title({ color: "blue" })}>In</h1>
      </div>
      <div className="w-1/3 mt-20 justify-center">
        <Input
          className="mb-5"
          type="email"
          label="Email"
          placeholder="Enter your email"
        />
        <Input
          className="mb-5"
          type="password"
          label="Password"
          placeholder="Enter your Password"
        />
        <Button color="primary">Sign In</Button>
      </div>
      <h1 className="italic text-sm font-bold">
        Can't remember your password?{" "}
        <Link className="font-extrabold text-sm italic">Reset it here!</Link>
      </h1>
      <h1 className="italic text-sm font-bold">
        Don't have an account?{" "}
        <Link className="font-extrabold text-sm italic">Create one here!</Link>
      </h1>
      <Divider />
      <h1>Or Sign in with a different account.</h1>
      <div className="block">
        <Button startContent={<GoogleIcon />} variant='bordered' className='mb-5' fullWidth={true} color="default">Google</Button>
        <Button startContent={<AppleIcon />} variant='bordered' fullWidth={true} color="default">Apple</Button>

      </div>
    </div>
  );
}
