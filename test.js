console.log("Running tests...");

// simple dummy test
if (1 + 1 !== 2) {
  console.error("Test failed");
  process.exit(1);
}

console.log("All tests passed!");
