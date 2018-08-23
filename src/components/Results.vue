<template>
    <section>
        <p>Your Words</p>

        <div class="results-table">
            <div class="table-head">
                <div># ID</div>
                <div>Word</div>
                <div>Translation</div>
            </div>
            <div class="table-content">

                <template>
                    <!-- <div class="table-row" v-for="(word, i) in words" :key="i">            
                            <div>{{word.id}}</div>
                            <div>{{word.word}}</div>
                            <div>{{word.meaning}}</div>
                        
                    </div> -->
                    <div class="table-row" v-for="(words, i) in results" :key="i">
                        <div>{{i}}</div>
                        <div>{{words.word}}</div>
                        <div>{{words.definition}}</div>
                    </div>
                    <!-- <div class="table-row">
                        <div>{{result}}</div>
                    </div> -->
                </template>

            </div>
        </div>
    </section>
</template>

<script>
// import {eventBus} from '../main';

export default {
    data: function () {
        return {
        }
    },
    props: ['results']
    // created() {
    //     eventBus.$on('word-added', (word) => {
    //         this.results.push(word);
    //     });
    // }
}
</script>



<style lang="scss" scoped>
    $g: #8CE5B5;

    section {
        display: grid;
        grid-gap: 15px;

        p {
           font-size: 0.90rem;
           font-weight: 900;
           color: $g;
        }

        .results-table {
            border: 1px solid #eee;
            // min-height: 80px;
            border-radius: 2px;

            display: grid;
            grid-template-rows: max-content 1fr;

            .table-head, .table-row {
                align-items: center;
                display: grid;
                grid-template-columns: 1fr 3fr 3fr;
                grid-gap: 10px;
                padding: 20px 15px;

            }
            .table-head{
                background: $g;
                color: #fff;
                border-radius: 2px 2px 0 0;
                font-size: 0.90rem;
                font-weight: 600;            
 
            }

            .table-row {
                border-bottom: 1px solid #eee;
                font-size: 0.80rem;
                
            }
            
        }
    }

    @media only screen and (min-width: 500px) {
    section {
        .results-table {
            // min-height: 180px;

                .table-head, .table-row {
    
                padding: 20px 30px;

                }

            }
        }
        
    }
</style>
