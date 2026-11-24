import { useId } from "react"
import Image from "next/image"

const WIDTH = 607
const HEIGHT = 592
const CENTER_X = 316
const CENTER_Y = 310
const SCAN_SECONDS = 8

const channels = [
  { src: "/figma/linkedin.svg", width: 24.3503, height: 24.3503, x: 230, y: 153, angle: 331.3 },
  { src: "/figma/whatsapp.svg", width: 23.4746, height: 23.4575, x: 145, y: 305, angle: 271.7 },
  { src: "/figma/facebook.svg", width: 23.965, height: 23.965, x: 243, y: 387, angle: 223.5 },
  { src: "/figma/gmail.svg", width: 23.965, height: 23.965, x: 192, y: 504, angle: 212.6 },
  { src: "/figma/outlook.svg", width: 25.5429, height: 18.9902, x: 386, y: 523, angle: 161.8 },
] as const

const rings = [78, 128, 178, 232]

export function LaunchCard() {
  const gradientId = `launch-sweep-${useId().replace(/:/g, "")}`

  return (
    <div className="relative mx-auto w-full max-w-[520px] [container-type:inline-size]">
      <div className="h-[calc(592px*min(1,100cqw/607px))]">
        <div
          className="relative [zoom:min(1,calc(100cqw/607px))]"
          style={{ width: WIDTH, height: HEIGHT }}
        >
          {rings.map((radius) => (
            <span
              key={radius}
              className="pointer-events-none absolute rounded-full border border-[#7eacf2]"
              style={{
                width: radius * 2,
                height: radius * 2,
                left: CENTER_X - radius,
                top: CENTER_Y - radius,
              }}
            />
          ))}
          <svg
            aria-hidden
            className="launch-sweep pointer-events-none absolute"
            viewBox="0 0 247.5 461.841"
            width={232}
            height={432.93}
            style={{ left: CENTER_X, top: CENTER_Y - 232 }}
          >
            <path
              d="M123.75 461.841C170.934 434.6 207.81 392.55 228.66 342.214C249.51 291.878 253.168 236.069 239.067 183.442C224.965 130.816 193.893 84.3123 150.668 51.1451C107.444 17.9778 54.4832 0 0 0L0 247.5L123.75 461.841Z"
              fill={`url(#${gradientId})`}
            />
            <defs>
              <linearGradient
                id={gradientId}
                x1="0"
                y1="0"
                x2="0"
                y2="495"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="white" />
                <stop offset="0.5" stopColor="#C5E4FD" />
                <stop offset="1" stopColor="#85C5FA" />
              </linearGradient>
            </defs>
          </svg>
          {channels.map((channel) => (
            <span
              key={channel.src}
              className="launch-hit absolute grid size-[52px] place-items-center rounded-[16px] bg-white shadow-[0_8px_18px_rgba(16,24,40,0.08)]"
              style={{
                left: channel.x,
                top: channel.y,
                translate: "-50% -50%",
                animationDelay: `${(channel.angle / 360) * SCAN_SECONDS}s`,
              }}
            >
              <Image
                src={channel.src}
                alt=""
                width={channel.width}
                height={channel.height}
                unoptimized
              />
            </span>
          ))}
          <span
            className="absolute grid size-[108px] place-items-center rounded-[26px] bg-white shadow-[0_12px_28px_rgba(7,84,234,0.16)]"
            style={{ left: 451, top: 286, translate: "-50% -50%" }}
          >
            <Image
              src="/figma/logo-mark.svg"
              alt=""
              width={58.3}
              height={78}
              unoptimized
            />
          </span>
        </div>
      </div>
    </div>
  )
}
