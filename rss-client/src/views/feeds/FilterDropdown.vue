<template>
    <div>
      <button type="button" aria-haspopup="true" aria-expanded="false" :disabled="disabled">{{ title }}</button>
      <div>
        <a v-if="defaultTitle" @click="updateAllOptions">{{ defaultTitle }}</a>
        <div></div>
        <a v-for="option in options" :key="option.id">
          <input type="checkbox" :id="`option-${option.id}`" :value="option" v-model="selected" @click="updateOption(option)">
          <label @click="updateOption(option)">{{ option.name }}</label>
        </a>
      </div>
    </div>
   </template>
   
   
   <script lang="ts">
   import {
    Component, Prop, PropSync,
   } from 'vue-property-decorator';
   
   
   @Component
   export default class FilterDropdown {
    @Prop() private readonly options!: [];
   
   
    @PropSync('selectedOptions') private selected!: [];
   
   
    @Prop() private readonly defaultTitle!: string;
   
   
    @Prop() private readonly disabled!: boolean;
   
   
    @Prop() private readonly title!: string;
   
   
    @Prop({ default: () => false }) private readonly closeOnSelect!: boolean;
    private get id(): string { return this.uuid(); }


private mounted() {
  const dropdown = $(`#${this.id}`);


  dropdown.on('click', (e) => {
    if (dropdown.attr('aria-expanded') === 'true') {
      this.closeDropdown();
      return;
    }
    $('body').trigger('click');
    this.openDropdown();
  });


  $('body').on('click', (e) => {
    if (!dropdown.is(e.target) && dropdown.has(e.target).length === 0 && $('.show').has(e.target).length === 0) {
      this.closeDropdown();
    }
  });
}


private openDropdown() {
  const dropdown = document.querySelector(`#${this.id}`);
  dropdown.parent().addClass('show');
  dropdown.attr('aria-expanded', 'true');
  dropdown.next('.dropdown-menu').addClass('show');
}


private closeDropdown() {
  const dropdown = document.querySelector(`#${this.id}`);
  dropdown.parent().removeClass('show');
  dropdown.attr('aria-expanded', 'false');
  dropdown.next('.dropdown-menu').removeClass('show');
}


private updateOption(option) {
  const index = this.selected.findIndex(o => o.id === option.id);
  if (index !== -1) {
    this.selected.splice(index, 1);
  } else {
    this.selected.push(option);
  }


  if (this.closeOnSelect) {
    this.closeDropdown();
  }


  this.$emit('update:selectedOptions', this.selected);
}


private updateAllOptions() {
  this.selected.splice(0, this.selected.length);
  this.$emit('update:selectedOptions', this.selected);
  this.closeDropdown();
}
}
</script>



