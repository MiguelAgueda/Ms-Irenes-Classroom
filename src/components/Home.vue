<template>
  <b-container class="pl-2 pr-2">
    <b-row class="pl-3 pr-3">
      <b-col class="text-center">
        <b-img height="120px" src="/favicon.ico"></b-img>
      </b-col>
    </b-row>

    <b-row class="pl-3 pb-2">
      <b-col class="text-center">
        <h1>Welcome, Virtual Woodchucks!</h1>
      </b-col>
    </b-row>

    <b-row class="pl-3 pr-3 pb-6">
      <b-col class="text-center">
        <h2>Let's get learning.</h2>
      </b-col>
    </b-row>

    <b-row class="pl-3">
      <b-col class="text-center">
        <a href="/readaloud" target="_self">
          <h4>Read-Alouds</h4>
        </a>
      </b-col>
    </b-row>

    <b-row class="pl-3">
      <b-col class="text-center">
        <a href="https://my.mheducation.com/" target="_blank">
          <h4>Math</h4>
        </a>
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
