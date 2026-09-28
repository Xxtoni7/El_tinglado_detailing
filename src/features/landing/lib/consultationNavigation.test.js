import assert from "node:assert/strict";
import test from "node:test";

test("a service consultation opens the contact form instead of the section", async () => {
  const navigation = await import("./consultationNavigation.js").catch(
    () => ({}),
  );
  const event = new Event("click", { cancelable: true });
  const scrollCalls = [];
  const documentObject = {
    getElementById(id) {
      if (id !== "contactForm") {
        return null;
      }

      return {
        scrollIntoView(options) {
          scrollCalls.push(options);
        },
      };
    },
  };

  const didNavigate = navigation.navigateToContactForm?.({
    documentObject,
    event,
  });

  assert.equal(event.defaultPrevented, true);
  assert.equal(didNavigate, true);
  assert.deepEqual(scrollCalls, [
    {
      behavior: "smooth",
      block: "start",
    },
  ]);
});
