"use client";
import {motion} from "framer-motion";
import {Animate, Tab} from "@/components/code";
import {subtitle, title} from "@/components/primitives";
import {Card, Image, Snippet} from "@nextui-org/react";

export default function TrollPage() {
  return (
    <div style={{display: "flex", height: "100vh", alignItems: "center", justifyContent: "center"}} className={"ext-center"}>
      <div className="inline-block max-w-lg text-left justify-center">
        <h1 className={title({color: "pink", size: "tg"})}>404</h1>
      </div>
    </div>
  );
}