<template>
  <div class="youtube">
    <lite-youtube
      :videoid="id"
      :playlabel="label"
    />
  </div>
</template>
<script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
    },
    fetchOnServer: false,
  }
</script>