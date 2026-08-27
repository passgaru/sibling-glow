import { useEffect, useRef, useState } from "react";
import { musicSrc } from "@/data/rakhiData";

/**
 * Plays the optional royalty-free track from `musicSrc`. If no track is set,
 * a soft synthesised drone is generated in-browser (no copyrighted audio).
 */
export function AudioController() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ctxRef = useRef<{ ctx: AudioContext; gain: GainNode } | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = muted ? 0 : volume;
    }
    if (ctxRef.current) {
      ctxRef.current.gain.gain.value = muted ? 0 : volume * 0.06;
    }
  }, [volume, muted]);

  useEffect(() => {
    return () => {
      ctxRef.current?.ctx.close().catch(() => {});
    };
  }, []);

  const startSynth = () => {
    if (ctxRef.current) {
      void ctxRef.current.ctx.resume();
      return;
    }
    const Ctor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return;
    const ctx = new Ctor();
    const gain = ctx.createGain();
    gain.gain.value = muted ? 0 : volume * 0.06;
    gain.connect(ctx.destination);
    [110, 164.81, 220].forEach((f, i) => {
      const osc = ctx.createOscillator();
      osc.type = i === 2 ? "triangle" : "sine";
      osc.frequency.value = f;
      const g = ctx.createGain();
      g.gain.value = 0.4 / (i + 1);
      osc.connect(g).connect(gain);
      osc.start();
    });
    ctxRef.current = { ctx, gain };
  };

  const toggle = () => {
    if (playing) {
      audioRef.current?.pause();
      void ctxRef.current?.ctx.suspend();
      setPlaying(false);
      return;
    }
    if (musicSrc && audioRef.current) {
      void audioRef.current.play().catch(() => {});
    } else {
      startSynth();
    }
    setPlaying(true);
  };

  return (
    <div className="fixed bottom-4 left-4 z-40 flex items-center gap-2 rounded-full glass px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      {musicSrc && <audio ref={audioRef} src={musicSrc} loop preload="none" />}
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause ambience" : "Play ambience"}
        className="flex h-9 w-9 items-center justify-center rounded-full text-ivory/80 transition hover:text-gold"
      >
        <span className="flex items-end gap-[2px]" aria-hidden>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`w-[2px] rounded-full bg-current transition-all duration-500 ${
                playing && !muted ? "animate-soft-glow" : ""
              }`}
              style={{ height: playing && !muted ? `${6 + i * 4}px` : "6px", animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </span>
      </button>
      <button
        type="button"
        onClick={() => setMuted((m) => !m)}
        aria-label={muted ? "Unmute" : "Mute"}
        aria-pressed={muted}
        className="text-[0.6rem] uppercase tracking-[0.2em] text-ivory/60 transition hover:text-gold"
      >
        {muted ? "Muted" : "Sound"}
      </button>
      <label className="sr-only" htmlFor="vol">
        Volume
      </label>
      <input
        id="vol"
        type="range"
        min={0}
        max={1}
        step={0.05}
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        className="h-1 w-16 cursor-pointer accent-[var(--gold)]"
      />
    </div>
  );
}
