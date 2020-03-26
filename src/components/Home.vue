<template>
  <b-container class="pl-2 pr-2">
    <b-row class="pl-3 pr-3">
      <b-col class="text-center">
        <a href="/">
          <b-img height="120px" src="/favicon.ico"></b-img>
        </a>
      </b-col>
    </b-row>

    <b-row class="pl-3 pb-2">
      <b-col class="text-center">
        <h1>Welcome, Virtual Woodchucks!</h1>
      </b-col>
    </b-row>

    <b-row class="pl-3 pr-3 pb-1">
      <b-col class="text-center">
        <h3>What grade are you in?</h3>
      </b-col>
    </b-row>

    <b-row class="pl-3 pr-3 pb-6">
      <b-col class="text-center">
        <b-button-group>
          <b-button variant="success" href="/grades23">2nd Grade</b-button>
          <b-button variant="primary" href="/grades23">3rd Grade</b-button>
          <b-button variant="danger" href="/grades456">4th Grade</b-button>
          <b-button variant="info" href="/grades456">5th Grade</b-button>
          <b-button variant="secondary" href="/grades456">6th Grade</b-button>
          <b-button variant="dark" href="/parents">I'm a Parent/Guardian</b-button>
        </b-button-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Wecome, Virtual Woodchuck',
    };
  },
};
</script>
