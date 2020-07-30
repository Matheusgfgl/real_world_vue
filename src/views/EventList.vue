<template>
  <div>
    <h1>Event Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <template v-if="page != 1">
        <router-link
          :to="{ name: 'event-list', query: { page: page - 1 } }"
          rel="prev"
        >
          Prev Page
        </router-link>
      </template>

      <router-link
        v-if="eventsTotal > page * perPage"
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="next"
      >
        Next Page
      </router-link>
    </div>
  </div>
</template>

<script>
import EventCard from '../components/EventCard'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },

  created() {
    this.$store.dispatch('fetchEvents', {
      perPage: 3,
      page: this.page
    })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    ...mapState(['events', 'eventsTotal', 'perPage'])
  }
}
</script>
<style scoped>
.pagination {
  display: flex;
  justify-content: space-between;
}
</style>
