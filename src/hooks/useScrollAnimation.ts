import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-section").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export function useSectionTracking() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (window as any).plausible) {
            (window as any).plausible("Section_Viewed", {
              props: { section: (entry.target as HTMLElement).dataset.section },
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("[data-section]").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export function trackCTA(location: string) {
  if ((window as any).plausible) {
    (window as any).plausible("CTA_Click", { props: { location } });
  }
}

export function getCTALink(section: string) {
  return `https://app.fablino.eu/welcome?utm_source=landing&utm_medium=web&utm_campaign=${section}_cta`;
}
