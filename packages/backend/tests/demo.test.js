// const B = require("../src/utils/B")
const C = require("../src/utils/C")
jest.mock("../src/utils/C", () => {})
// jest.mock("../src/utils/B", () => {})
const A = require("../src/utils/A")

test("FF", () => {
  console.log("test")
})
