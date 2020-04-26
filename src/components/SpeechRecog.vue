<template>
  <b-container class="text-center">
    <h1>Need help spelling a word?</h1>
    <b-card bg-variant="light">
      <b-card-title
        >Press <i>Start Recording</i>, then say the word you want to spell.</b-card-title
      >
      <b-card-sub-title>When you are finished, press <i>Stop Recording</i>.</b-card-sub-title>
      <b-button-group class="mt-3">
        <b-button variant="success" @click.prevent="startRecording()">Start Recording</b-button>
        <b-button variant="danger" @click.prevent="stopRecording()" :disabled="disabled"
          >Stop Recording</b-button
        >
      </b-button-group>
      <h2 class="pt-4">{{ final }}</h2>
      <b-container class="text-right">
        <b-button @click.prevent="final = ''"><b-icon-trash></b-icon-trash></b-button>
      </b-container>
    </b-card>
  </b-container>
</template>
<script>
export default {
  name: 'SpeechRecog',
  data() {
    return {
      final: '',
      recognition: Object,
      disabled: true,
      trashHidden: true,
    };
  },
  methods: {
    startRecording() {
      this.final = "I'm Listening...";
      // if (this.final !== '') this.trashHidden = false; // Overwrite any existing statements.
      // Accomodate both Google's Chrome and Mozilla's Firefox browser.
      window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      try {
        this.recognition = new window.SpeechRecognition(); // Create instance of GC or MF SR.
      } catch (SpeechError) {
        this.final = 'Sorry, something went wrong. ';
        this.final += 'For the best experience, try using Google Chrome.';
        return;
      }
      this.disabled = false;

      this.recognition.continuous = true;

      this.recognition.onresult = (event) => {
        if (this.final === "I'm Listening...") this.final = '';
        for (let i = event.resultIndex, len = event.results.length; i < len; i += 1) {
          // eslint-disable-next-line
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) this.final += transcript;
        }
      };
      this.recognition.start();
    },
    stopRecording() {
      if (this.recognition) {
        // If recognition is active,
        this.recognition.stop(); // Close the recognition.
        this.disabled = true;
      } // Otherwise, do nothing.
    },
  },
};
</script>
