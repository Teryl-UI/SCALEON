import type { Metadata } from "next"
import { AuthScreen } from "@/components/auth/auth-screen"

export const metadata: Metadata = {
  title: "Sign up — Scaleon",
  description: "Create a Scaleon account and start the outbound system.",
}

export default function SignUpPage() {
  return <AuthScreen mode="sign-up" />
}
