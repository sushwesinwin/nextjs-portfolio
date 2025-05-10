"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function HomePage() {
  return (
    <div className="flex flex-col  items-center justify-center mt-50">
      <div className="text-center">
        <h1 className="font-bold text-3xl md:text-5xl leading-tight text-zinc-50">
          Su Shwe Sin Win
        </h1>
        <TextAnimate
          animation="slideUp"
          by="word"
          className="text-zinc-400 text-sm md:text-base mt-8 leading-loose tracking-wide"
        >
          Constantly seeking opportunities to learn, grow and level-up.
        </TextAnimate>
      </div>

        <ShimmerButton href="/cv.pdf" download="cv.pdf" className="mt-10">
          Download CV
        </ShimmerButton>
       
    </div>
  );
}
