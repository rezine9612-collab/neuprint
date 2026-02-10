"use client";

import { useEffect } from "react";

export default function AnalyzePage() {
  useEffect(() => {
    (async () => {
      try {
        await import("../../lib/client/intake");
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div className="appPage" dangerouslySetInnerHTML={ __html: "<div class=\"page\">\n<main class=\"main\">\n<div class=\"container\">\n<section aria-label=\"Neuprint main entry\" class=\"hero\">\n<div class=\"brand\">\n<img alt=\"NeuPrint Logo\" class=\"brandLogo enterY\" id=\"brandLogo\" src=\"/assets/neuprint_logo.svg\"/>\n<div class=\"brandline enterY\" id=\"brandline\">\n<span>NeuPrint Cognitive Forensics Engine v1.1</span>\n</div>\n</div>\n<h1 id=\"heroTitle\">\n<span class=\"typeLine\" id=\"titleLine1\"></span><br/>\n<span class=\"typeLine\" id=\"titleLine2\"></span>\n</h1>\n<p class=\"subtitle enterY\" id=\"heroSubtitle\"></p>\n<div class=\"intakeWrap\">\n<div class=\"intakeBox enterY\" id=\"intakeBox\">\n<textarea aria-label=\"Text intake\" class=\"intakeText\" id=\"intakeText\" placeholder=\"Paste text to establish a cognitive reference.\"></textarea>\n<div aria-label=\"Input tools (placeholders)\" class=\"intakeTools\">\n<button aria-label=\"Attach file (placeholder)\" class=\"iconBtn\" title=\"Attach file (placeholder)\" type=\"button\">\n<span aria-hidden=\"true\" class=\"material-symbols--attach-file-rounded\"></span>\n</button>\n<button aria-label=\"Voice record (placeholder)\" class=\"iconBtn\" title=\"Voice record (placeholder)\" type=\"button\">\n<span aria-hidden=\"true\" class=\"material-symbols--mic\"></span>\n</button>\n<button aria-label=\"Image search (placeholder)\" class=\"iconBtn\" title=\"Image search (placeholder)\" type=\"button\">\n<span aria-hidden=\"true\" class=\"material-symbols--center-focus-weak-outline\"></span>\n</button>\n</div>\n</div>\n<div aria-label=\"Sample quick inserts\" class=\"sampleRow enterY\" id=\"sampleRow\">\n<button class=\"sampleBtn\" data-sample=\"sample1 \uc785\ub2c8\ub2e4.\" type=\"button\">Sample 1</button>\n<button class=\"sampleBtn\" data-sample=\"sample2 \uc785\ub2c8\ub2e4.\" type=\"button\">Sample 2</button>\n<button class=\"sampleBtn\" data-sample=\"sample3 \uc785\ub2c8\ub2e4.\" type=\"button\">Sample 3</button>\n<button class=\"sampleBtn\" data-sample=\"sample4 \uc785\ub2c8\ub2e4.\" type=\"button\">Sample 4</button>\n<button class=\"sampleBtn\" data-sample=\"sample5 \uc785\ub2c8\ub2e4.\" type=\"button\">Sample 5</button>\n</div>\n<button aria-label=\"Generate reference\" class=\"cta enterY\" id=\"ctaBtn\" type=\"button\">\n              Generate reference\n              <span aria-hidden=\"true\" class=\"material-symbols-outlined ctaArrow\">arrow_right_alt</span>\n</button>\n<footer aria-label=\"Footer\" class=\"footer enterY\" id=\"footer\" role=\"contentinfo\">\n              Copyright \u00a9 2026 Neuprint. All rights reserved. U.S. entity in formation.\n            </footer>\n</div>\n</section>\n</div>\n</main>\n</div>" } />
  );
}
