<template>
  <b-container class="pl-3 pr-3 text-center">
    <b-row class="pl-3 pr-3">
      <b-col class="text-center">
        <a href="/">
          <b-img height="120px" src="/ParentWoodchuck.png"></b-img>
        </a>
      </b-col>
    </b-row>

    <b-row class="pb-4">
      <b-col class="text-center">
        <h1>Welcome!</h1>
      </b-col>
    </b-row>

    <b-row class="pb-2">
      <b-col>
        <h4>Please fill out the following survey</h4>
      </b-col>
    </b-row>

    <b-row class="pb-4">
      <b-col class="text-center">
        <b-button
          href="https://docs.google.com/forms/d/e/1FAIpQLSeoHPTlY9uMBL85rWaOxMXcVnJ7_dnsxDsozKhkKAfTI-hSyg/viewform?vc=0&c=0&w=1&usp=mail_form_link"
          variant="warning"
          target="_blank"
          ><h5>Technology Survey for At-Home-Learning</h5></b-button
        >
      </b-col>
    </b-row>

    <b-row>
      <b-col class="text-center">
        <h2>Here are some resources that may be helpful</h2>
      </b-col>
    </b-row>

    <b-row class="pb2">
      <b-col class="text-center">
        <b-button
          href="https://docs.google.com/forms/d/e/1FAIpQLSdrL7h2i_8HRegIl148DznXIYNh_kxFKNAvSu5v6xxhaGch1w/viewform"
          target="_blank"
          variant="success"
          ><h5>Behavioral Support Form</h5></b-button
        >
      </b-col>
    </b-row>

    <b-row class="pb2">
      <b-col class="text-center"> </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Parents',
};
</script>
