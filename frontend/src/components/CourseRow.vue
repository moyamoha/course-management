<template>
  <tr>
    <td><router-link to="/all/"></router-link></td>
    <td>{{course.code}}</td>
    <td>{{course.type}}</td>
    <td>{{course.level}}</td>
    <td>{{course.language}}</td>
    <td>{{course.scope}}</td>
    <td>{{course.scale}}</td>
    <td>
      <v-chip :color="chipColor">
        {{course.state}}
      </v-chip>
    </td>
    <td>{{course.result}}</td>
  </tr>
</template>

<script>
  export default {
    props: {
      course: {
        name: String,
        code: String,
        scope: Number,
        level: String,
        type: String,
        state: String,
        language: String,
        scale: String
      }
    },
    computed: {
      chipColor() {
        if (this.props.course.state === 'notStarted') {
          return 'primary'
        } else if (this.props.course.state === 'onGoing') {
          return 'orange'
        } else if (this.props.course.state === 'accomplished') {
          return 'success'
        }
      }
    }
  }
</script>