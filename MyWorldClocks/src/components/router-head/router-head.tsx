import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title || "World Clocks – Global Time Zones by Continent"}</title>
      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      {/* SEO Meta Tags */}
      <meta name="description" content="World Clocks is a modern web app to view current times in major cities across all continents. Instantly check time zones for Asia, Europe, Africa, North America, South America, Australia, and Antarctica." />
      <meta name="keywords" content="world clocks, time zones, global time, city clocks, continent clocks, qwik, tailwind, major cities, current time" />
      <meta name="author" content="Your Name or Organization" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="World Clocks – Global Time Zones by Continent" />
      <meta property="og:description" content="Easily view the current time in major cities worldwide. Navigate by continent and stay in sync with global time zones." />
      <meta property="og:image" content="/world-clock.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={loc.url.href} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="World Clocks – Global Time Zones by Continent" />
      <meta name="twitter:description" content="Check the current time in major cities across the world. Fast, responsive, and easy to use." />
      <meta name="twitter:image" content="/world-clock.png" />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "World Clocks",
          "description": "View current times in major cities across all continents.",
          "applicationCategory": "Productivity",
          "operatingSystem": "All",
          "url": loc.url.href,
          "image": "/world-clock.png"
        })}
      />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.style })}
        />
      ))}

      {head.scripts.map((s) => (
        <script
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.script })}
        />
      ))}

      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </>
  );
});
