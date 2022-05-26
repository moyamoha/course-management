<template>
  <v-sheet>
    <SearchBarVue></SearchBarVue>
    <v-sheet>
      <v-simple-table>
        <thead>
          <tr>
            <th v-for="header in headers" v-bind:key="header">{{header}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="course in allCourses" :key="course.code">
            <td> <router-link :to="'/dashboard/course/' + course.code">{{course.name}}</router-link> </td>
            <td>{{course.code}}</td>
            <td>{{course.level}}</td>
            <td>{{course.scope}}</td>
            <td>{{course.language}}</td>
            <td>{{course.scale}}</td>
            <td>{{course.result ? course.result : 'N/A'}}</td>
            <td>
              <v-chip small :color="chipColor(course.state)">
                {{course.state}}
              </v-chip>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-sheet>
  </v-sheet>
</template>

<script>
  import SearchBarVue from "@/components/SearchBar.vue"
  import { mapGetters } from "vuex"

  export default {
    data: () => ({
      headers: [ 'Name', 'Code', 'Level', 'Scope (op)', 'Language', 'Scale', 'Result', 'State'],
    }),
    components: {
      SearchBarVue,
    },
    methods: {
      chipColor(state) {
        if (state === 'notStarted') {
          return 'primary'
        } else if (state === 'ongoing') {
          return 'orange'
        } else if (state === 'completed') {
          return 'success'
        }
      },
    },
    computed: {...mapGetters(['allCourses'])},
  }
</script>

<style>
  .actions-panel {
    border-right: 1px solid tomato;
    min-height: 90vh;
  }
</style>