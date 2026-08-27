import type { ReactNode } from "react";
import { Atmosphere } from "./Atmosphere";
import { AudioController } from "./AudioController";
import { ScrollProgress } from "./ChapterShell";

export function GiftChrome({
  children,
  progress = false,
}: {
  children: ReactNode;
  progress?: boolean;
}) {
  return (
    <>
      <Atmosphere />
      <AudioController />
      {progress ? <ScrollProgress /> : null}
      {children}
    </>
  );
}
