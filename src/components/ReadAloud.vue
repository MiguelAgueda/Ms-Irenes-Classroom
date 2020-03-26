<template>
  <b-container class="pr-3">
    <b-row class="pb-3">
      <b-col cols="12">
        <div class="text-center">
          <h1>What grade are you in?</h1>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <div class="text-center">
          <b-button-group>
            <b-button variant="success" href="/readaloud/secondandthirdreads">2nd Grade</b-button>
            <b-button variant="primary" href="/readaloud/secondandthirdreads">3rd Grade</b-button>
            <b-button variant="warning" href="/readaloud/fourthandfifthreads">4th Grade</b-button>
            <b-button variant="danger" href="/readaloud/fourthandfifthreads">5th Grade</b-button>
            <b-button variant="dark" href="/readaloud/fourthandfifthreads">6th Grade</b-button>
          </b-button-group>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'ReadAloud',
};
</script>
