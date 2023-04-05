<template>
  <div>
    <button type="button" :id="id" aria-haspopup="true" aria-expanded="false" :disabled="disabled">{{ title }}</button>
    <div>
      <div></div>
      <a @click="updateOption(option)" v-for="option in options" :key="option.id">
        <input type="radio" :id="`option-${option.id}`" v-model="selected" @click="updateOption(option)">
        <label>{{ option.name }}</label>
      </a>
    </div>
  </div>
</template>

   <script setup lang="ts">
import type IOption from '../../interfaces/IOption';
import * as utils from '../../utils/utils'
import { ref, type PropType, onMounted } from 'vue';
import $ from 'jquery';
const props = defineProps({
  options: {
    type: Array as PropType<IOption[]>,
    required: true,
  },
  defaultTitle: {
    type: String,
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  closeOnSelect: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const emits = defineEmits<{
  (e: 'update:selectedOption', value: IOption): void;
}>();
const selected = ref<IOption | null>(null);
const id = utils.uuid();
onMounted(() => {
  const dropdown = $(`#${id}`);
  dropdown.on('click', () => {
    if (dropdown.attr('aria-expanded') === 'true') {
      closeDropdown();
      return;
    }
    $('body').trigger('click');
    openDropdown();
  });
  $('body').on('click', (e) => {
    if (!dropdown.is(e.target) && dropdown.has(e.target).length === 0 && $('.show').has(e.target).length === 0) {
      closeDropdown();
    }
  });
});
const openDropdown = () => {
  const dropdown = $(`#${id}`);
  dropdown.parent().addClass('show');
  dropdown.attr('aria-expanded', 'true');
  dropdown.next('.dropdown-menu').addClass('show');
};
const closeDropdown = () => {
  const dropdown = $(`#${id}`);
  dropdown.parent().removeClass('show');
  dropdown.attr('aria-expanded', 'false');
  dropdown.next('.dropdown-menu').removeClass('show');
};
const updateOption = (option: IOption) => {
  selected.value = option;
  if (props.closeOnSelect) {
    closeDropdown();
  }
  emits('update:selectedOption', option);
};
</script>
