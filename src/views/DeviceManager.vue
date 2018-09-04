<template>
  <section class="device-manager">
    <a class="btn">Logout</a>

    <div
      v-for="admin of admins"
      :key="admin['.key']"
      class="card admin">

      <div class="card-header">
        <div class="card-title h5">{{ admin.email }}</div>
        <div class="card-subtitle text-gray">
          <relative-date :epoch="admin.updatedAt" />에 갱신됨
          &middot; 등록된 디바이스 {{ admin.registrations.length }}대
        </div>
      </div>

      <ul class="card-body">
        <li
          v-for="reg of admin.registrations"
          :key="reg.token">

          {{ reg.token.slice(0, 9) }}

          <relative-date :epoch="reg.subscribedAt" />에 등록됨
          &middot; <user-agent-string :uas="reg.userAgent" />
        </li>
      </ul>
    </div>

  </section>
</template>


<script>
import firebase from 'fb'
import RelativeDate from '../components/partial/RelativeDate.vue'
import UserAgentString from '../components/partial/UserAgentString.vue'

const db = firebase.firestore()

export default {
  name: 'DeviceManager',
  components: { RelativeDate, UserAgentString },
  firestore: { admins: db.collection('admins') }
}
</script>

<style lang="scss" scoped>
  .card-body {
    margin: 0;
  }
</style>
