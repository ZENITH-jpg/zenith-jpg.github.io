"use client";
import { Image } from "@nextui-org/react";
import {motion} from "framer-motion";
import { title, subtitle } from "@/components/primitives";
import {Card, CardFooter} from "@nextui-org/react";
import {Animate} from "@/components/code";

const subtitles = ["I need to put something here so here it is","Bottom text","...Or something like that...","Hello, World!"];
function chooseText(){
    const ind = Math.floor((Math.random()*4));
    return subtitles[ind];
}
export default function Home() {
  return (
    <div>
      <motion.div
        variants={Animate}
        initial={"initial"}
        animate={"animate"}
        style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        minHeight: "80vh",
        padding: "50px",
        paddingTop: "70px",
      }}
           data-aos="fade-up"
           data-aos-offset="300"
           data-aos-duration="1000">
        <div className="inline-block max-w-lg text-left justify-center">
          <h1 className={title({color: "pink", size: "tg"})}>Hi!&nbsp;</h1>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h1 className={title({size: "tg"})}>I'm Tristan&nbsp;</h1>
          <br/><br/>
          <h1 style={{lineHeight: "normal"}} className={subtitle({size: "sm"})} suppressHydrationWarning>{chooseText()}</h1>
        </div>
        <Card isBlurred
              radius="lg"
              className="stackLogos"
              isHoverable
              isFooterBlurred
        >
          <Image
            width={500}
            alt="a portrait"
            src="./assets/face.webp"/>
          <CardFooter
            className="absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-medium font-semibold text-white">A picture of me (I am the fish)</p>
          </CardFooter>
        </Card>

      </motion.div>
      <div style={{height:"200px"}}></div>
      <motion.div
        variants={Animate}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{
          margin: "-20%",
          once: true
        }}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "start",
          width: "100%",
          minHeight: "75vh",
          paddingTop: "30px",
          padding: "50px",
        }}>
        <div className="inline-block max-w-lg text-center"
        style={{paddingBottom:"80px"}}>
          <h1 className={title({size: "tg", color: "pink"})}>About Me</h1>
        </div>
        <div className="gap-20 grid grid-cols-3 grid-flow-row align-middle">
          <Image
            isZoomed={true}
            className = "stackLogos"
            src = "./assets/swagger.png"
            width = {350}
            alt = "absolute display of swagger"
          />
          <div className={"inline-block text-left justify-center col-span-2"}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h2 style={{lineHeight: "normal"}} className={subtitle({size: "sm"})}>I'm a student at William Lyon
              Mackenzie C.I. In my free time, I enjoy playing video games, getting active, and creating things. I am
              an active person and played sports such as hockey and soccer at a rep level. I am currently trying to learn
              new things, such as Chinese, producing, drone flying, and new coding languages. Click on one of the tabs
              at the top of the page to learn about basic Java coding topics
              </h2>
          </div>
        </div>
      </motion.div>
    </div>
  )
    ;
}