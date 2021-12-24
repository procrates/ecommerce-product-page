<template>
  <div class="relative h-screen w-screen">
    <div
      class="relative font-kumbh-sans text-base sm:max-w-screen-sm md:max-w-screen-md sm:mx-auto desktop:max-w-screen-desktop"
    >
      <OrganismMobileNav />
      <OrganismHeader />
      <OrganismCart />
      <div class="desktop:max-w-screen-desktop flex">
        <OrganismSingleProduct />
      </div>
      <MoleculeAttribution />
      <div></div>
    </div>
    <OrganismLightboxImageSlider />
  </div>
</template>
<script setup lang="ts">
</script>