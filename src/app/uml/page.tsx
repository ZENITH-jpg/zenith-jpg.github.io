"use client";
import {motion} from "framer-motion";
import {Animate, Tab} from "@/components/code";
import {subtitle, title} from "@/components/primitives";
import {Card, Image, Snippet, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";

export default function UMLPage() {
  return (
    <div>
      <div className="flex flex-col justify-items-center justify-center gap-4 py-8 md:py-10">
        <motion.div
          style={{
            paddingBottom: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          variants={Animate}
          initial="initial"
          whileInView={"animate"}
          viewport={{
            once: true
          }}>
          <div className={"inline-block max-w-lg text-center justify-items-center justify-center pb-8"}>
            <h1 className={title({color: "pink"})}>UML</h1>
            <br/>
            <h2 className={subtitle()}
                style={{lineHeight: "normal"}}>{"Flowcharts for dummies"}</h2>
          </div>
          <div className={"inline-block text-center justify-center"}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h2 style={{lineHeight: "normal"}} className={subtitle()}>
              {"A UML diagram, or a Unified Modeling Language diagram, is a way for programmers to represent software as " +
                "a visual. This is done through a series of arrows and boxes creating a sort of flowchart pattern. However, " +
                "UML diagrams wont fully display everything going on in a program. Methods aren't written out " +
                "as a UML is only supposed to describe classes and its interactions with other classes. UML diagrams should not be " +
                "the only thing done in the planning process. UML diagrams can be made either using pencil and paper, or using software such " +
                "as draw.io."}
            </h2>
          </div>
        </motion.div>
        <br/>
        <motion.div
          style={{
            paddingBottom: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          variants={Animate}
          initial="initial"
          whileInView={"animate"}
          viewport={{
            once: true,
            margin: "-20%"
          }}>
          <div className={"inline-block max-w-lg text-center justify-items-center justify-center pb-10"}>
            <h1 className={title({size: "sm"})}>How to Make a Class</h1>
          </div>
          <div className="gap-10 grid grid-cols-2 grid-flow-row items-center justify-items-center">
            <div className={"inline-block text-left justify-center"}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h2 style={{lineHeight: "normal"}} className={subtitle()}>
                {"To make a class in UML, you first need a box with 3 sections. On the top most box, the name of the class " +
                 "should be written down. The middle box should contain the fields of the class, following a \"+fieldName: ObjectType\" " +
                 "format. The the last box, methods should be put. Mutators and accessor do not need to be inserted here as they " +
                  "are assumed to exist. The methods should be written in the following format: \"+methodName(paramsTypes): returnType\" " +
                  "If you have a void method, it is not require to have the return type section filled out. See the example on the right."}
              </h2>
            </div>
            <Image
              width={300}
              alt="class"
              src="./assets/class.png"/>
          </div>
        </motion.div>
        <br/>
        <motion.div
          style={{
            paddingBottom: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          variants={Animate}
          initial="initial"
          whileInView={"animate"}
          viewport={{
            once: true,
            margin: "-20%"
          }}>
          <div className={"inline-block max-w-lg text-center justify-items-center justify-center pb-10"}>
            <h1 className={title({size: "sm"})}>Class Relationships</h1>
          </div>
          <div className={"inline-block text-center justify-center"}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h2 style={{lineHeight: "default mt-10 px-5 py-5"}} className={subtitle()}>
              To represent the relationships between classes, we use the following line connectors.
            </h2>
            <br/>
          </div>
          <Table aria-label="UML Relaionships" className={"w-9/12"} color={"danger"}>
            <TableHeader>
              <TableColumn>Type</TableColumn>
              <TableColumn>Line</TableColumn>
              <TableColumn>What it means</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>Association</TableCell>
                <TableCell>
                  <Image
                  width={200}
                  alt="line"
                  src="./assets/association.png"/>
                </TableCell>
                <TableCell>Represents a general connection between 2 classes, in some way related</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>Composition</TableCell>
                <TableCell>
                  <Image
                    width={200}
                    alt="line"
                    src="./assets/composition.png"/>
                </TableCell>
                <TableCell>
                  Represents that one of the classes is used in either the fields or methods of the other class. That class
                  cannot exist without the other.
                  The dark diamond should point to the class which composed by the other.
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>Aggregation</TableCell>
                <TableCell>
                  <Image
                    width={200}
                    alt="line"
                    src="./assets/aggregation.png"/>
                </TableCell>
                <TableCell>
                  Similar to composition, but classes can exist independently of each other.
                  One class is a part of another class. Unfilled diamond points to the class which contains the other.
                </TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>Generalization</TableCell>
                <TableCell>
                  <Image
                    width={200}
                    alt="line"
                    src="./assets/generalization.png"/>
                </TableCell>
                <TableCell>
                  Generalization represents that one class inherits another class. The pointer points to the class which
                  inherits the methods and fields of the other class.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </motion.div>
        <br/>
        <motion.div
          style={{
            paddingBottom: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          variants={Animate}
          initial="initial"
          whileInView={"animate"}
          viewport={{
            once: true,
            margin: "-20%"
          }}>
          <div className={"inline-block max-w-lg text-center justify-items-center justify-center pb-10"}>
            <h1 className={title({size: "sm"})}>Example</h1>
          </div>
          <Image
            width={1600}
            alt="example uml"
            src="./assets/example.png"/>
        </motion.div>
      </div>
    </div>
  );
}