import type { Metadata } from "next"
import { AuthScreen } from "@/components/auth/auth-screen"

export const metadata: Metadata = {
  title: "Sign in — Scaleon",
  description: "Sign in to Scaleon and pick up the campaign where you left it.",
}

export default function SignInPage() {
  return <AuthScreen mode="sign-in" />
}
