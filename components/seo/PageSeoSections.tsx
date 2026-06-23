import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { PageSeoContent } from "@/constants/page-seo";

interface PageSeoSectionsProps {
  /** The unique per-page content block (authority / deep / conversion). */
  readonly content: PageSeoContent;
  /**
   * Prefix for the section heading `id`s. Must be unique per page so the three
   * generated headings never collide with other sections on the same route.
   */
  readonly idPrefix: string;
}

/**
 * Renders the three mandatory on-page SEO sections — Authority, Deep-topic and
 * Conversion — from a single typed content object. Reuses the proven `nws` /
 * `lp-intro` styling so it matches the existing design system exactly and adds
 * no new visual language. Every page passes its own unique {@link PageSeoContent}
 * so the copy is distinct per route (no duplicate-content risk).
 */
export function PageSeoSections({ content, idPrefix }: PageSeoSectionsProps) {
  const { authority, deep, conversion } = content;
  const authId = `${idPrefix}-authority-h`;
  const deepId = `${idPrefix}-deep-h`;
  const convId = `${idPrefix}-conversion-h`;

  return (
    <section className="nws page-seo" aria-label="Meer informatie en waarom Sarte Global">
      <Container>
        {/* SECTIE 1 — Autoriteit: expertise, proces en vertrouwen */}
        <Reveal as="div" className="nws__block" ariaLabelledby={authId}>
          <header className="nws__head">
            <span className="eyebrow">{authority.eyebrow}</span>
            <h2 className="h2 nws__title" id={authId}>
              {authority.title}
            </h2>
            <p className="sub nws__intro">{authority.intro}</p>
          </header>
          <ul className="nws__advantages">
            {authority.pillars.map((pillar, index) => (
              <li key={pillar.title} className="nws__advantage">
                <span className="nws__advantage-num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="nws__advantage-title">{pillar.title}</h3>
                <p className="nws__advantage-desc">{pillar.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* SECTIE 2 — Verdieping: uitgebreide, relevante informatie */}
        <Reveal as="div" className="nws__block" ariaLabelledby={deepId}>
          <header className="nws__head">
            <span className="eyebrow">{deep.eyebrow}</span>
            <h2 className="h2 nws__title" id={deepId}>
              {deep.title}
            </h2>
          </header>
          <div className="nws__meaning">
            <div className="nws__paragraphs">
              {deep.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="nws__points">
              {deep.points.map((point) => (
                <li key={point.title} className="nws__point">
                  <h3 className="nws__point-title">{point.title}</h3>
                  <p className="nws__point-desc">{point.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* SECTIE 3 — Conversie: vertrouwen, beslissingshulp, FAQ en CTA */}
        <Reveal as="div" className="nws__block" ariaLabelledby={convId}>
          <header className="nws__head">
            <span className="eyebrow">{conversion.eyebrow}</span>
            <h2 className="h2 nws__title" id={convId}>
              {conversion.title}
            </h2>
            <p className="sub nws__intro">{conversion.intro}</p>
          </header>

          <ul className="lp-intro__benefits page-seo__benefits">
            {conversion.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>

          {conversion.faq && conversion.faq.length > 0 && (
            <dl className="page-seo__faq">
              {conversion.faq.map((item) => (
                <div key={item.question} className="page-seo__faq-item">
                  <dt className="page-seo__faq-q">{item.question}</dt>
                  <dd className="page-seo__faq-a">{item.answer}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="page-seo__cta">
            <Link href={conversion.ctaHref} className="btn btn-primary">
              {conversion.ctaLabel}
              <span className="arr" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
