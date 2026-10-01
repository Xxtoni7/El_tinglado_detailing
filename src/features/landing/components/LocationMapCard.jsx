import logo from "../../../assets/images/Logo.PNG";
import { business } from "../data/business.js";

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M15 3h6v6" />
      <path d="m10 14 11-11" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function LocationMapCard() {
  return (
    <section
      aria-label="Ubicación de El Tinglado Detailing en General Pacheco"
      className="relative min-h-62.5 overflow-hidden rounded-[20px] bg-navy text-white md:flex-1"
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 size-full"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 680 250"
      >
        <rect fill="#10213D" height="250" width="680" />
        <g opacity="0.28" stroke="#D9E0EA" strokeLinecap="round">
          <path d="M-35 52 188 160 310 130 715 218" strokeWidth="20" />
          <path d="M96 -24 238 98 416 67 598 -18" strokeWidth="14" />
          <path d="M356 -25 335 80 384 147 344 275" strokeWidth="16" />
          <path d="M548 -20 526 72 555 143 530 278" strokeWidth="12" />
          <path d="M-12 222 142 177 254 202 446 176 704 104" strokeWidth="14" />
        </g>
        <g opacity="0.32" stroke="#8290A6" strokeLinecap="round" strokeWidth="2">
          <path d="M3 20 166 108 302 92 469 123 667 57" />
          <path d="M48 266 112 145 76 34" />
          <path d="M218 -12 286 55 250 132 291 260" />
          <path d="M453 -14 435 64 475 208 448 270" />
          <path d="M631 -15 606 83 641 167 618 272" />
        </g>
        <path
          d="M-20 214C91 198 151 169 229 174c78 6 121 17 180-7 62-26 100-71 172-75 41-2 83 8 122 25"
          stroke="#C8E632"
          strokeLinecap="round"
          strokeWidth="7"
        />
        <circle cx="530" cy="111" fill="#C8E632" r="7" />
        <circle cx="530" cy="111" r="15" stroke="#C8E632" strokeOpacity="0.35" strokeWidth="5" />
      </svg>

      <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/90 to-navy/15" />

      <div className="relative flex h-full min-h-62.5 flex-col justify-between p-6 sm:p-7">
        <div className="max-w-80">
          <div className="mb-3 flex items-center gap-3">
            <img
              alt=""
              className="size-10 rounded-full border border-lime/50"
              src={logo}
            />
            <h4 className="font-heading text-xl leading-tight font-bold">
              Estamos en General Pacheco
            </h4>
          </div>
          <p className="text-sm leading-relaxed text-white/75">
            {business.address}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-lime px-5 text-sm font-bold text-navy transition hover:scale-[1.03]"
            href={business.googleMapsUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Google Maps
            <ExternalLinkIcon />
          </a>
          <a
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-navy transition hover:scale-[1.03]"
            href={business.wazeUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Waze
            <ExternalLinkIcon />
          </a>
        </div>
      </div>

      <div className="absolute top-[52%] right-[8%] grid size-11 place-items-center rounded-full bg-lime p-1.5 shadow-[0_10px_28px_rgba(0,0,0,0.35)] sm:top-[34%] sm:right-[18%] sm:size-14">
        <img alt="" className="size-full rounded-full" src={logo} />
      </div>
    </section>
  );
}

export default LocationMapCard;
