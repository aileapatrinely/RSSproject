<template>
    <div>
      <FilterDropdownCheckbox
        defaultTitle="All types"
        :options="typeOptions"
        :disabled="disabled"
        title="Type"
        :selectedOptions="selectedOptions"
        @update:selectedOptions="updateSelectedOptions"
      ></FilterDropdownCheckbox>
    </div>
   </template>
   
   
   <script lang="ts">
   import { Component, Prop } from 'vue-property-decorator';
   import FilterDropdown from './FilterDropdown.vue';

   
   
   @Component({
    components: {
      FilterDropdown,
    },
   })
   export default class TypeFilter {
    @Prop({ default: () => false }) private readonly disabled!: boolean;
   
   
    @Prop({ required: true }) private readonly selectedOptions!: [];
   
   
   
   
    private readonly typeOptions: [] = [
      {
        id: 'pubDate',
        name: 'Published Date',
        selected: false,
      },
      {
        id: 'title',
        name: 'Title',
        selected: false,
      },
      {
        id: 'description',
        name: 'Description',
        selected: false,
      },
    ];

    private updateSelectedOptions(selectedOptions: []) {
        this.$emit('update:selectedOptions', selectedOptions);
    }
}
</script>