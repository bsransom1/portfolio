/** Persist scroll position when navigating away from the homepage (e.g. to a case study). */
export function saveHomepageScrollPosition() {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("homepage-scroll", window.scrollY.toString());
  }
}

export function scrollToWorkSection() {
  document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
}
