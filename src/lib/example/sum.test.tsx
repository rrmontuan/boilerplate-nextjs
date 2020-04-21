import sum from "./sum"

describe("sum - example lib", () => {
  it("sum 2 numbers and expects correct result", () => {
    expect(sum(4, 5)).toBe(9)
  })
})
