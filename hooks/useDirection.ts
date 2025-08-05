"use client"
import { useEffect, useState } from "react";
import uselangugeStore from "@/_stores/langugeStore";
type Sides = "left" | "right";

export function useDirection() {
  const [sideBarSide, setSideBarSide] = useState<Sides>("left");
  const currentLanguge = uselangugeStore((s) => s.currentLanguge);
  useEffect(() => {
    if (currentLanguge === "en") {
      setSideBarSide("left");
    } else setSideBarSide("right");
  }, [currentLanguge]);
  return { dir: sideBarSide };
}
