<template>
  <div class="relative w-screen h-screen">
    <div
      class="relative text-base font-kumbh-sans sm:max-w-screen-sm md:max-w-screen-md sm:mx-auto desktop:max-w-screen-desktop"
    >
      <OrganismMobileNav />
      <OrganismHeader />
      <OrganismCart />
      <div class="flex desktop:max-w-screen-desktop">
        <OrganismSingleProduct />
      </div>
      <MoleculeAttribution />
    </div>
    <OrganismLightboxImageSlider />
  </div>
</template>
<script setup lang="ts">
</script>