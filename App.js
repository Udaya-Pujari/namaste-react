// eg:1

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "hello world from react js"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// eg:2
/**
 * <div if='parent'>
    <div id='child'>
       <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
    <div id='child2'>
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
 * </div>
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "I  am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);
