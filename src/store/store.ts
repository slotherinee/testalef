import { defineStore } from "pinia";
import { ref } from "vue";

type Child = {
  name: string;
  age: string;
};

type FamilyState = {
  name: string;
  age: string;
  children: Child[];
};

export const useFamilyStore = defineStore("family", () => {
  const name = ref<string>("");
  const age = ref<string>("");
  const children = ref<Child[]>([]);

  const addChild = () => {
    if (children.value.length < 5) {
      children.value.push({ name: "", age: "" });
    }
  };

  const removeChild = (index: number) => {
    children.value.splice(index, 1);
  };

  const saveFamilyData = (data: FamilyState) => {
    name.value = data.name;
    age.value = data.age;
    children.value = data.children || null;
    console.log("Family data saved", data);
    console.log("got data: ", name.value, age.value, children.value);
  };

  return {
    name,
    age,
    children,
    addChild,
    removeChild,
    saveFamilyData,
  };
});
