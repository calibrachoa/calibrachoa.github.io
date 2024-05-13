<template>
  <div class="download">
    <a :href="filename">
      {{ label }}
    </a>
  </div>
</template>
<script>
  export default {
    props: {
      filename: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: false,
        default: "You can download my resume by clicking here!"
      },
    },
    fetchOnServer: false,
  }
</script>