import axios from "axios";
import { getAllTransactions, getAllAccounts } from "./api";

jest.mock("axios");

describe("getAllTransactions", () => {
  it("should return an array of transactions", async () => {
    const mockResponse = {
      data: [
        {
          id: 1,
          date: "2022-01-01",
          accountname: "Account 1",
          payee: "Payee 1",
          category: "Category 1",
          payment: 1000,
        },
        {
          id: 2,
          date: "2022-01-02",
          accountname: "Account 2",
          payee: "Payee 2",
          category: "Category 2",
          payment: 2000,
        },
      ],
    };

    (axios.get as jest.Mock).mockResolvedValue(mockResponse);

    const result = await getAllTransactions();

    expect(result).toEqual(mockResponse.data);
  });
});

describe("getAllAccounts", () => {
  it("should return an array of accounts", async () => {
    const mockResponse = {
      data: [
        { id: 1, name: "Account 1", amount: 1000 },
        { id: 2, name: "Account 2", amount: 2000 },
      ],
    };

    (axios.get as jest.Mock).mockResolvedValue(mockResponse);

    const result = await getAllAccounts();

    expect(result).toEqual(mockResponse.data);
  });
});
