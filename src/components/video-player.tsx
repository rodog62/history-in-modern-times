import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function VideoPlayer({
  src,
  poster,
  title,
  caption,
}: {
  src: string;
  poster?: string;
  title: string;
  caption?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const onTime = () => setProgress(el.currentTime);
    const onMeta = () => setDuration(el.duration || 0);
    const onEnd = () => setPlaying(false);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("loadedmetadata", onMeta);
    el.addEventListener("ended", onEnd);
    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("loadedmetadata", onMeta);
      el.removeEventListener("ended", onEnd);
    };
  }, [src]);

  function toggle() {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  }

  const pct = duration > 0 ? (progress / duration) * 100 : 0;

  return (
    <figure className="overflow-hidden rounded-lg bg-navy-deep">
      <div className="relative aspect-video bg-navy-deep">
        <video
          ref={videoRef}
          className="size-full object-cover"
          poster={poster}
          playsInline
          preload="metadata"
          src={src}
          onClick={toggle}
        />
        <button
          type="button"
          onClick={toggle}
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-opacity duration-200",
            playing ? "opacity-0 hover:opacity-100" : "opacity-100",
          )}
          aria-label={playing ? "Pause" : `Play ${title}`}
        >
          <span className="flex size-16 items-center justify-center rounded-full bg-gold text-navy-deep sm:size-[4.5rem]">
            {playing ? (
              <Pause className="size-7 fill-current" />
            ) : (
              <Play className="ml-0.5 size-7 fill-current" />
            )}
          </span>
        </button>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent px-4 pb-3 pt-10">
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={progress}
            aria-label="Seek"
            className="h-1 w-full cursor-pointer appearance-none bg-cream/20 accent-gold"
            onChange={(e) => {
              const el = videoRef.current;
              const next = Number(e.target.value);
              if (el) el.currentTime = next;
              setProgress(next);
            }}
          />
          <div className="mt-1.5 flex justify-between font-sans text-[0.7rem] tabular-nums tracking-wide text-cream/70">
            <span>{formatTime(progress)}</span>
            <span className="sr-only">{pct.toFixed(0)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
      {caption ? (
        <figcaption className="border-t border-gold/20 bg-navy px-4 py-3 font-sans text-xs tracking-wide text-cream/65">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
