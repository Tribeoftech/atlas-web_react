// jquery import thanks to babel
import $ from 'jquery';
// import lodash
import _ from 'lodash';
/**
 * Appends various HTML elements to the body of the page, including a heading, dashboard data, a button, a paragraph to display the click count, and a copyright notice.
 *
 * The button has a click event handler that calls the `updateCounter()` function, which increments a global `count` variable and updates the text of the element with the ID `count` to display the current count.
 *
 * The `_.debounce()` function is used to limit the rate at which the `updateCounter()` function is called, to prevent excessive updates when the button is clicked rapidly.
 */

$("body").append(`<p>Holberton Dashboard</p>`);
$("body").append(`<p>Dashboard data for the students</p>`);
$("body").append(`<button>Click here to get started</button>`);
$("body").append(`<p id="count"></p>`);
$("body").append(`<p>Copyright - Holberton School</p>`);

$("button").on("click", _.debounce(updateCounter, 500));

let count  = 0;
/**
 * Increments a counter and updates the text of an element with the current count.
 *
 * This function is called when the button on the page is clicked. It increments
 * the global `count` variable and updates the text of the element with the ID
 * `count` to display the current count.
 */
function updateCounter() {
  count++;
  $("#count").text(`${count} clicks on the button`);
}
