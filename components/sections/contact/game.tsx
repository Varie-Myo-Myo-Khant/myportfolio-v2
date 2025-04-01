"use client";
import React, { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { keyPressed, startGame } from "./game-logic";

type Props = {
  turnsLeft: number;
  setTurnsLeft: Dispatch<SetStateAction<number>>;
};

export default function Game({ turnsLeft, setTurnsLeft }: Props) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const [isStart, setIsStart] = useState(false);
  const defaultGameTimerValue = 60 * 0.5; // 30 seconds
  const [gameTimer, setGameTimer] = useState(defaultGameTimerValue);

  // Store key event in useRef to prevent stale closures
  const keyPressedRef = useRef(keyPressed);

  useEffect(() => {
    keyPressedRef.current = keyPressed;
  }, [keyPressed]);

  const onGameChange = useCallback(() => {
    setIsStart(false);
    setTurnsLeft((curTurns) => curTurns - 1);

    if (typeof window !== "undefined") {
      document.removeEventListener("keydown", keyPressedRef.current);
    }
  }, [setTurnsLeft]);

  useEffect(() => {
    if (ref.current && isStart) {
      startGame(ref.current, onGameChange);
    }
  }, [isStart, onGameChange]);

  useEffect(() => {
    if (isStart && typeof window !== "undefined") {
      const handler = (e: KeyboardEvent) => keyPressedRef.current(e);
      document.addEventListener("keydown", handler);
      return () => document.removeEventListener("keydown", handler);
    }
  }, [isStart]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isStart) {
        setGameTimer((curState) => {
          if (curState > 0) return curState - 1;
          else {
            onGameChange();
            return 0;
          }
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isStart, onGameChange]);

  if (turnsLeft === 0) return null;

  return (
    <div className="relative flex flex-col bg-muted rounded-md p-2 size-64">
      {isStart && (
        <>
          <Button onClick={onGameChange} variant="ghost" size="icon" className="absolute top-2 right-2 size-fit text-gray-500">
            <X size={16} />
          </Button>
          <div className="w-full text-center">
            {`${Math.floor(gameTimer / 60)}`.padStart(2, "0")}:{`${gameTimer % 60}`.padStart(2, "0")}
          </div>
          <span className="absolute -bottom-8 -left-1/2 translate-x-1/2 w-full text-center text-gray-500 text-sm">{`// use keyboard keys to move`}</span>
        </>
      )}
      {isStart && <canvas className="size-full" ref={ref} id="canvas" width="250" height="250" />}
      {!isStart && (
        <>
          <div className={cn("top-0 left-0 absolute size-full flex flex-col gap-1 items-center justify-center backdrop-blur-md z-[2]", isStart && "hidden")}>
            <Button
              className="shadow-md rounded-full"
              size="lg"
              variant="outline"
              onClick={() => {
                setIsStart(true);
                setGameTimer(defaultGameTimerValue);
              }}
            >
              Play a Game
            </Button>
          </div>
          <div className="absolute size-2 right-20 top-8 bg-rose-600" />
          <div className="absolute w-2 h-12 right-14 bottom-9 bg-emerald-600" />
        </>
      )}
    </div>
  );
}
