import { type Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
import { OAuthSignIn } from "@/components/auth/oauth-signin"
import { SignInForm } from "@/components/forms/signin-form"
// import { Shell } from "@/components/shells/shell"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Sign In",
  description: "Sign in to your account",
}

export default async function SignInPage() {
  const user = await currentUser()
  if (user) redirect("/")

  return (
  <div>

  </div>
  )
}