<template>
    <main>
        <p class="heavy">Learning a language? Need to keep track of your words?</p>
        <!-- <p>Enter new words you've learnt and hit enter</p> -->
        <p> Simple enter a new word you have learnt and hit enter or click the button below to add it to your Pocket Dictionary</p>
        <add-word @word-added="addWord"></add-word>
        <p class="table-options">Want more options? <button class="arrow" @click="addFields">^</button></p> 
        <p v-if="dictionary.length < 1" class="heavy">Your words will appear below - add them above first!</p>
        <results :results="dictionary" 
        v-else
        ></results>
    </main>
</template>

<script>
import AddWord from './AddWord.vue';
import results from './Results.vue';
export default {
    data: function () {
        return {
            dictionary: [
                
            ]
            // definitionField: false
        }
    },
    methods: {
        addWord(word){
            this.dictionary.push(word);
        },
        addFields() {
            this.definitionField = !this.definitionField;
        }
    },
    components: {
        'add-word': AddWord,
        results
    }
}
</script>


<style lang="scss" scoped>
    main {
        padding: 1.5rem 2rem;
        display: grid;
        grid-gap: 30px;
        align-self: start;

        p {
            font-size: 0.90rem;
        }

        .heavy {
            font-weight: 900;
        }

        .arrow {
            transform: rotateX(180deg);
            font-size: 1rem;
            padding: 5px 12px;
        }

        .table-options{
            display: grid;
            grid-template-columns: max-content max-content;
            grid-gap: 15px;
            align-items: center;
        }
    
    }

    // @media only screen and (min-width: 350px) {
    //     main {
    //       padding: 1.5rem 2rem;
    //     }
    // }

    @media only screen and (min-width: 800px) {
        main {
            align-self: start;
        // Margin 0 auto centering everything in middle! keep in mind
          margin: 0 auto;
          padding: 3rem 2.5rem;
        }
    }
</style>
