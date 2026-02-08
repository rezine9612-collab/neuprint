"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type ApiResponse = any;

export default function AnalyzePage() {
  const router = useRouter();

  const [text, setText] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "running" | "done" | "error">("idle");
  const [message, setMessage] = useState<string>("Paste text, then run analysis.");

  // Load any prior intake text if it exists (optional)
  useEffect(() => {
    const t = sessionStorage.getItem("np_intake_text") || "";
    if (t.trim()) {
      setText(t);
      setMessage("Ready. Click Run analysis.");
    }
  }, []);

  const canRun = useMemo(() => status !== "running" && !!text.trim(), [status, text]);

  const run = useCallback(async () => {
    const t = text.trim();
    if (!t) return;

    sessionStorage.setItem("np_intake_text", t);

    setStatus("running");
    setMessage("Generating structural reference...");

    try {
      // External-facing endpoint (rewritten internally to /api)
      const res = await fetch("/engine_v1.1/analyze", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ text: t, input_language: "AUTO" }),
      });

      if (!res.ok) throw new Error("Request failed.");

      const data: ApiResponse = await res.json();
      sessionStorage.setItem("np_last_report", JSON.stringify(data));

      setStatus("done");
      setMessage("Done. Redirecting to report...");
      router.replace("/report");
    } catch (e: any) {
      setStatus("error");
      setMessage(String(e?.message || e || "Unknown error"));
    }
  }, [router, text]);

  return (
    <div className="appPage" style={{ minHeight: "100vh", padding: 24 }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "Barlow, Inter, system-ui, sans-serif", margin: "8px 0 10px" }}>NeuPrint</h1>
        <p style={{ margin: "0 0 16px" }}>{message}</p>

        <label style={{ display: "block", marginBottom: 10, opacity: 0.85 }}>
          Input text
        </label>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste the text you want to analyze…"
          style={{
            width: "100%",
            minHeight: 240,
            resize: "vertical",
            padding: 14,
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(0,0,0,0.25)",
            color: "inherit",
            outline: "none",
          }}
        />

        <div style={{ display: "flex", gap: 10, marginTop: 14, alignItems: "center", flexWrap: "wrap" }}>
          <button
            onClick={run}
            disabled={!canRun}
            style={{
              padding: "10px 14px",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.22)",
              opacity: canRun ? 1 : 0.5,
              cursor: canRun ? "pointer" : "not-allowed",
            }}
          >
            Run analysis
          </button>

          {status === "error" ? (
            <button
              onClick={() => {
                setStatus("idle");
                setMessage("Paste text, then run analysis.");
              }}
              style={{ padding: "10px 14px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.22)" }}
            >
              Reset
            </button>
          ) : null}

          {status === "done" ? (
            <button
              onClick={() => router.replace("/report")}
              style={{ padding: "10px 14px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.22)" }}
            >
              Open report
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
