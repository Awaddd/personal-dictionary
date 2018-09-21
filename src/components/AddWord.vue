<template>
    <section>
        <form @submit.prevent="addWord">
            <div class="input-group">
                <label for="addWord">Word</label>
                <div class="input-row">
                    <input type="text" id="addWord" v-model="word">
                    <button v-if="!definitionOption">Add Word</button>
                </div>
            </div>
            
            <div class="input-group" v-if="definitionOption">
                <label for="addDefinition">Definition</label>
                <div class="input-row" >
                    <input type="text" id="addDefinition" v-model="definition">
                    <button>Add</button>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
// import {eventBus} from '../main';

// temp solution to test if object is empty
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export default {
    props: {
        definitionOption: Boolean
    },
    data() {
        return {
            word: null,
            definition: null
            // definition: null
        }
    },
    computed: {
        wordEntered () {
            if(this.word != null  && this.word != ""){
                return true
            } else {
                return false
            }
        },
        definitionEntered () {
            if(this.definition != null && this.definition != ""){
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        addWord: function() {
            let dictionaryEntry = {

            };
            if (this.wordEntered == true && this.definitionEntered == true){
                dictionaryEntry = {
                    word: this.word,
                    definition: this.definition
                };

            } else if (this.wordEntered == true && this.definitionEntered == false){
                dictionaryEntry = {
                    word: this.word,
                    definition: null
                };                
            }

            if (!isEmpty(dictionaryEntry)){
                this.$emit('word-added', dictionaryEntry);
            }
            this.word = null;
            this.definition = null;
            
        }
    }
}
</script>


<style lang="scss" scoped>


    section{
        display: grid;
        grid-template-rows: repeat(2, max-content);
        grid-gap: 5px;
        justify-items: start;

        form {
            display: grid;
            grid-gap: 25px;
        }

        label {
           font-size: 0.70rem;;
           font-weight: 900;
        //    color: #757575;
            color: $sub-text;
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
