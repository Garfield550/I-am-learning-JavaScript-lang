// 1
(function() {
  console.log("Test1");
}());
// 2
(function() {
  console.log("Test2");
})();
// 3
(() => {
  console.log("Test3");
})();