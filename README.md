# Plate Number IR

A Vue 3 component for manually entering Iranian license plate numbers, built with Vue 3, Tailwind CSS, and Sass.

## Features

<img width="531" alt="Screenshot 2025-02-11 at 9 17 15 AM" src="https://github.com/user-attachments/assets/c708b378-e957-4e7a-bd69-3e65db1e6723" />

- Supports the Iranian license plate format
- Styled with Tailwind CSS and Sass
- Easy integration into Vue 3 projects

## Usage

Clone the repository and install dependencies:

```sh
git clone https://github.com/Amirmojahed/plate-number-ir.git
cd plate-number-ir
npm install
```

Run the development server:

```sh
npm run dev
```

Import the component and use it in your Vue 3 project:

```vue
<script setup>
import PlateNumberInput from '@/components/PlateNumberInput.vue';
</script>

<template>
  <PlateNumberInput />
</template>
```

## Props
| Prop  | Type    | Description |
|-------|--------|-------------|
| `modelValue` | String | Two-way binding for input value |

## License
MIT License

