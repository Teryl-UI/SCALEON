"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CompoundCard } from "@/components/site/compound-card"
import { LaunchCard } from "@/components/site/launch-card"
import { PositionCards } from "@/components/site/position-cards"

const slides = [
  {
    title: "Find the angle the market answers.",
    body: "Position is the work before anything is sent. You choose the industries, the roles and the approach those buyers will recognise. You gather the proof they will believe, and you watch the signals that say this week is the moment to speak.",
    visual: <PositionCards className="!mx-auto" />,
    width: "min(640px, 100%)",
  },
  {
    title: "Connect the channels and go live.",
    body: "Launch is the week the market is actually reached. Email, WhatsApp, LinkedIn and calls run from one plan. The lead magnet, the booking link and the CRM are connected, so a reply has a next step.",
    visual: <LaunchCard />,
    width: "min(480px, 100%)",
  },
  {
    title: "Let the replies rewrite the offer.",
    body: "Compound is what the market teaches you after the first replies. You keep the angles that earn meetings, practice the close, and update the proof and the competitive edge before the next send.",
    visual: <CompoundCard className="!mx-auto" />,
    width: "min(420px, 100%)",
  },
]

type Mode = "sign-in" | "sign-up"

const copy: Record<
  Mode,
  { title: string; subtitle: string; action: string; prompt: string; link: string; href: string }
> = {
  "sign-in": {
    title: "Sign in",
    subtitle: "Welcome back to Scaleon- Fill in your  details to get you back in",
    action: "Sign in",
    prompt: "Don’t have an account?",
    link: "Sign up",
    href: "/sign-up",
  },
  "sign-up": {
    title: "Sign up",
    subtitle: "Create your Scaleon account. Fill in your details to get started.",
    action: "Sign up",
    prompt: "Already have an account?",
    link: "Sign in",
    href: "/sign-in",
  },
}

export function AuthScreen({ mode }: { mode: Mode }) {
  const router = useRouter()
  const text = copy[mode]
  const [slide, setSlide] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string; confirm?: string }>({})
  const [notice, setNotice] = useState("")

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlide((current) => (current + 1) % slides.length)
    }, 8000)
    return () => window.clearInterval(timer)
  }, [slide])

  function go(next: number) {
    setSlide((next + slides.length) % slides.length)
  }

  function submit(event: React.FormEvent) {
    event.preventDefault()
    const next: typeof errors = {}
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Enter a valid email address."
    if (!password) next.password = "Enter a password."
    if (!confirm) next.confirm = "Confirm your password."
    else if (confirm !== password) next.confirm = "Passwords do not match."
    setErrors(next)
    if (Object.keys(next).length === 0) router.push("/overview")
  }

  const current = slides[slide]

  return (
    <div className="min-h-dvh bg-white xl:grid xl:grid-cols-[minmax(320px,573px)_minmax(0,1fr)] xl:pr-4">
      <div className="flex min-h-dvh flex-col px-6 pt-4 pb-16 sm:px-10 xl:px-[39px]">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="Scaleon home">
            <Image src="/figma/logo-mark.svg" alt="" width={32} height={43} unoptimized priority />
          </Link>
          <Link href="/" className="font-sans text-base leading-6 font-medium text-[#0c1017]">
            Go back
          </Link>
        </div>

        <form
          onSubmit={submit}
          className="mx-auto mt-16 flex w-full max-w-[534px] flex-col items-center gap-9 xl:mx-0 xl:mt-[86px]"
          noValidate
        >
          <div className="flex w-full flex-col gap-6">
            <div className="flex max-w-[433px] flex-col gap-2">
              <h1 className="font-heading text-[32px] leading-10 font-medium tracking-[-0.64px] text-[#0c1017]">
                {text.title}
              </h1>
              <p className="font-sans text-base leading-6 font-medium whitespace-pre-wrap text-[#666]">
                {text.subtitle}
              </p>
            </div>

            <div className="flex w-full flex-col gap-8">
              <div className="flex w-full flex-col gap-2">
                <Field label="Email" error={errors.email}>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="email@example.com"
                    className="w-full rounded-lg bg-[#f8f9fb] p-3 font-heading text-lg leading-6 font-medium text-[#0c1017] outline-none placeholder:text-[#bcbdc1]"
                  />
                </Field>
                <Field label="Password" error={errors.password}>
                  <SecretInput
                    name="password"
                    autoComplete={mode === "sign-in" ? "current-password" : "new-password"}
                    value={password}
                    shown={showPassword}
                    onToggle={() => setShowPassword((value) => !value)}
                    onChange={setPassword}
                  />
                </Field>
                <Field label="Confirm Password" error={errors.confirm}>
                  <SecretInput
                    name="confirm"
                    autoComplete="new-password"
                    value={confirm}
                    shown={showConfirm}
                    onToggle={() => setShowConfirm((value) => !value)}
                    onChange={setConfirm}
                  />
                </Field>
              </div>

              <div className="flex w-full flex-col items-center gap-4">
                <button
                  type="submit"
                  className="w-full rounded-[10px] bg-[linear-gradient(106.17deg,#004ee6_1.37%,#1454d2_115.74%)] px-3 py-3.5 font-heading text-lg leading-6 font-medium text-white shadow-[inset_0_4px_4px_rgba(255,255,255,0.16)]"
                >
                  {text.action}
                </button>
                <p className="font-sans text-base leading-6 font-medium text-[#666]">
                  {text.prompt}{" "}
                  <Link href={text.href} className="text-[#333]">
                    {text.link}
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full max-w-[479px] flex-col items-center gap-12">
            <div className="flex items-center gap-6">
              <span className="h-px w-[53px] bg-[#d5d5d5]" />
              <p className="font-sans text-base leading-6 font-medium text-[#666]">OR</p>
              <span className="h-px w-[53px] bg-[#d5d5d5]" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <SocialButton
                icon="/auth/google.svg"
                label="Continue with Google"
                onClick={() => setNotice("Google sign-in opens once the account is connected.")}
              />
              <SocialButton
                icon="/auth/apple.svg"
                label="Continue with Apple"
                onClick={() => setNotice("Apple sign-in opens once the account is connected.")}
              />
            </div>
            {notice ? (
              <p className="text-center font-sans text-sm leading-5 font-medium text-[#666]">{notice}</p>
            ) : null}
          </div>
        </form>
      </div>

      <aside className="relative my-4 mr-0 hidden min-h-[calc(100dvh-32px)] overflow-hidden rounded-[24px] xl:flex xl:flex-col">
        <img src="/auth/panel-bg.jpg" alt="" className="absolute inset-0 size-full object-cover" />
        <div className={`absolute inset-0 ${slide === 0 ? "bg-black/20" : "bg-black/10"}`} />
        <div className="relative flex min-h-0 flex-1 items-center justify-center px-8 pt-8">
          <div className="w-full" style={{ maxWidth: current.width }}>
            {current.visual}
          </div>
        </div>
        <div className="relative px-8 pt-4 text-center">
          <h2 className="font-heading text-[32px] leading-10 font-medium tracking-[-0.64px] text-[#f4f6f8]">
            {current.title}
          </h2>
          <p className="mx-auto mt-2.5 max-w-[671px] font-sans text-xl leading-[30px] font-medium text-white">
            {current.body}
          </p>
        </div>
        <div className="relative flex items-center justify-center gap-[111px] pt-8 pb-10">
          <button type="button" aria-label="Previous slide" onClick={() => go(slide - 1)} className="grid size-[31px] place-items-center">
            <img src="/auth/arrow.svg" alt="" width={31} height={31} className="rotate-90" />
          </button>
          <div className="flex items-center gap-[15.5px]" role="tablist" aria-label="Product slides">
            {slides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={index === slide}
                aria-label={item.title}
                onClick={() => go(index)}
                className={`h-[6.5px] w-[49px] rounded-full ${index === slide ? "bg-white" : "bg-[rgba(48,52,56,0.52)]"}`}
              />
            ))}
          </div>
          <button type="button" aria-label="Next slide" onClick={() => go(slide + 1)} className="grid size-[31px] place-items-center">
            <img src="/auth/arrow.svg" alt="" width={31} height={31} className="-rotate-90" />
          </button>
        </div>
      </aside>
    </div>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="flex w-full flex-col gap-2.5 py-1">
      <span className="font-heading text-lg leading-6 font-medium text-black">{label}</span>
      {children}
      {error ? <span className="font-sans text-sm leading-5 font-medium text-[#e8472a]">{error}</span> : null}
    </label>
  )
}

function SecretInput({
  name,
  autoComplete,
  value,
  shown,
  onToggle,
  onChange,
}: {
  name: string
  autoComplete: string
  value: string
  shown: boolean
  onToggle: () => void
  onChange: (value: string) => void
}) {
  return (
    <span className="flex w-full items-center justify-between rounded-lg bg-[#f8f9fb] p-3">
      <input
        type={shown ? "text" : "password"}
        name={name}
        autoComplete={autoComplete}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="***********"
        className="w-full bg-transparent font-heading text-lg leading-6 font-medium text-[#0c1017] outline-none placeholder:text-[#bcbdc1]"
      />
      <button type="button" onClick={onToggle} aria-label={shown ? "Hide password" : "Show password"} className="shrink-0">
        <img src={shown ? "/auth/eye.svg" : "/auth/eye-off.svg"} alt="" width={20} height={20} />
      </button>
    </span>
  )
}

function SocialButton({ icon, label, onClick }: { icon: string; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 rounded-xl border-2 border-[#e7e7e7] bg-white px-6 py-3.5 font-sans text-base leading-6 font-medium text-[#666]"
    >
      <img src={icon} alt="" width={20} height={20} />
      {label}
    </button>
  )
}
