import { describe, expect, it } from "vitest";
import { TestDriver } from "testdriverai/vitest/hooks";

describe("Sample Test Suite", () => {
  it("should log in with sample credentials and view products", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: "https://www.saucedemo.com" });

    const usernameField = await testdriver.find("Username input field");
    await usernameField.click();
    await testdriver.type("standard_user");

    const passwordField = await testdriver.find("Password input field");
    await passwordField.click();
    await testdriver.type("secret_sauce");

    const loginButton = await testdriver.find("Login button");
    await loginButton.click();

    const productsHeader = await testdriver.find("Products header");
    expect(productsHeader).toBeTruthy();

    const assertResult = await testdriver.assert(
      "The user is logged in and the products catalog is visible"
    );
    expect(assertResult).toBeTruthy();
  });

  it("should add an item to the shopping cart", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: "https://www.saucedemo.com" });

    const usernameField = await testdriver.find("Username input field");
    await usernameField.click();
    await testdriver.type("standard_user");

    const passwordField = await testdriver.find("Password input field");
    await passwordField.click();
    await testdriver.type("secret_sauce");

    const loginButton = await testdriver.find("Login button");
    await loginButton.click();

    const addToCartButton = await testdriver.find(
      "Add to cart button for the first product"
    );
    await addToCartButton.click();

    const cartBadge = await testdriver.find("Shopping cart badge showing 1");
    expect(cartBadge).toBeTruthy();

    const assertResult = await testdriver.assert(
      "The item has been added to the cart and badge shows 1"
    );
    expect(assertResult).toBeTruthy();
  });
});
