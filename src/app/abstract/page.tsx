"use client";
import {motion} from "framer-motion";
import {Animate, Tab} from "@/components/code";
import {subtitle, title} from "@/components/primitives";
import {Card, Image, Snippet, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";

export default function AbstractPage() {
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
            <h1 className={title({color: "pink"})}>Abstract Data Classes</h1>
            <br/>
            <h2 className={subtitle()}
                style={{lineHeight: "normal"}}>{"So you don't need to rewrite everything 100 times"}</h2>
          </div>
          <div className={"inline-block text-center justify-center"}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h2 style={{lineHeight: "normal"}} className={subtitle()}>
              {"Data abstraction states that programmers should hide specific code from the user. " +
                "This means that the user is only presented with information that is relevant, and shouldn't be able to " +
                "modify or see how background processes work. This ensures programs operate properly and aren't tampered with. " +
                "The OOP principle of encapsulation states that data should be kept abstracted from the user. Java implements " +
                "this principle through abstract data classes. Through these data classes, Java controls what can be accessed " +
                "from where in the application. Abstract data classes define new data types. For example, a new data type could " +
                "be an Animal, which has data in form of what type of animal it is, how old it is, and other characteristics. " +
                "Using fields and methods, we give these abstract data classes these properties and functions"}
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
            <Snippet color={"danger"} variant={"shadow"} hideSymbol className={"default mt-10 px-5 py-3 w-80 h-52"}
                     disableCopy
                     hideCopyButton>
              <span>{"public class MyClass{"}</span>
              <span>{Tab}{"// fields and methods"}</span>
              <span>{"}"}</span>
            </Snippet>
            <div className={"inline-block text-left justify-center"}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h2 style={{lineHeight: "normal"}} className={subtitle()}>
                To create an abstract data class, you must first write the class declaration in a Java file. An example
                of
                this can be seen on the left.
              </h2>
            </div>
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
            <h1 className={title({size: "sm"})}>Fields and Methods</h1>
          </div>
          <div className={"inline-block text-center justify-center"}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h2 style={{lineHeight: "default mt-10 px-5 py-5"}} className={subtitle()}>
              Fields, usually declared at the top of the class, are variables of primitives, and other data classes
              represented by objects.
              These give the class the properties it needs to fulfill its role in the program. Methods give
              functionality
              to these properties and the class itself. One important method is the constructor, which is called when
              the class is being created as a object somewhere else in the program. The constructor sets initial values
              to fields
              to ensure the functionality of the whole class. Below, there are examples of fields and methods for the
              Point data class. Constructors, like other methods, can be overriden to give multiple ways to create the
              object.
            </h2>
          </div>
          <div className={"gap-10 grid grid-cols-2 grid-flow-row items-center justify-items-center"}>
            <Image
              className={"justify-self-end"}
              src="./assets/point.gif"
              alt="plane"
              width={300}
            />
            <Snippet color={"danger"} variant={"shadow"} hideSymbol className={"default mt-10 px-5 py-3 self-center"}
                     disableCopy
                     hideCopyButton>
              <span>{"public class Point{ // a point on a cartesian plane"}</span>
              <span>{Tab}{"// fields"}</span>
              <span>{Tab}{"int x; // the location on the x axis"}</span>
              <span>{Tab}{"int y; // the location on the y axis"}</span>
              <span>{Tab}{"// methods"}</span>
              <span>{Tab}{"Point(int x, int y){"}</span>
              <span>{Tab}{Tab}{"this.x = x; // setting fields, if there are two vars with same "}</span>
              <span>{Tab}{Tab}{"this.y = y; // name, use this.var to refer fields"}</span>
              <span>{Tab}{"}"}</span>
              <span>{Tab}{"void print(){ // void methods run code and have no return value"}</span>
              <span>{Tab}{Tab}{"System.out.println(\"Point is at \" + x + \", \" + y); "}</span>
              <span>{Tab}{Tab}{"this.y = y; // name, use this.var to refer fields"}</span>
              <span>{Tab}{"}"}</span>
              <span>{Tab}{"int getX(){ // accessor method, returns value of fields"}</span>
              <span>{Tab}{Tab}{"return x; // needs to return an int as it is a method of type int"}</span>
              <span>{Tab}{"}"}</span>
              <span>{Tab}{"void setX(int x){ // mutator method, sets value of fields"}</span>
              <span>{Tab}{Tab}{"this.x = x;"}</span>
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
            <h1 className={title({size: "sm"})}>Accessor Levels</h1>
          </div>
          <div className={"inline-block text-center justify-center pb-10"}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h2 style={{lineHeight: "default mt-10 px-5 py-5"}} className={subtitle()}>
              Accessor levels implement in the principle of encapsulation into abstract data classes. Using keywords,
              Java
              controls what fields and methods are accessible and where they are accessible. Below are a list of keywords
              and
              a rewritten version of Point with proper keywords.
            </h2>
          </div>
          <Table aria-label="Accessor level keywords" className={"w-9/12"} color={"danger"}>
            <TableHeader>
              <TableColumn>Keyword</TableColumn>
              <TableColumn>Properties</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>public</TableCell>
                <TableCell>Field or method is accessible anywhere as long if class is correctly imported</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>private</TableCell>
                <TableCell>Field or method is only accessible in the same class which it is in</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>protected</TableCell>
                <TableCell>Field or method is accessible in the same package or subclass as the class it is
                  in</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>None(like actually none)</TableCell>
                <TableCell>Somewhere in between private and protected</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Snippet color={"danger"} variant={"shadow"} hideSymbol className={"default mt-10 px-5 py-3 self-center"}
                   disableCopy
                   hideCopyButton>
            <span>{"public class Point{ // access levels are implemented"}</span>
            <span>{Tab}{"// fields"}</span>
            <span>{Tab}{"private int x; // fields are usually private or protected"}</span>
            <span>{Tab}{"private int y;"}</span>
            <span>{Tab}{"// methods"}</span>
            <span>{Tab}{"public Point(int x, int y){"}</span>
            <span>{Tab}{Tab}{"this.x = x; // constructors are usually public "}</span>
            <span>{Tab}{Tab}{"this.y = y; "}</span>
            <span>{Tab}{"}"}</span>
            <span>{Tab}{"public void print(){ // most methods are public unless only to be used within class"}</span>
            <span>{Tab}{Tab}{"System.out.println(\"Point is at \" + x + \", \" + y); // then they are private/protected"}</span>
            <span>{Tab}{Tab}{"this.y = y; "}</span>
            <span>{Tab}{"}"}</span>
            <span>{Tab}{"public String toString(){ // special toString method that sets the String content of the object in a print method"}</span>
            <span>{Tab}{Tab}{"return x + \" \" + y; // always public"}</span>
            <span>{Tab}{"}"}</span>
            <span>{Tab}{"public int getX(){ // accessors and mutators are public"}</span>
            <span>{Tab}{Tab}{"return x;"}</span>
            <span>{Tab}{"}"}</span>
            <span>{Tab}{"public void setX(int x){"}</span>
            <span>{Tab}{Tab}{"this.x = x;"}</span>
            <span>{Tab}{"}"}</span>
            <span>{"}"}</span>
          </Snippet>
        </motion.div>
      </div>
    </div>
  );
}