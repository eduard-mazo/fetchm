<template lang="pug">
    .container
        .columns
            .column.is-5.is-offset-4
                .notification(:class="[!isPublished ? 'notification is-success' : 'notification is-danger']")
                    slot(name="body") Something is wrong
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    isPublished: Boolean
  },
  methods: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
.notification {
  margin: 10px;
}
</style>

