<template>
    <footer>
        <h3>Powered by <span>Allah</span> swt</h3>
    </footer>
</template>


<style lang="scss" scoped>
        footer {
        align-self: end;
        
        padding: 0.50rem 0;
        h3 {
            text-align: center;
            font-size: 0.55rem;    
            letter-spacing: 3px;
            text-transform: uppercase;
            span {
                font-weight: 600;
                font-size: 0.85rem;
                color: $accent;
            }
        }
    }

    @media only screen and (min-width: 500px) {
        // cant get footer to stay at bottom :L
        footer {
        background: #fff;
        // border-top: 1px solid #eee;
        // Temp styles below
        position: -webkit-sticky;

        bottom: 0;
            h3 {
                letter-spacing: 3px;
                text-transform: uppercase;
                font-size: 0.70rem;
                font-weight: 600;
                span {
                    font-size: 1.1rem;
                }
            }
            
        }
    }
</style>
