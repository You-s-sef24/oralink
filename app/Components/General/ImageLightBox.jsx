"use client";

import { useState, useEffect, useCallback } from "react";

function getUrl(img) {
  if (!img) return null;
  if (img instanceof File) return URL.createObjectURL(img);
  if (typeof img === "string") return img;
  return null;
}

export default function ImageLightbox({ images, startIndex = 0, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setCurrent((i) => (i + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <style>{`
                @keyframes lb-fade { from { opacity: 0 } to { opacity: 1 } }
                @keyframes lb-scale { from { opacity: 0; transform: scale(0.95) } to { opacity: 1; transform: scale(1) } }
                .lb-overlay { position: fixed; inset: 0; z-index: 9999; background: rgba(0,0,0,0.92); display: flex; flex-direction: column; align-items: center; justify-content: center; animation: lb-fade 0.18s ease; }
                .lb-btn { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fff; width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.15s, transform 0.15s; flex-shrink: 0; }
                .lb-btn:hover { background: rgba(255,255,255,0.25); transform: scale(1.08); }
                .lb-thumb { width: 56px; height: 56px; object-fit: cover; border-radius: 6px; cursor: pointer; border: 2px solid transparent; opacity: 0.5; transition: opacity 0.15s, border-color 0.15s, transform 0.15s; }
                .lb-thumb:hover { opacity: 0.85; transform: scale(1.06); }
                .lb-thumb.lb-active { border-color: #fff; opacity: 1; }
                .lb-main-img { max-height: 75vh; max-width: 100%; object-fit: contain; border-radius: 8px; box-shadow: 0 8px 40px rgba(0,0,0,0.6); animation: lb-scale 0.2s ease; }
            `}</style>

      {/* Backdrop — click to close */}
      <div className="lb-overlay" onClick={onClose}>
        {/* Close */}
        <button
          className="lb-btn"
          onClick={onClose}
          aria-label="Close"
          style={{ position: "absolute", top: 16, right: 16 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Counter */}
        {images.length > 1 && (
          <div
            style={{
              position: "absolute",
              top: 22,
              left: "50%",
              transform: "translateX(-50%)",
              color: "rgba(255,255,255,0.65)",
              fontSize: 13,
              letterSpacing: 1,
            }}
          >
            {current + 1} / {images.length}
          </div>
        )}

        {/* Nav row */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            maxWidth: "90vw",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {images.length > 1 && (
            <button className="lb-btn" onClick={prev} aria-label="Previous">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          <img
            key={current}
            src={getUrl(images[current])}
            alt={`Image ${current + 1}`}
            className="lb-main-img"
          />

          {images.length > 1 && (
            <button className="lb-btn" onClick={next} aria-label="Next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "flex",
              gap: 8,
              marginTop: 20,
              flexWrap: "wrap",
              justifyContent: "center",
              maxWidth: "80vw",
            }}
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                src={getUrl(img)}
                alt={`Thumb ${idx + 1}`}
                className={`lb-thumb${idx === current ? " lb-active" : ""}`}
                onClick={() => setCurrent(idx)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
