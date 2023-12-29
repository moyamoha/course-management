<template>
  <div class="user-name d-flex align-center">
    <span>{{ loggedInUser.name }}</span>
    <EditNameDialog></EditNameDialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import EditNameDialog from "./EditNameDialog.vue";

export default {
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    submit() {},
  },
  computed: {
    ...mapGetters(["loggedInUser"]),
  },
  components: { EditNameDialog },
};
</script>

<style scoped>
.user-name {
  gap: 10px;
}
</style>
