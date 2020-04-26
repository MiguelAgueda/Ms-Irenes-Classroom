<template>
  <b-container class="text-center">
    <h1 class="pt-2">Let's make some noise!</h1>
    <h3 class="pb-4">Press on a button to hear the sound</h3>
    <b-row v-for="row in rows" :key="row[0].letter">
      <b-card-group deck class=" pb-4 mx-auto" v-for="letter in row" :key="letter.letter">
        <!-- <b-card-group> -->
        <b-card img-top style="max-width: 15rem;" :img-src="letter.image">
          <b-card-title>
            <b-button href="#" variant="success" @click.prevent="playSound(letter.sound)"
              ><H2>{{ letter.letter }}</H2></b-button
            >
          </b-card-title>
        </b-card>
      </b-card-group>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'AlphabetCards',

  data() {
    return {
      rows: this.getAlphabetRows(),
    };
  },

  methods: {
    playSound(sound) {
      const audio = new Audio(sound);
      audio.play();
    },

    getAlphabet() {
      return [
        {
          letter: 'A',
          image: 'ABC/Apple.png',
          sound: 'Sounds/A.mp3',
        },
        {
          letter: 'B',
          image: 'ABC/Balloon.png',
          sound: 'Sounds/B.mp3',
        },
        {
          letter: 'C',
          image: 'ABC/Caterpillar.png',
          sound: 'Sounds/C.mp3',
        },
        {
          letter: 'D',
          image: 'ABC/Dog.png',
          sound: 'Sounds/D.mp3',
        },
        {
          letter: 'E',
          image: 'ABC/Egg.png',
          sound: 'Sounds/E.mp3',
        },
        {
          letter: 'F',
          image: 'ABC/Fish.png',
          sound: 'Sounds/F.mp3',
        },
        {
          letter: 'G',
          image: 'ABC/Guitar.png',
          sound: 'Sounds/G.mp3',
        },
        {
          letter: 'H',
          image: 'ABC/Hat.png',
          sound: 'Sounds/H.mp3',
        },
        {
          letter: 'I',
          image: 'ABC/Igloo.png',
          sound: 'Sounds/I.mp3',
        },
        {
          letter: 'J',
          image: 'ABC/Jar.png',
          sound: 'Sounds/J.mp3',
        },
        {
          letter: 'K',
          image: 'ABC/Key.png',
          sound: 'Sounds/K.mp3',
        },
        {
          letter: 'L',
          image: 'ABC/Lamp.png',
          sound: 'Sounds/L.mp3',
        },
        {
          letter: 'M',
          image: 'ABC/Monkey.png',
          sound: 'Sounds/M.mp3',
        },
        {
          letter: 'N',
          image: 'ABC/Nest.png',
          sound: 'Sounds/N.mp3',
        },
        {
          letter: 'O',
          image: 'ABC/Octopus.png',
          sound: 'Sounds/O.mp3',
        },
        {
          letter: 'P',
          image: 'ABC/Pencil.png',
          sound: 'Sounds/P.mp3',
        },
        {
          letter: 'Q',
          image: 'ABC/Queen.png',
          sound: 'Sounds/Q.mp3',
        },
        {
          letter: 'R',
          image: 'ABC/Ring.png',
          sound: 'Sounds/R.mp3',
        },
        {
          letter: 'S',
          image: 'ABC/Snake.png',
          sound: 'Sounds/S.mp3',
        },
        {
          letter: 'T',
          image: 'ABC/Turtle.png',
          sound: 'Sounds/T.mp3',
        },
        {
          letter: 'U',
          image: 'ABC/Umbrella.png',
          sound: 'Sounds/U.mp3',
        },
        {
          letter: 'V',
          image: 'ABC/Vacuum.png',
          sound: 'Sounds/V.mp3',
        },
        {
          letter: 'W',
          image: 'ABC/Wagon.png',
          sound: 'Sounds/W.mp3',
        },
        {
          letter: 'X',
          image: 'ABC/Box.png',
          sound: 'Sounds/X.mp3',
        },
        {
          letter: 'Y',
          image: 'ABC/Yo-Yo.png',
          sound: 'Sounds/Y.mp3',
        },
        {
          letter: 'Z',
          image: 'ABC/Zipper.png',
          sound: 'Sounds/Z.mp3',
        },
      ];
    },

    getAlphabetRows() {
      const rows = [];
      const itemsPerRow = 3;
      const alphabet = this.getAlphabet();
      for (let i = 0; i < alphabet.length; i += itemsPerRow) {
        const row = [];
        for (let j = 0; j < itemsPerRow; j += 1) {
          if (i + j < alphabet.length) row.push(alphabet[i + j]);
        }
        rows.push(row);
      }
      return rows;
    },
  },
};
</script>
