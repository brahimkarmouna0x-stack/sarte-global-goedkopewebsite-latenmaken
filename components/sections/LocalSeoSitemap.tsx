import Link from "next/link";

import { LOCAL_BUSINESSES } from "@/constants";
import { CITIES, LOCATION_SERVICES } from "@/constants/locations";

const LOCATION_PREFIX = LOCATION_SERVICES[0]!.prefix;

export function LocalSeoSitemap() {
  return (
    <details className="seo-directory">
      <summary className="seo-directory__trigger">
        Onze goedkope websites per branche & stad (Klik om te openen)
      </summary>
      <div className="seo-directory__content">
        <p className="seo-directory__sub">
          Sarte Global bouwt professionele én goedkope websites voor diverse branches en steden door heel Nederland.
          Hieronder vind je een overzicht van de branches en locaties waar wij actief zijn.
        </p>

        <h3 className="seo-directory__section-title">Goedkope websites per branche</h3>
        <div className="seo-directory__grid">
          {LOCAL_BUSINESSES.map((biz) => (
            <Link
              key={biz.slug}
              href="#cta"
              className="seo-directory__item seo-directory__item-link"
            >
              Goedkope website voor {biz.title.toLowerCase()}
            </Link>
          ))}
        </div>

        <h3 className="seo-directory__section-title">Goedkope websites per stad</h3>
        <div className="seo-directory__grid">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/${LOCATION_PREFIX}-${city.slug}`}
              className="seo-directory__item seo-directory__item-link"
            >
              Goedkope website laten maken in {city.name}
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}
