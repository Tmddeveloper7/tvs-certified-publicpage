"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

export function LeadSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const posterAlt =
    "TVS Certified B2B auction platform video poster showing workshop";

  useEffect(() => {
    if (!isVideoOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsVideoOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isVideoOpen]);

  function handleOpenVideo() {
    setIsVideoOpen(true);
  }

  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-white text-white">
      <Image
        src="/tvs.jpeg"
        alt={posterAlt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0A1F44]/30" />

      <div className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center px-6 py-10 text-center">
        <h2 className="text-3xl font-bold leading-tight md:text-5xl">
          TVS Certified is the leading B2B
          <br />
          auction platform
        </h2>
      <button
  type="button"
  aria-label="Play TVS Certified introduction video"
  onClick={handleOpenVideo}
  className="mt-10 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm play-btn-anim
        hover:scale-110 transition-transform
  "
>
  <AiOutlinePlayCircle className="h-14 w-14" />
</button>
        <p className="mt-8 text-lg font-medium text-white/90">
          Have time? Watch the Video to know more about us
        </p>
      </div>

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label="TVS Certified introduction video"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close video popup"
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
              onClick={() => setIsVideoOpen(false)}
            >
              <IoClose className="h-6 w-6" />
            </button>
            <video
              className="aspect-video w-full"
              controls
              autoPlay
              playsInline
              poster="/tvs.jpeg"
              preload="metadata"
            >
              <source src="/TVS-1080p-240721.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
