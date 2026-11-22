import Image from "next/image"

const bars = [
  { left: -2, top: 260, height: 52 },
  { left: 23, top: 277, height: 35 },
  { left: 47, top: 217, height: 95 },
  { left: 72, top: 155, height: 157 },
  { left: 98, top: 172, height: 140 },
  { left: 123, top: 180, height: 132 },
  { left: 146, top: 124, height: 188, dark: true },
  { left: 169, top: 180, height: 132 },
  { left: 195, top: 144, height: 168 },
  { left: 220, top: 135, height: 177 },
  { left: 245, top: 164, height: 148 },
  { left: 270, top: 155, height: 157 },
]

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export function PositionCards() {
  return (
    <div className="relative ml-auto w-full max-w-[700px] [container-type:inline-size]">
      <div className="h-[calc(590px*min(1,100cqw/700px))]">
        <div className="relative h-[590px] w-[700px] [zoom:min(1,calc(100cqw/700px))]">
          <ChartCard
            className="top-[68px] left-[410px] shadow-[0_2px_3.8px_rgba(7,84,234,0.06)]"
            title="PROOF"
            label="Case Proof"
            body="Numerous meeting carried on the deck they trust"
          />
          <SignalsCard className="top-[160px] left-[205px]" />
          <ChartCard
            className="top-[249px] left-0 z-[1] shadow-[0_2px_3.8px_3px_rgba(7,84,234,0.06)]"
            title="TARGETS"
            label="Lead Magnet"
            body="Name the industries and Gulf roles the first line meets."
          />
          <div className="pointer-events-none absolute top-[0.15px] left-[95.16px] flex h-[332.837px] w-[313.842px] items-center justify-center">
            <div className="-scale-y-100 rotate-[-50.39deg]">
              <Image
                src="/figma/stage/position/arc-upper.svg"
                alt=""
                width={301.306}
                height={158.695}
                unoptimized
              />
            </div>
          </div>
          <div className="pointer-events-none absolute top-[406.47px] left-[289.18px] flex h-[152.178px] w-[327.938px] items-center justify-center">
            <div className="rotate-[159.05deg]">
              <Image
                src="/figma/stage/position/arc-lower.svg"
                alt=""
                width={338.625}
                height={34.9974}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChartCard({
  title,
  label,
  body,
  className,
}: {
  title: string
  label: string
  body: string
  className: string
}) {
  return (
    <article
      className={`absolute h-[336px] w-[289px] overflow-hidden rounded-[21px] border border-[#e5e5e5] bg-white ${className}`}
    >
      {bars.map((bar) => (
        <span
          key={`${bar.left}-${bar.top}`}
          className="absolute w-[18px] bg-gradient-to-b from-white via-[#c5e4fd] to-[#85c5fa]"
          style={{
            left: bar.left,
            top: bar.top,
            height: bar.height,
            backgroundImage: bar.dark
              ? "linear-gradient(to bottom, #ffffff, #c5e4fd, #3677ce)"
              : undefined,
          }}
        />
      ))}
      <span className="pointer-events-none absolute top-[104px] left-[56px] h-[83px] w-[232px] bg-gradient-to-b from-white/60 to-white/35 blur-[6px]" />
      <div className="absolute top-[312px] left-0 flex w-full justify-between px-[2px] text-[6.737px] leading-[13.5px] text-[#c8c8c8]">
        {months.map((month) => (
          <span key={month}>{month}</span>
        ))}
      </div>
      <CardCopy title={title} label={label} body={body} />
    </article>
  )
}

function SignalsCard({ className }: { className: string }) {
  return (
    <article
      className={`absolute h-[336px] w-[289px] overflow-hidden rounded-[21px] border border-[#e5e5e5] ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(211deg, rgb(141, 201, 251) 28%, #fff 54%, #fff 88%, rgba(137, 189, 255, 0.48) 136%)",
      }}
    >
      <p className="absolute top-[126px] left-[23px] text-xs leading-3 text-[#a4a4a4]">Funding</p>
      <Image
        src="/figma/stage/position/grid.svg"
        alt=""
        width={313}
        height={160.5}
        unoptimized
        className="absolute top-[151px] left-[-10px]"
      />
      <Image
        src="/figma/stage/position/wave.svg"
        alt=""
        width={335.196}
        height={128.773}
        unoptimized
        className="absolute top-[136px] left-[-29px]"
      />
      <Image
        src="/figma/stage/position/line-h.svg"
        alt=""
        width={156}
        height={1}
        unoptimized
        className="absolute top-[136px] left-[78px]"
      />
      <span className="absolute top-[136px] left-[234px] inline-flex h-[156px] w-px items-center justify-center">
        <span className="rotate-90">
          <Image src="/figma/stage/position/line-v.svg" alt="" width={156} height={1} unoptimized />
        </span>
      </span>
      <Image
        src="/figma/stage/position/dot-outer.svg"
        alt=""
        width={8}
        height={8}
        unoptimized
        className="absolute top-[132px] left-[230px]"
      />
      <Image
        src="/figma/stage/position/dot-mid.svg"
        alt=""
        width={6}
        height={6}
        unoptimized
        className="absolute top-[133px] left-[231px]"
      />
      <Image
        src="/figma/stage/position/dot-core.svg"
        alt=""
        width={12}
        height={12}
        unoptimized
        className="absolute top-[130px] left-[228px]"
      />
      <Image
        src="/figma/stage/position/dot-glow.svg"
        alt=""
        width={6}
        height={6}
        unoptimized
        className="absolute top-[133px] left-[231px] mix-blend-plus-lighter"
      />
      <p className="absolute top-[282px] left-[214px] text-xs leading-3 text-[#a4a4a4]">Hiring</p>
      <CardCopy
        title="SIGNALS"
        label="Lead Magnet"
        body="Hiring and Funding say when it is time to reach out"
      />
    </article>
  )
}

function CardCopy({ title, label, body }: { title: string; label: string; body: string }) {
  return (
    <div className="absolute top-[21px] left-[23px] flex w-[241px] flex-col gap-3">
      <p className="font-heading text-[18.092px] leading-[20.677px] font-medium tracking-[0.18px] text-[#211d25]">
        {title}
      </p>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <p className="font-heading text-base leading-6 font-medium text-[#787b80]">{label}</p>
          <span className="inline-flex items-center rounded-[2px] bg-[#c6f0e0] py-[2px] pr-1 pl-0.5">
            <span className="inline-flex size-[8.5px] items-center justify-center">
              <span className="-rotate-[41deg]">
                <Image
                  src="/figma/stage/position/trend-arrow.svg"
                  alt=""
                  width={6}
                  height={6}
                  unoptimized
                />
              </span>
            </span>
            <span className="text-[6.833px] leading-[8.8px] text-[#23d592]">20%</span>
          </span>
        </div>
        <p className="font-heading text-sm leading-[18px] font-medium text-[#abb2bc]">{body}</p>
      </div>
    </div>
  )
}
