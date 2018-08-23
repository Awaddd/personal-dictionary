<template>
    <footer>
        <h3>Powered by <span>Allah</span> swt</h3>
    </footer>
</template>


<style lang="scss" scoped>
        footer {
        
        padding: 20px 0;
        h3 {
            text-align: center;
            font-size: 0.85rem;
            font-weight: 500;
            

            span {
                font-weight: 600;
                font-size: 1rem;
                color: rgb(12, 226, 155);
            }
        }
    }

    @media only screen and (min-width: 500px) {
        // cant get footer to stay at bottom :L
        footer {
        background: #fff;
        border-top: 1px solid #eee;
        // Temp styles below
        position: -webkit-sticky;

        align-self: end;
        bottom: 0;
            h3 {
                font-size: 1rem;
                font-weight: 500;
                span {
                    font-size: 1.2rem;
                }
            }
            
        }
    }
</style>
