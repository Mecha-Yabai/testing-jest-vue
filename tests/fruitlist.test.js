import { shallowMount } from "@vue/test-utils";
import FruitList from "../src/components/FruitList.vue";

// Test data

describe("FruitList component test", () => {
  test("tests data attributes", () => {
    const wrapper = shallowMount(FruitList);
    expect(wrapper.vm.fruits).toEqual(["apple", "banana", "orange"]);
  });
});

// Test computed

test("return total number of fruits", () => {
  const wrapper = shallowMount(FruitList);
  expect(wrapper.vm.numFruits).toBe(2); // will fail
  expect(wrapper.vm.numFruits).toBe(3); // will success
});

// Test methods

test("tests addFruit method", () => {
  const wrapper = shallowMount(FruitList);

  const vm = wrapper.vm;
  expect(vm.fruits.length).toBe(3);

  // add mango to the fruit list
  vm.addFruit("mango");

  expect(vm.fruits.length).toBe(4);
});

// Test component render

test("displays a list of fruits", () => {
  const wrapper = shallowMount(FruitList);
  const fruits = wrapper.findAll("li");

  expect(fruits.at(0).text()).toBe("apple");
  expect(fruits.at(1).text()).toBe("banana");
  expect(fruits.at(2).text()).toBe("orange");
});

test("displays the number of fruits", () => {
  const wrapper = shallowMount(FruitList);
  const numFruits = wrapper.find("p");
  expect(numFruits.text()).toBe("Number of fruits: 3");
});
