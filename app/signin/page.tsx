import { title } from "@/components/primitives";
import { type Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center">
        <h1 className={title()}>Sign In</h1>
      </div>
    </section>
  );
}
