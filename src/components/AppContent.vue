<template>
    <main>
        <div class="main-text">
            <p class="heavy">Learning a language? Need to keep track of your words?</p>
            <p> Simple enter a new word you have learnt and hit enter or click the button below to add it to your Pocket Dictionary</p>
        </div>
        <add-word @word-added="onAdd"
        :definitionOption="moreOptions"></add-word>


        <p v-if="bool2 === true" class="table-options">Want more options? 
            
            <i class="material-icons md-36"
            @click="changeOptions(true)">expand_more</i>
            
        </p> 
        <p v-else class="table-options">Less options? 
            
            <i class="material-icons md-36"
            @click="changeOptions(false)">expand_less</i>
            
        </p> 

        
        <p v-if="dictionary.length < 1" class="heavy">Your words will appear below 
            - add them above first!</p>
        
        <results :results="dictionary" v-else></results>
    </main>
</template>

<script>
import db from '../db'
import AddWord from './AddWord.vue';
import results from './Results.vue';
export default {
    created () {
        this.getDictionary()
    },
    data: function () {
        return {
            dictionary: [
                
            ],
            moreOptions: false,
            bool2: true
            // definitionField: false
        }
    },
    methods: {
        // addWord(word){
        //     this.dictionary.push(word);
        // },
        changeOptions (bool) {
            this.moreOptions = bool;
            this.bool2 = !this.bool2;
        },
        getDictionary(){
            db.collection('Dictionary').get().then(querySnapshot => {
                const dictionary = []
                querySnapshot.forEach(doc => {
                    // console.log(doc.data())
                    dictionary.push(doc.data())
                })

                this.dictionary = dictionary
            })
        },
        onAdd(word){
            db.collection('Dictionary').add(word).then(this.getDictionary)
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

        .main-text p{
            margin: 10px 0;
        }

        p {
            font-size: 0.90rem;
        }

        .heavy {
            font-weight: 600;
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
          width: 65%;
        }
    }

    @media only screen and (min-width: 1200px) {
        main {
          width: 50%;
        }
    }
</style>
