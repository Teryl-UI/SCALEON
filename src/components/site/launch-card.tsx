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
          <span
            aria-hidden
            className="launch-scan pointer-events-none absolute rounded-full blur-[10px]"
            style={{
              width: 500,
              height: 500,
              left: CENTER_X - 250,
              top: CENTER_Y - 250,
              background:
                "conic-gradient(from 0deg, transparent 0deg, transparent 286deg, rgba(186,214,255,0.05) 314deg, rgba(168,206,255,0.45) 346deg, rgba(196,220,255,0.72) 360deg)",
            }}
          />
          <span
            aria-hidden
            className="launch-scan pointer-events-none absolute rounded-full"
            style={{
              width: 464,
              height: 464,
              left: CENTER_X - 232,
              top: CENTER_Y - 232,
              background:
                "conic-gradient(from 0deg, transparent 0deg, transparent 292deg, rgba(190,218,255,0.08) 318deg, rgba(170,208,255,0.42) 348deg, rgba(214,232,255,0.78) 360deg)",
            }}
          />
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
            className="absolute grid size-[86px] place-items-center rounded-[22px] bg-white shadow-[0_12px_28px_rgba(7,84,234,0.16)]"
            style={{ left: 451, top: 286, translate: "-50% -50%" }}
          >
            <Image
              src="/figma/logo-mark.svg"
              alt=""
              width={31.7598}
              height={42.5149}
              unoptimized
            />
          </span>
        </div>
      </div>
    </div>
  )
}
