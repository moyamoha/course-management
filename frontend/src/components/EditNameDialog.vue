<template>
  <v-dialog v-model="dialog" width="300">
    <template v-slot:activator="{ on, attrs }">
      <v-icon size="18" v-on="on" v-bind="attrs">mdi-pencil-outline</v-icon>
    </template>
    <v-card>
      <v-card-title>Edit name</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="firstname"
          outlined
          dense
          :rules="[requiredRule]"
        ></v-text-field>
        <v-text-field
          v-model="lastname"
          outlined
          dense
          :rules="[requiredRule]"
          hide-details
        ></v-text-field>
        <v-card-actions class="mt-2 px-0">
          <v-btn
            outlined
            :loading="submitting"
            small
            @click="handleSubmit"
            color="teal darken-1"
            >Submit</v-btn
          >
          <v-btn
            outlined
            small
            color="red lighten-2"
            @click="dialog = false"
            text
            >Close</v-btn
          >
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      firstname: "Yahya",
      lastname: "Salimi",
      dialog: false,
      submitting: false,
    };
  },
  mounted() {
    console.log(this.$data);
    this.firstname = this.loggedInUser.name.split(" ")[0];
  },
  methods: {
    ...mapActions(["changeName"]),
    async handleSubmit() {
      this.submitting = true;
      try {
        await this.changeName({
          firstname: this.firstname,
          lastname: this.lastname,
        });
        this.dialog = false;
      } catch {
      } finally {
        this.submitting = false;
      }
    },
    requiredRule(val) {
      return (val && val.length > 0) || "This field cannot be empty";
    },
  },
  computed: {
    ...mapGetters(["loggedInUser"]),
  },
  mounted() {},
};
</script>
