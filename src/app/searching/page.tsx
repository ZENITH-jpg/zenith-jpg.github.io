"use client";
import {subtitle, title} from "@/components/primitives";
import {Card, Image, Snippet} from "@nextui-org/react";
import {motion} from "framer-motion";
import {Highlight, Comment, Literal, Tab, Animate} from "@/components/code";

export default function SearchingPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <motion.div
        className="inline-block max-w-lg text-center justify-center"
        style={{paddingBottom: "20px"}}
        variants={Animate}
        initial="initial"
        whileInView={"animate"}
        viewport={{
          once: true
        }}>
        <h1 className={title({color: "pink"})}>Searching</h1>
        <br/>
        <h2 className={subtitle()} style={{lineHeight: "normal"}}>So you can find things (duh)</h2>
      </motion.div>
      <motion.div className="gap-10 grid grid-cols-2 grid-flow-row items-center justify-items-center"
                  variants={Animate}
                  initial="initial"
                  whileInView={"animate"}
                  viewport={{
                    once: true,
                  }}>
        <Card isBlurred
              radius="lg"
              className="zoom"
              isHoverable
        >
          <Image
            className={"justify-self-end"}
            src="./assets/waldo.jpg"
            alt="waldo"
            width={400}
          />
        </Card>
        <div className={"inline-block text-left justify-center"}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h2 style={{lineHeight: "normal"}} className={subtitle()}>In programing, searching algorithms are used to
            find specific items in arrays or lists. These items are called keys. The array can be of any type or object,
            as long as there is a valid criteria to search for. An algorithm will return the index of
            the occurrence of the key in the list or array. There are both fast and slow searching algorithms that can
            affect the performance of your program. You can also be a searching program! Can you find Waldo on the
            picture to the left? The precondition of a search should be that the array or list entered consist of unique elements.
          </h2>
        </div>
      </motion.div>
      <br/><br/><br/>
      <motion.div className="inline-block max-w-lg text-center justify-center" style={{paddingBottom: "20px"}}
                  variants={Animate}
                  initial="initial"
                  whileInView={"animate"}
                  viewport={{
                    once: true,
                    margin: "-20%"
                  }}>
        <h1 className={title({size: "sm"})}>Linear Search</h1>
      </motion.div>
      <motion.div className="gap-10 grid grid-cols-2 grid-flow-row items-center justify-items-center"
                  variants={Animate}
                  initial="initial"
                  whileInView={"animate"}
                  viewport={{
                    once: true,
                    margin: "-20%"
                  }}>
        <div className={"inline-block text-left justify-center"}>
          <h2 style={{lineHeight: "normal"}} className={subtitle()}>
            A Linear search iterates through each element of a array or list until it finds an element
            matching the inputted key. It starts at the first element (index 0) and keeps moving up on
            elements until we reach the last element. If the key if found while iterating
            through, then we stop and return this index and terminate the program. The postcondition of a linear search
            is that the element was found, or entire array has been iterated through if the element was not found and -1
            is returned in this case. This takes O(n) time
            where n is the length of the array as we do an operation for each element in the array.
          </h2>
        </div>
        <Image
          className={"justify-self-end"}
          src="./assets/linear.gif"
          alt="linear search"
          width={450}
        />
      </motion.div>
      <motion.div style={{
        display: "flex",
        width: "50%",
        justifyContent: "center",
        paddingTop: "30px",
      }}          variants={Animate}
                  initial="initial"
                  whileInView={"animate"}
                  viewport={{
                    once: true,
                    margin: "-20%"
                  }}>
        <Snippet color={"danger"} variant={"shadow"} hideSymbol className={"default mt-10 px-5 py-3"} disableCopy hideCopyButton>
          <span> {Highlight('public static')} int search(int key, int [] arr) {'{'}</span>
          <span>{Tab}{Highlight('for')}(int i = {Literal(0)}; i{Literal(' < ')}arr.{Highlight('length')}; i++) {'{'}</span>
          <span>{Tab}{Tab}{Highlight('if')}(arr[i] {Highlight('==')} key) {'{'}</span>
          <span>{Tab}{Tab}{Tab}{Highlight('return')} i;</span>
          <span>{Tab}{Tab}{'}'}</span>
          <span>{Tab}{'}'}</span>
          <span>{Tab}{Highlight('return')} {Literal(-1)};</span>
          <span>{'}'} {Comment('// a linear search algorithm for a int array')}</span>
        </Snippet>
      </motion.div>
      <motion.div className="inline-block max-w-lg text-center justify-center"
           style={{paddingBottom: "20px", paddingTop: "80px"}}
                  variants={Animate}
                  initial="initial"
                  whileInView={"animate"}
                  viewport={{
                    once: true,
                    margin: "-20%"
                  }}>
        <h1 className={title({size: "sm"})}>Binary Search</h1>
      </motion.div>
      <motion.div className="gap-10 grid grid-cols-2 grid-flow-row items-center justify-items-center"
                  variants={Animate}
                  initial="initial"
                  whileInView={"animate"}
                  viewport={{
                    once: true,
                    margin: "-20%"
                  }}>
        <div className={"inline-block text-left justify-center"}>
          <h2 style={{lineHeight: "normal"}} className={subtitle()}>
            A binary search algorithm works by cutting an array or list in half until it finds the key.
            For this strategy to work, the array or list must be sorted in some sort of ascending format (check out
            sorting). Given the collection
            is sorted, we check the middle element of the collection and see if it equals the key. If it does, we return
            the index. If the element in the middle is larger than the key, we rerun the binary search on the lower half
            of the array as we know the element would have to be there if in the collection. Otherwise, we rerun the
            binary
            search on the top half of the collection. We keep doing this until the element is found. A binary search can we written both recursively or
            iteratively. The postcondition of a
            binary search is that the element was either found, or we hit a point where the cut of the array has 0 elements, in which -1 is returned.
            The time complexity of a binary search is O(logn) given the array is searched as we cut the
            collection in half for each operation. This is oftentimes faster than a linear search.
          </h2>
        </div>
        <Image
          className={"justify-self-end"}
          src="./assets/binary.gif"
          alt="binary search"
          width={500}
        />
        <Snippet color={"danger"} variant={"shadow"} hideSymbol className={"default mt-10 px-5 py-3"} disableCopy hideCopyButton>
          <span>{Highlight('public static')} int bSearch(int key, int[] arr) {'{'}</span>
          <span>{Tab}int low {Highlight('=')} {Literal(0)};</span>
          <span>{Tab}int high = arr.{Highlight('length')}-{Literal(1)};</span>
          <span>{Tab}{Highlight('while')} (low {Highlight('<=')} high) {'{'}</span>
          <span>{Tab}{Tab}int mid {Highlight('=')} (low {Highlight('+')} high) {Highlight('/')} 2;</span>
          <span>{Tab}{Tab}{Highlight('if')} (arr[mid] {Highlight('==')} x) </span>
          <span>{Tab}{Tab}{Tab}{Highlight('return')} mid;</span>
          <span>{Tab}{Tab}{Comment('// if key if found, return index')}</span>
          <span>{Tab}{Tab}{Highlight('if')} (arr[mid] {Highlight('<')} x) </span>
          <span>{Tab}{Tab}{Tab}low {Highlight('=')} mid {Highlight('+')} 1;</span>
          <span>{Tab}{Tab}{Comment('// If key greater, ignore left half')}</span>
          <span>{Tab}{Tab}{Highlight('else')}</span>
          <span>{Tab}{Tab}{Tab}high {Highlight('=')} mid {Highlight('-')} 1;</span>
          <span>{Tab}{Tab}{Comment('// If key is smaller, ignore right half')}</span>
          <span>{Tab}{'}'}</span>
          <span>{Tab}{Highlight('return')} {Literal(-1)};</span>
          <span>{'}'} {Comment('//an iterative binary search algorithm for an int array')}</span>
        </Snippet>
        <Snippet color={"danger"} variant={"shadow"} hideSymbol className={"default mt-10 px-5 py-3"} disableCopy hideCopyButton>
          <span>{Highlight('public static')} int bSearch(int low, int high, int key, int[] arr) {'{'}</span>
          <span>{Tab}{Highlight('if')} (low {Highlight('<=')} high) {'{'}</span>
          <span>{Tab}{Tab}int mid {Highlight('=')} (low {Highlight('+')} high) {Highlight('/')} 2;</span>
          <span>{Tab}{Tab}{Highlight('if')} (arr[mid] {Highlight('==')} x) </span>
          <span>{Tab}{Tab}{Tab}{Highlight('return')} mid;</span>
          <span>{Tab}{Tab}{Comment('// if key if found, return index')}</span>
          <span>{Tab}{Tab}{Highlight('if')} (arr[mid] {Highlight('<')} x) </span>
          <span>{Tab}{Tab}{Tab}{Highlight('return')} bSearch(mid {Highlight('+')} 1, high, key, arr);</span>
          <span>{Tab}{Tab}{Comment('// If key greater, ignore left half')}</span>
          <span>{Tab}{Tab}{Highlight('else')}</span>
          <span>{Tab}{Tab}{Tab}{Highlight('return')} bSearch(low, mid {Highlight('-')} 1, key, arr);</span>
          <span>{Tab}{Tab}{Comment('// If key is smaller, ignore right half')}</span>
          <span>{Tab}{'}'}</span>
          <span>{Tab}{Highlight('return')} {Literal(-1)};</span>
          <span>{'}'} {Comment('//an recursive binary search algorithm for an int array')}</span>
        </Snippet>
      </motion.div>
    </div>);
}