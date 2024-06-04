"use client";
import {motion} from "framer-motion";
import {Animate, Tab} from "@/components/code";
import {subtitle, title} from "@/components/primitives";
import {Card, Image, Snippet, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";

export default function SubclassPage() {
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
            <h1 className={title({color: "pink"})}>Subclasses</h1>
            <br/>
            <h2 className={subtitle()}
                style={{lineHeight: "normal"}}>{"A square is a rectangle"}</h2>
          </div>
          <div className={"inline-block text-center justify-center"}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h2 style={{lineHeight: "normal"}} className={subtitle()}>
              {"Two principles of OOP, polymorphism and inheritance are applied in Java through the use of subclasses. Inheritance means that classes " +
                "can inherit the methods and properties of other classes. This is exactly what a subclass does. Polymorphism " +
                "means \"many forms\". In OOP, this means that subclasses can override methods in its superclass, " +
                "allowing one method two do preform different tasks depending if it is called by a subclass or superclass. " +
                "An object of a subclass can also be assigned to a variable of its superclass"}
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
            <h1 className={title({size: "sm"})}>Creation</h1>
          </div>
          <div className="gap-10 grid grid-cols-2 grid-flow-row items-center justify-items-center">
            <div className={"inline-block text-left justify-center"}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h2 style={{lineHeight: "normal"}} className={subtitle()}>
                To create a subclass, we need to use the extends keyword in the declaration of the class. Methods and fields
                of the superclass will be automatically inherited if they are declared protected or public. See the example
                on the right.
              </h2>
            </div>
            <Snippet color={"danger"} variant={"shadow"} hideSymbol className={"default mt-10 px-5 py-3 w-80 h-52"}
                     disableCopy
                     hideCopyButton>
              <span>{"public class MyClass extends MyClass2{"}</span>
              <span>{Tab}{"// fields and methods"}</span>
              <span>{"}"}</span>
            </Snippet>
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
            <h1 className={title({size: "sm"})}>Overriding</h1>
          </div>
          <div className={"inline-block text-center justify-center"}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h2 style={{lineHeight: "default mt-10 px-5 py-5"}} className={subtitle()}>
              To follow the principle of polymorphism, methods the superclass can be overridden. To do this, we just write a
              method with the same declaration as the method we want to override. To call methods from the super class, we use
              the super keyword (super.method()). The constructor can be called in the subclass constructor by just calling super().
            </h2>
          </div>
          <div className={"gap-10 grid grid-cols-2 grid-flow-row items-center justify-items-center"}>
            <Snippet color={"danger"} variant={"shadow"} hideSymbol className={"default mt-10 px-5 py-3 self-center"}
                     disableCopy
                     hideCopyButton>
              <span>{"public class Point{ // a point on a cartesian plane"}</span>
              <span>{Tab}{"// fields"}</span>
              <span>{Tab}{"protected int x; // the location on the x axis"}</span>
              <span>{Tab}{"protected int y; // the location on the y axis"}</span>
              <span>{Tab}{"// methods"}</span>
              <span>{Tab}{"Point(int x, int y){"}</span>
              <span>{Tab}{Tab}{"this.x = x;  "}</span>
              <span>{Tab}{Tab}{"this.y = y; "}</span>
              <span>{Tab}{"}"}</span>
              <span>{Tab}{"int dist(){ // manhattan distance"}</span>
              <span>{Tab}{Tab}{"return x+y;"}</span>
              <span>{Tab}{"}"}</span>
              <span>{"}"}</span>
            </Snippet>
            <Snippet color={"danger"} variant={"shadow"} hideSymbol className={"default mt-10 px-5 py-3 self-center"}
                     disableCopy
                     hideCopyButton>
              <span>{"public class ProjectedPoint extends Point{ //point but coords are mutiplied by z"}</span>
              <span>{Tab}{"// fields"}</span>
              <span>{Tab}{"private int z; // scale"}</span>
              <span>{Tab}{"// methods"}</span>
              <span>{Tab}{"public ProjectedPoint(int x, int y, int z){ // override"}</span>
              <span>{Tab}{Tab}{"super(x,y); // call super constructor"}</span>
              <span>{Tab}{Tab}{"this.z = z;"}</span>
              <span>{Tab}{"}"}</span>
              <span>{Tab}{"int dist(){ // override"}</span>
              <span>{Tab}{Tab}{"return super.dist()*z;"}</span>
              <span>{Tab}{"}"}</span>
              <span>{"}"}</span>
            </Snippet></div>

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
            <h1 className={title({size: "sm"})}>Abstract Classes(another one)</h1>
          </div>
          <div className={"inline-block text-center justify-center pb-10"}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h2 style={{lineHeight: "default mt-10 px-5 py-5"}} className={subtitle()}>
              Abstract classes are classes that are made to be a superclass. You cannot directly make instances of abstract
              classes, but you can assign an instance of a subclass to an object of the abstract class. You use the
              abstract keyword to make a class abstract. In the abstract class, methods can be either fully written out, or
              just declared abstract so that it is supposed to be implemented in subclasses. When a method is declared abstract,
              it has no body.
            </h2>
          </div>
          <Snippet color={"danger"} variant={"shadow"} hideSymbol className={"default mt-10 px-5 py-3 self-center"}
                   disableCopy
                   hideCopyButton>
            <span>{"public abstract class MyClass{ "}</span>
            <span>{Tab}{"// fields"}</span>
            <span>{Tab}{"// methods"}</span>
            <span>{Tab}{"public abstract void method(); // abstract method example"}</span>
            <span>{"}"}</span>
          </Snippet>
        </motion.div>
      </div>
    </div>
  );
}