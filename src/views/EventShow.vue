<template>
  <div class="event">
    <div class="event-header">
      <span class="eyebrow">@ {{ event.time }} on {{ event.date }}</span>
      <h1 class="title">{{ event.title }}</h1>
      <h5>Organized by : {{ event.organizer ? event.organizer.name : '' }}</h5>
      <h5>Category: {{ event.category }}</h5>
    </div>

    <BaseIcon name="map">
      <h2 class="location">Location</h2>
    </BaseIcon>

    <address>{{ event.location }}</address>

    <h2>Event details</h2>
    <p>{{ event.description }}</p>

    <h2 class="location">
      Attendees
      <span class="badge -fill-gradient">{{
        event.attendees ? event.attendees.length : 0
      }}</span>
    </h2>
    <ul class="list-group">
      <li v-for="attendee in event.attendees" :key="attendee" class="list-item">
        <b>{{ attendee }}</b>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: ['id'],

  created() {
    this.$store.dispatch('fetchEvent', this.id)
  },
  computed: mapState({
    event: state => state.event.event
  })
}
</script>

<style scoped>
.event {
  margin-top: 50px;
}
.location {
  display: flex;
  align-items: center;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
