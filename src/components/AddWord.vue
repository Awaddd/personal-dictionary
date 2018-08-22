<template>
    <section>
        <label for="addWord">Word</label>
        <form @submit.prevent="addWord">
            <input type="text" id="addWord" v-model="word">
            <button>Add Word</button>
        </form>
    </section>
</template>

<script>
// import {eventBus} from '../main';

export default {
    data() {
        return {
            word: null
            // definition: null
        }
    },
    methods: {
        addWord: function() {

            let dictionaryEntry = {
                word: this.word
                // definition: this.definition
            };
            this.$emit('word-added', dictionaryEntry);
            // Need to traverse through parent to get to child so we can conditionally
            // render results to display only when results contains something
            // if not we could use below eventbus syntax
            // eventBus.$emit('word-added', dictionaryEntry);
            this.word = null;
            
        }
    }
}
</script>


<style lang="scss" scoped>

    $g: #8CE5B5;

    section{
        display: grid;
        grid-template-rows: repeat(2, max-content);
        grid-gap: 5px;
        justify-items: start;

        form {
            width: 100%;
            display: grid;
            grid-template-columns: 4fr 3fr;
            grid-gap: 10px;

        }

        label {
           font-size: 0.70rem;;
           font-weight: 900;
           color: #757575;
        }
    }

    @media only screen and (min-width: 700px) {
        section {
          form {
            width: 70%;
            grid-gap: 15px;

          } 
        }
    }

</style>
