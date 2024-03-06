import { getAllTransactions, getAllAccounts } from "./api";
import { Transaction } from "../domain/transaction";
import { Account } from "../domain/account";

describe("getAllTransactions", () => {
  it("should return an array of transactions", async () => {
    const result = await getAllTransactions();

    // Assuming result is directly an array of Transaction based on the provided API function signature
    expect(result.data.length).toBeGreaterThan(0);
    const firstTransaction: Transaction = result.data[0];
    expect(firstTransaction).toHaveProperty("id");
    expect(firstTransaction).toHaveProperty("date");
    expect(firstTransaction).toHaveProperty("accountname");
    // If date is a Date object, you might also want to confirm its type
    expect(firstTransaction.date).toBeInstanceOf(Date);
  });
});

describe("getAllAccounts", () => {
  it("should return an array of accounts", async () => {
    const result = await getAllAccounts();

    // Assuming result is directly an array of Account based on the provided API function signature
    expect(result.data.length).toBeGreaterThan(0);
    const firstAccount: Account = result.data[0];
    expect(firstAccount).toHaveProperty("id");
    expect(firstAccount).toHaveProperty("name");
    expect(firstAccount).toHaveProperty("balance");
  });
});
