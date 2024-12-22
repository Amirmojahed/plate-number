<script>
export default {
  props: {
    items: {
      required: false,
    },
  },

  data() {
    return {
      form: { word: "و" },
      numberCar: "",
      isValid: false,
      rules: {
        required: (value) => !!value || "ضروری",
        requiredNumber: (value) =>
          (!!value && value.match(/^\d+/) && value.length > 0) ||
          "عدد وارد کنید",
      },
    };
  },

  mounted() {
    if (this.items && this.items.numberPlate) {
      const numberPlate = [];
      for (const item of this.items.numberPlate.split("-")) {
        numberPlate.push(item);
      }
      this.form.numberPrimary = numberPlate[0];
      this.form.word = numberPlate[1];
      this.form.numberSecondary = numberPlate[2];
      this.form.numberThirdary = numberPlate[3];
    }
  },

  methods: {
    onChange() {
      this.numberCar =
        this.form.numberPrimary +
        "-" +
        this.form.word +
        "-" +
        this.form.numberSecondary +
        "-" +
        this.form.numberThirdary;
      for (const item of this.numberCar.split("-")) {
        if (item === "undefined") {
          return this.$emit("number-plat", null);
        } else {
          this.$emit("number-plat", this.numberCar);
        }
      }

      this.$emit("number-plat", this.numberCar);
    },
  },
};
</script>

<template>
  <div class="number-plat w-full flex flex-col gap-8">
    <v-form
      v-model="isValid"
      :class="{ 'bg-yellow-300': form.word === 'ع' }"
      class="number-plat__wrapper flex border-4 border-solid rounded-2xl"
    >
      <div
        class="number-plat__wrapper--image p-2 bg-blue-800 rounded-bl-xl rounded-tl-xl flex flex-col justify-between gap-1"
      >
        <img
          alt="plat"
          class="w-full h-4 bg-cover"
          src="../assets/flag/IR.png"
        />
        <div class="flex flex-col">
          <span class="item-text text-white">I.R.</span>
          <span class="item-text text-white">IRAN</span>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-2 py-1 px-2 items-end">
        <v-text-field
          v-model="form.numberPrimary"
          :maxlength="2"
          :rules="[rules.requiredNumber]"
          autofocus
          placeholder="--"
          @input="onChange"
        />

        <v-select
          v-model="form.word"
          :disabled="!form.numberPrimary"
          :items="['ج', 'د', 'س', 'ص', 'ط', 'ق', 'ل', 'ع', 'م', 'ن', 'و', 'هـ']"
          :rules="[rules.required]"
          placeholder="-"
          @input="onChange"
        />
        <v-text-field
          v-model="form.numberSecondary"
          :disabled="!form.word || !form.numberPrimary"
          :maxlength="3"
          :rules="[rules.requiredNumber]"
          placeholder="---"
          @input="onChange"
        />
        <div
          class="flex flex-col gap-1 border-t-0 border-r-0 border-b-0 border-1 border-solid h-full border-gray-800 pl-2"
        >
          <span class="item-text text-center text-xs font-bold"
            >ایـــــــران</span
          >
          <v-text-field
            v-model="form.numberThirdary"
            :disabled="!form.numberSecondary"
            :maxlength="2"
            :rules="[rules.requiredNumber]"
            placeholder="--"
            @input="onChange"
          />
        </div>
      </div>
    </v-form>
  </div>
</template>
