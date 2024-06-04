"use client";
import {motion} from "framer-motion";
import {Animate, Tab} from "@/components/code";
import {subtitle, title} from "@/components/primitives";
import {Card, Image, Snippet} from "@nextui-org/react";

export default function SortingPage() {
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
            <h1 className={title({color: "pink"})}>Sorting</h1>
            <br/>
            <h2 className={subtitle()} style={{lineHeight: "normal"}}>Even an idiot can do it with enough time</h2>
          </div>
          <div className="gap-10 grid grid-cols-2 grid-flow-row items-center justify-items-center">
            <Image
              className={"justify-self-end"}
              src="./assets/sort.gif"
              alt="sort"
              width={300}
            />
            <div className={"inline-block text-left justify-center"}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h2 style={{lineHeight: "normal"}} className={subtitle()}>
                Sorting is one of programmings most popular topics. Given a collection of N objects, how can we arrange
                these objects such that they are in order? We can put them together by size, color, shape, or any other
                property.
                However, to put these objects in order, we need to preform swaps on these items. This is what a sorting
                algorithm does.
                Usually, in programing, we sort items using some numeric value. For example, one of the most common
                uses for sorting is to put integers in ascending order. For the examples below we will sort integer
                arrays in
                ascending order. The preconditions is that we are given an integer array filled with integer values and
                the postconditions are that the array should contain all the same elements in the original array, just in
                ascending order.
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
            <h1 className={title({size: "sm"})}>Bubble Sort</h1>
          </div>
          <div className="gap-10 grid grid-cols-2 grid-flow-row items-center justify-items-center">
            <Image
              className={"justify-self-end"}
              src="./assets/bubble.gif"
              alt="sort"
              width={300}
            />
            <div className={"inline-block text-left justify-center"}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h2 style={{lineHeight: "normal"}} className={subtitle()}>
                A bubble sort algorithm iterates through the entire array and swaps consecutive items if the item at the
                larger index is less than the one at the smaller index. At the end of each iteration, the bubble sort
                checks
                if the array has been sorted in the correct order. If so, we return the sorted array. Otherwise, we
                iterate though the array and swap items until the array is sorted in ascending order. The time
                complexity
                of this sorting algorithm is O(n^2) as the algorithm requires to iterate through the array at least n
                times
                until the array is guaranteed to be sorted (This is n*n=n^2 operations for checking and swapping).
              </h2>
            </div>
          </div>
          <Snippet color={"danger"} variant={"shadow"} hideSymbol className={"default mt-10 px-5 py-3"} disableCopy
                   hideCopyButton>
            <span>{"static void bubbleSort(int arr[], int n){"}</span>
            <span>{Tab}{"for (int i = 0; i < n - 1; i++) { // loop through array "}</span>
            <span>{Tab}{Tab}{"for (int j = 0; j < n - 1; j++) { // loop for swaps "}</span>
            <span>{Tab}{Tab}{Tab}{"if (arr[j] > arr[j + 1]) { // if next object smaller, swap"}</span>
            <span>{Tab}{Tab}{Tab}{Tab}{"int temp = arr[j];"}</span>
            <span>{Tab}{Tab}{Tab}{Tab}{"arr[j] = arr[j + 1];"}</span>
            <span>{Tab}{Tab}{Tab}{Tab}{"arr[j + 1] = temp;"}</span>
            <span>{Tab}{Tab}{Tab}{"}"}</span>
            <span>{Tab}{Tab}{"}"}</span>
            <span>{Tab}{"}"}</span>
            <span>{Tab}{"return -1; // item not found"}</span>
            <span> {"} // a bubble sort where arr is the array to be sorted and n is the size of arr"}</span>
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
            <h1 className={title({size: "sm"})}>Merge Sort</h1>
          </div>
          <div className="gap-10 grid grid-cols-2 grid-flow-row items-center justify-items-center">
            <div className={"inline-block text-left justify-center"}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h2 style={{lineHeight: "default mt-10 px-5 py-5"}} className={subtitle()}>
                Unlike other sorts, merge sort works recursively(the method calls itself). A merge sort algorithm first takes in an array and
                splits in into 2 smaller array of half the size of the original. We take the first half of the original
                array and put in the first array and we take the remaining of the original array and put it in the second
                array. We then run a merge sort on both the smaller arrays, until the size of each array passed through
                the merge sort is of size 1. At this point, we return each subarray and start merging the arrays back together.
                We take the array containing the first half of the original elements and the array containing the second half
                and add elements back to the original array in ascending order. The complexity of a merge sort is O(nlogn) as
                we split the orginal arrays up into halfs, which takes O(logn) time, then we need to rearange everything back together,
                and since there are n objects, it takes O(n) time, giving O(nlogn) time in total.
              </h2>
            </div>
            <Image
              className={"justify-self-end"}
              src="./assets/merge.gif"
              alt="merge"
              width={300}
            />
          </div>
          <Snippet color={"danger"} variant={"shadow"} hideSymbol className={"default mt-10 px-5 py-3"} disableCopy
                   hideCopyButton>
            <span>{"public static void mergeSort (int arr[], int n){ // a merge sort written with a merge util method"}</span>
            <span>{Tab}{"if(n == 1) return; // arr is the array to be sorted and n is the size of arr"}</span>
            <span>{Tab}{"int x = n/2; // find size of new array"}</span>
            <span>{Tab}{"int[] left = new int[x]; // construct new arrays"}</span>
            <span>{Tab}{"int[] right = new int[n-x];"}</span>
            <span>{Tab}{"for(int i = 0; i < x; i++){ // fill arrays"}</span>
            <span>{Tab}{Tab}{"left[i] = arr[i];"}</span>
            <span>{Tab}{"}"}</span>
            <span>{Tab}{"for(int i = x; i < n; i++){"}</span>
            <span>{Tab}{Tab}{"right[i-x] = arr[i];"}</span>
            <span>{Tab}{"}"}</span>
            <span>{Tab}{"mergeSort(left, x); // sort arrays"}</span>
            <span>{Tab}{"mergeSort(right, n-x);"}</span>
            <span>{Tab}{"merge(arr, right, left, x, n-x); // merge arrays"}</span>
            <span>{"}"}</span>
            <br></br>
            <span>{"private static void merge (int a[], int r[], int l[], int left, int right){"}</span>
            <span>{Tab}{"int i = 0, j = 0, k = 0; // set indexes for arrays"}</span>
            <span>{Tab}{"while (i < left && j < right){ // while next index is avalible"}</span>
            <span>{Tab}{Tab}{"if (l[i] <= r[j]){ // if left element is less, add to original"}</span>
            <span>{Tab}{Tab}{Tab}{"a[k++] = l[i++];"}</span>
            <span>{Tab}{Tab}{"} else {"}</span>
            <span>{Tab}{Tab}{Tab}{"a[k++] = r[j++]; // otherwise add right element"}</span>
            <span>{Tab}{Tab}{"}"}</span>
            <span>{Tab}{"}"}</span>
            <span>{Tab}{"while (i < left){ // add remaining elements"}</span>
            <span>{Tab}{Tab}{"a[k++] = l[i++];"}</span>
            <span>{Tab}{"}"}</span>
            <span>{Tab}{"while (j < right){"}</span>
            <span>{Tab}{Tab}{"a[k++] = r[j++];"}</span>
            <span>{Tab}{"} "}</span>
            <span>{"} "}</span>
          </Snippet>
        </motion.div>
      </div>
    </div>
  );
}