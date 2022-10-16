<template>

  <h2>Exercise 3</h2>
  <h4>Statement</h4>
  <div class="statement">
    <p>
      You'll find a VueJS page running, missing CSS styles.
    </p>
    <p>
      Without changing any HTML or Javascript, and using predefined CSS variables,
      update the style of the page, so then it matches the designs and situations below:
    </p>
    <ul class="examples">
      <li>Background layout
        <img class="preview" src="./assets/backgroundLayout.png"/>
      </li>
      <li>Dynamic
        <img class="preview" src="./assets/dynamic.gif"/>
      </li>
      <li>Responsive
        <img class="preview" src="./assets/responsive.gif"/>
      </li>
    </ul>
  </div>
  <h4>Solution</h4>
  <div class="solution">

    <div class="input-container">
      <span>Number of items to display: </span>
      <input type="number" v-model="dataSize" min="1" :max="people.length"/>
    </div>
    <div class="container">
      <div class="item" v-for="person in items" :key="person.id">
        <div class="name">{{ person.name }}</div>
        <div class="age"><b>Age:</b> <span>{{ person.age }}</span></div>
        <div class="eye-color">
          <b class="eye">Eyes:</b>
          <img src="./assets/eye.png" :class="[person.eyeColor, 'eye-icon']" />
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import people from './assets/people.json';

  export default {
    name: 'App',
    data() {
      return {
        dataSize: 10,
        people: people,
      };
    },
    computed: {
      items() {
        return this.people.slice(0, this.dataSize);
      },
    },
    methods: {},
  };
</script>

<style lang="scss">

  .statement, .solution {
    border: 1px solid #dedede;
    padding: 0 0.5em;
    min-height: 40px;

    .code {
      color: #434343;
      background-color: #f9f9f9;
      padding: 0 5px;
    }

    .examples {
      text-align: center;
      list-style: none;

      li {
        display:inline-block;

        .preview {
          display: block;
          margin: 5px;
          height: 170px;
          border: 1px solid black;
        }
      }
    }

    .input-container {
      text-align: center;
    }
  }

  :root {
    --font: Avenir, Helvetica, Arial, sans-serif;
    --background-1: #004c6d;
    --background-2: #547c98;
    --background-3: #93afc5;
    --eye-brown: 192deg;
    --eye-green: 290deg;
    --eye-blue: -32deg;
    --item-margin: 10px;
    --item-padding: 20px;
    --border-radius: 5px;

    --items-by-row-when-screen-is-less-than-600px: 2;
    --items-by-row-when-screen-is-more-than-600px: 4;
    --items-by-row-when-screen-is-more-than-1024px: 7;
  }

  // TODO: Add your CSS Styling here
  .solution {
    display: grid;
    place-items: center;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    gap: 12px;
  }

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--item-padding);
    border-radius: var(--border-radius);
    font-family: var(--font);
    color: white;
      &:nth-child(3n + 1) {
        background: var(--background-1);
      }

      &:nth-child(3n + 2) {
        background: var(--background-2);
      }

      &:nth-child(3n + 3) {
        background: var(--background-3);
      }
      .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: calc(100% - 20px);
        font-size: 18px;
        font-weight: 700;
      }

    .age{
      margin-top: 10px;
    }
    .eye-color {
      display: flex;
      align-items: center;
      .brown {
        filter: hue-rotate(var(--eye-brown));
      }
      .green {
        filter: hue-rotate(var(--eye-green));
      }
      .blue {
        filter: hue-rotate(var(--eye-blue));
      }
      .eye-icon {
        width: 40px;
        height: 40px;
        margin-left: 5px;
      }
    }
    @media screen and (max-width: 600px) {
      width: calc(100% / var(--items-by-row-when-screen-is-less-than-600px) - 48px);
    }
    @media screen and (min-width: 600px) {
      width: calc(100% / var(--items-by-row-when-screen-is-more-than-600px) - 54px);
    }
    @media screen and (min-width: 1024px) {
      width: calc(100% / var(--items-by-row-when-screen-is-more-than-1024px) - 52px);
    }
  }

</style>
