<template>
    <header>
        <div class="nav-links">
            <slot></slot>
        </div>
        <h1>Introducting Pocket Dictionary</h1>
        <p>Learn at your own convenience</p>
    </header>
</template>


<style lang="scss" scoped>
    header{
        background: linear-gradient(45deg, #7B1FA2, #303F9F);
        // height: 200px; for pc
        height: 150px;

        display: grid;
        grid-template-rows: max-content max-content;
        color: #fff;
        align-content: center;

        text-align: center;

        img {
            opacity: 0.1;
        }



        h1 {
            margin: 0;
            // font-size: 1.2rem;
            font-size: 1.1rem;
            font-weight: 600;
            margin: 10px;
        }
        
        p {
            font-size: 0.85rem;
        }

    }

    @media only screen and (min-width: 500px) {
        Header {
            
            height: 200px;

            h1 {
                font-size: 1.4rem;
                margin: 10px;
            }
        }
    }
</style>
