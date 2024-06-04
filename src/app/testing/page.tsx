"use client";
import {motion} from "framer-motion";
import {Animate, Tab} from "@/components/code";
import {subtitle, title} from "@/components/primitives";
import {
  Card,
  CardFooter,
  Image,
  Snippet,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from "@nextui-org/react";
import {Link} from "@nextui-org/link";

export default function TestingPage() {
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
            <h1 className={title({color: "pink"})}>Unit Testing</h1>
            <br/>
            <h2 className={subtitle()}
                style={{lineHeight: "normal"}}>{"Does it work?"}</h2>
          </div>
          <div className={"inline-block text-center justify-center"}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h2 style={{lineHeight: "normal"}} className={subtitle()}>
              {"We all know that testing is an important process in making software. Unit testing is the process of testing " +
                "each individual class, making sure all methods and functionalities are correct. Unit testing allows for errors in code " +
                "to be identified quickly, before it is used in other classes where the error will spread. But it can be so infuriating and time " +
                "consuming when you need to rerun the program and input test cases dozens of times to fix a single mistake.   " +
                "JUnit fixes this issue. JUnit allows for specific classes and its methods " +
                "to be tested automatically. JUnit can be installed by going to their website and downloading the zip files " +
                "they provide."}
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
            <h1 className={title({size: "sm"})}>Create JUnit Testing Class</h1>
          </div>
          <div className="gap-10 grid grid-cols-2 grid-flow-row items-center justify-items-center">
            <div className={"inline-block text-left justify-center"}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h2 style={{lineHeight: "normal"}} className={subtitle()}>
                {"If you use JGrasp, making a JUnit test file is as easy as selecting Tools menu, clicking on JUnit, and lastly selecting " +
                  "create test file. This will automatically create a test file for the Java class you are currently viewing. " +
                  "If you aren't using JGrasp, and instead are using a IDE such as IntelliJ, you can copy the following template bellow. "}
              </h2>
            </div>
            <Image
              width={300}
              alt="class"
              src="./assets/create.png"/>
          </div>
          <Snippet color={"danger"} variant={"shadow"} hideSymbol className={"default mt-10 px-5 py-3 self-center"}
                   disableCopy
                   hideCopyButton>
            <span>{"import org.junit.Assert;"}</span>
            <span>{"import static org.junit.Assert.*;"}</span>
            <span>{"import org.junit.Before;"}</span>
            <span>{"import org.junit.Test;"}</span>
            <span>{Tab}</span>
            <span>{"public class ClassTest {"}</span>
            <span>{Tab}{"/** Fixture initialization (common initialization for all tests). **/"}</span>
            <span>{Tab}{"// insert fields for the test here (usually an object of class being tested)"}</span>
            <span>{Tab}{"@Before public void setUp() { // required in every JUnit test, sets up fields"}</span>
            <span>{Tab}{Tab}{"// insert set up fields here"}</span>
            <span>{Tab}{"}"}</span>
            <span>{Tab}</span>
            <span>{Tab}{"@Test public void methodTest() { // a single JUnit test, add more tests by using sane method declaration with different names"}</span>
            <span>{Tab}{Tab}{"// assertion statements to test class"}</span>
            <span>{Tab}{"}"}</span>
            <span>{"}"}</span>
          </Snippet>
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
            <h1 className={title({size: "sm"})}>Assertions</h1>
          </div>
          <div className={"inline-block text-center justify-center"}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h2 style={{lineHeight: "default mt-10 px-5 py-5"}} className={subtitle()}>
              {"Assertions state the expected behavior of a segment of code, and checks if the expected behavior happens. If " +
               "it doesn't happen, then JUnit will inform the user of the fault that happened. We use assertions in our test cases " +
                "to verify that our methods for our classes are preforming as expected. Assertions are written in code as \"" +
                "Assert.assertionName()\" where assetionName is one of the various assert methods. The most common statements " +
                "are Assert.assertEquals(expected, actual), Assert.assertTrue(bool), and Assert.assetFalse(bool). Each of these statements pass " +
                "if their respective names are true. If otherwise, the entire test case fails. This is why it is important to make " +
                "multiple testing methods for each individual method. It helps narrow down where mistakes exist."}

            </h2>
            <Link href={"https://junit.org/junit4/javadoc/4.8/org/junit/Assert.html"} isExternal className={"text-lg lg:text-xl block"}>Find a full list of assertions here.</Link>
            <br/>
          </div>
          <Card
            radius="lg"
          >
            <Image
            width={800}
            alt="error"
            src="./assets/bad.png"/>
            <CardFooter
              className="absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-medium font-semibold text-white">A assertion that fails looks like this</p>
            </CardFooter></Card>
          <br/>
          <Card
            radius="lg"
          >
            <Image
              width={800}
              alt="pass"
              src="./assets/good.png"/>
            <CardFooter
              className="absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-medium font-semibold text-white">A assertion that passes looks like this</p>
            </CardFooter></Card>
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
              <span>{"import org.junit.Assert;"}</span>
              <span>{"import static org.junit.Assert.*;"}</span>
              <span>{"import org.junit.Before;"}</span>
              <span>{"import org.junit.Test;"}</span>
              <span>{Tab}</span>
              <span>{"public class PointTest {"}</span>
              <span>{Tab}{"Point p; // make fields"}</span>
              <span>{Tab}{"@Before public void setUp() {"}</span>
              <span>{Tab}{Tab}{"p = new Point(4,5); //set up fields"}</span>
              <span>{Tab}{"}"}</span>
              <span>{Tab}{""}</span>
              <span>{Tab}{"@Test public void distTest() { // test"}</span>
              <span>{Tab}{Tab}{"Assert.assertEquals(9, p.dist()); //dist should be 9"}</span>
              <span>{Tab}{"}"}</span>
              <span>{"}"}</span>
            </Snippet></div>
        </motion.div>
      </div>
    </div>
  );
}