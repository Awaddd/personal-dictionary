<template>
    <header>
        <!-- <div class="nav-links">
            <slot></slot>
        </div> -->
        <div class="header-content-wrapper">
            <div class="header-content">
                <h1>Introducting Pocket Dictionary</h1>
                <p>Learn at your own convenience</p>
            </div>

            <button class="logout">Logout</button>    
        </div>
    
    </header>
</template>


<style lang="scss" scoped>
    header {
        background: linear-gradient(45deg, #7B1FA2, #303F9F);
        height: 170px;
        padding: 0 2rem;
        box-sizing: border-box;
        .header-content-wrapper{
            height: 100%;
            display: grid;
            color: #fff;

            text-align: center;

            // img {
            //     opacity: 0.1;
            // }

            .header-content {

                align-self: end;

                h1 {
                    margin: 0;
                    font-size: 1.3rem;
                    font-weight: 300;
                    margin: 10px;
                    align-self: end;
                }
            
                p {
                    align-self: start;
                    font-size: 0.85rem;
                }
            }

            .logout {
                width: max-content;
                height: max-content;
                justify-self: end;
                align-self: end;
                margin: 0 0 0.5rem 0;
                border-bottom: 2px solid #bdbdbd;
                color: #478DFC;
                letter-spacing: 1.5px;
                background: #fff !important;
                border-radius: 2px;
                font-size: 0.65rem;
                cursor: pointer;
            }
        }
    }
    

    @media only screen and (min-width: 500px) {
        header {
            
            height: 200px;

            .header-content-wrapper {

                .header-content {
                    h1 {
                        font-size: 1.8rem;
                        margin: 10px;
                    }
                    p {
                        font-size: 1rem;
                    }
                }

                .logout {
                    // justify-self: center;
                }
            }
        }
    }

    @media only screen and (min-width: 800px) {
        header {
            .header-content-wrapper{
                width: 65%;
                margin: 0 auto;
                .logout{
                    margin: 0 0 0.5rem 0;
                }
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        header {
            .header-content-wrapper{
                width: 50%;
                margin: 0 auto;

            }
        }
    }
</style>
