import Image from "next/image"

const CARD_WIDTH = 471
const CARD_HEIGHT = 547.6

export function CompoundCard() {
  return (
    <div className="relative ml-auto w-full max-w-[471px] [container-type:inline-size]">
      <div className="h-[calc(547.6px*min(1,100cqw/471px))]">
        <article
          className="relative overflow-hidden rounded-[34.225px] border-[1.63px] border-[#e5e5e5] [zoom:min(1,calc(100cqw/471px))]"
          style={{
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            backgroundImage:
              "linear-gradient(211.367deg, rgb(137, 189, 255) 27.927%, rgb(255, 255, 255) 53.594%, rgb(255, 255, 255) 88.138%, rgba(137, 189, 255, 0.48) 136.37%)",
          }}
        >
          <Image
            src="/figma/stage/compound/spark.svg"
            alt=""
            width={3.25952}
            height={3.25952}
            unoptimized
            className="absolute top-[242.83px] left-[130.38px]"
          />
          <div className="absolute top-[35.85px] left-[39.11px] z-[2] w-[392.77px]">
            <div className="flex h-10 items-center justify-between">
              <p className="font-heading text-[26.076px] leading-[39.114px] font-medium text-[#787b80]">
                Winning Angle
              </p>
              <span className="inline-flex h-[21.36px] items-center rounded-[3.26px] bg-[#c6f0e0] py-[3.18px] pr-[6.52px] pl-[3.26px]">
                <span className="inline-flex size-[13.796px] items-center justify-center">
                  <span className="rotate-[-41.04deg]">
                    <Image
                      src="/figma/stage/compound/trend-arrow.svg"
                      alt=""
                      width={9.77855}
                      height={9.77855}
                      unoptimized
                    />
                  </span>
                </span>
                <span className="text-[11.137px] leading-[14.319px] text-[#23d592]">Success</span>
              </span>
            </div>
            <p className="font-heading text-[65.19px] leading-[71.709px] font-medium text-[#5b86c4]">
              68%
            </p>
          </div>
          <Image
            src="/figma/stage/compound/wave.svg"
            alt=""
            width={546.289}
            height={209.868}
            unoptimized
            className="absolute top-[222.83px] left-[-45.79px]"
          />
          <span className="absolute top-[223.28px] left-[382.18px] inline-flex h-[254.242px] w-[1.63px] items-center justify-center">
            <span className="rotate-90">
              <Image
                src="/figma/stage/compound/line-v.svg"
                alt=""
                width={254.242}
                height={1.62976}
                unoptimized
              />
            </span>
          </span>
          <Image
            src="/figma/stage/compound/line-h.svg"
            alt=""
            width={254.242}
            height={1.62976}
            unoptimized
            className="absolute top-[222.46px] left-[128.75px]"
          />
          <Image
            src="/figma/stage/compound/dot-outer.svg"
            alt=""
            width={13.0381}
            height={13.0381}
            unoptimized
            className="absolute top-[216.76px] left-[376.47px]"
          />
          <Image
            src="/figma/stage/compound/dot-mid.svg"
            alt=""
            width={9.77855}
            height={9.77855}
            unoptimized
            className="absolute top-[218.39px] left-[378.1px]"
          />
          <Image
            src="/figma/stage/compound/dot-core.svg"
            alt=""
            width={19.5571}
            height={19.5571}
            unoptimized
            className="absolute top-[213.5px] left-[373.22px] mix-blend-lighten"
          />
          <Image
            src="/figma/stage/compound/dot-glow.svg"
            alt=""
            width={9.77855}
            height={9.77855}
            unoptimized
            className="absolute top-[218.39px] left-[378.1px] mix-blend-plus-lighter"
          />
          <Image
            src="/figma/stage/compound/grid.svg"
            alt=""
            width={510.114}
            height={261.577}
            unoptimized
            className="absolute top-[247.32px] left-[-14.67px]"
          />
          <div className="absolute top-[328.95px] left-[20.98px] flex h-[190.307px] w-[424.634px] items-center justify-center">
            <div className="rotate-[-3.93deg]">
              <OfferCard ghost />
            </div>
          </div>
          <div className="absolute top-[273.8px] left-[26.08px]">
            <OfferCard />
          </div>
        </article>
      </div>
    </div>
  )
}

function OfferCard({ ghost = false }: { ghost?: boolean }) {
  return (
    <div
      className={`flex w-[414.48px] flex-col gap-[22.165px] rounded-[24.381px] px-[22.165px] py-[19.557px] ${
        ghost
          ? "bg-gradient-to-b from-[rgba(54,58,67,0.39)] to-[rgba(86,102,131,0.39)] opacity-[0.32]"
          : "bg-gradient-to-b from-[#0754ea] to-[#2359c0]"
      }`}
    >
      <div className="flex items-center justify-between">
        <p className="font-heading text-[26.598px] leading-[26.598px] font-normal text-white">
          The next offer
        </p>
        <span className="inline-flex w-[93.092px] items-center justify-center rounded-[44.329px] bg-[#4f89fb] p-[8.866px] text-[17.732px] leading-[22.165px] text-white">
          READY
        </span>
      </div>
      <p className="font-heading text-[26.598px] leading-[26.598px] font-medium text-[#eaeaea]">
        Rifler Constructions
      </p>
      <div className="h-[11.082px] w-full rounded-[44.329px] bg-[#ccc]">
        <div
          className={`h-[11.082px] w-[281.492px] rounded-[8.866px] ${
            ghost
              ? "bg-gradient-to-r from-[rgba(11,73,194,0.42)] to-[rgba(4,47,132,0.42)]"
              : "bg-gradient-to-r from-[#0b49c2] to-[#042f84]"
          }`}
        />
      </div>
    </div>
  )
}
