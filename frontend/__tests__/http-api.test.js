import { getAllTransactions, getAllAccounts } from "../src/http/api";

describe("getAllTransactions", () => {
  it("should return an array of transactions", async () => {
    const result = await getAllTransactions();

    expect(result.data.length).toBeGreaterThan(0);
    expect(result.data[0]).toHaveProperty("id");
    expect(result.data[0]).toHaveProperty("date");
    expect(result.data[0]).toHaveProperty("accountname");
  });
});

describe("getAllAccounts", () => {
  it("should return an array of accounts", async () => {
    const result = await getAllAccounts();

    expect(result.data.length).toBeGreaterThan(0);
    expect(result.data[0]).toHaveProperty("id");
    expect(result.data[0]).toHaveProperty("name");
    expect(result.data[0]).toHaveProperty("balance");
  });
});
