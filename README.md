<h2>Career Devs: PVDCodeCamp March 4th Meetup</h2>
<p>We covered the Computer Science concept of scope this meetup and not in any specific language but instead gave examples of how you test your language's scope using simple problems. We did this in javascript but the tests given can be redone in any language using that language's syntax in order to test how that language handles scope. These items can be found in the scope folder.</p>
<p>We also covered sorting algorithms as a way of showing how a simple concept of sorting a list of items (numbers or words) can have several different solutions each with their own pros and cons. We discussed Bubble, Insertion, and Selection sort however we only built the bubble sort in Javascript. A challenge was given to the attendees to create either Selection or Insertion sort in javascript for the next meetup. </p>

<h3>Insertion sort:</h3>
<p>Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. </p>
<p>
Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list. Each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain. </p>

<p>Sorting is typically done in-place, by iterating up the array, growing the sorted list behind it. At each array-position, it checks the value there against the largest value in the sorted list (which happens to be next to it, in the previous array-position checked). If larger, it leaves the element in place and moves to the next. If smaller, it finds the correct position within the sorted list, shifts all the larger values up to make a space, and inserts into that correct position.</p>

<p>The resulting array after k iterations has the property where the first k + 1 entries are sorted ("+1" because the first entry is skipped). In each iteration the first remaining entry of the input is removed, and inserted into the result at the correct position, thus extending the result. </p>

<p>link to graphical representation: https://en.wikipedia.org/wiki/Insertion_sort#/media/File:Insertion-sort-example-300px.gif</p>

<h3>Selection Sort</h3>
<p>The selection sort algorithm divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.</p>

<p>link to graphical representation: https://en.wikipedia.org/wiki/Selection_sort#/media/File:Selection-Sort-Animation.gif</p>
