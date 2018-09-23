<template>
  <div class="login">
      <div class="container">
    
        <section class="head">
          <h2 class="welcome-text"><span class="brand"></span> </h2>
          <span class="slogan">
            Forever annihilating the barriers of communication.
          </span>
        </section>
        
        
        <section class="login" v-if="isRegister == false">
          <form>

            <label for="username">Email
            <input type="text" value="Abubakar08@mail.com" v-model="registerDetails.email">
            </label>
            <label for="password">Password
            <input type="password" value="password" v-model="registerDetails.password">
            </label>

            <label for="password">Confirm Password
            <input type="password" value="password" v-model="registerDetails.confirmPassword">
            </label>
            
            <div>
                <button class="sign-in" @click.stop.prevent="processForm($event, 'register')">
                  Register
                </button>
            </div>


            

          </form>
        

          <p class="sign-up" @click="isRegister = !isRegister">Got an account? Login</p>

        </section>

        <section class="login" v-else>

          <form>

            <label for="username">Email
            <input type="text" value="Abubakar08@mail.com" v-model="loginDetails.email">
            </label>
            <label for="password">Password
            <input type="password" value="password" v-model="loginDetails.password">
            </label>
            
            <div>
                <button class="sign-in" @click.stop.prevent="processForm($event, 'login')">
                  Login
                </button>
            </div>

            

          </form>
          <p class="sign-up" @click="isRegister = !isRegister">Sign up for an account</p>
        


        </section>

      </div>
  </div>
</template>

<script>
import {firebaseAuth, db} from '../db';


export default {
  name: "Landing",
  data() {
      return {
        isRegister: false,
        registerDetails: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        loginDetails: {
            email: '',
            password: ''
        }
      }
  },
  methods: {
      processForm(event, formType){
        event.preventDefault();

        if (formType === 'register') {

            if (this.registerDetails.password === this.registerDetails.confirmPassword) {
                firebaseAuth
                    .createUserWithEmailAndPassword(this.registerDetails.email, this.registerDetails.password)
                    .then(
                        data => {
                            var user = firebaseAuth.currentUser;
                            // alert(`Account created for ${data.user.email}`);
                            this.$router.go({path: this.$router.path});                  
                        },
                        err => {
                            alert(err.message);
                        }
                    );
            }

        } else if (formType === 'login'){
            
            firebaseAuth
                .signInWithEmailAndPassword(this.loginDetails.email, this.loginDetails.password)
                .then(
                    data => {
                        // alert(`Logged in as ${data.user.email}`);
                        // this.$router.push("/dictionary");       
                        this.$router.go({path: this.$router.path});                  
                     
                    },
                    err => {
                        alert(err.message);
                    }
                );
        }
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.login {
  display: grid;
}

button {
  width: 100%;
}

.container{
    display: grid;
    grid-template-rows: max-content 2fr;
    grid-gap: 50px;
    justify-self: center;
    align-self: center;
    align-items: start;
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
}

.head{
    display: grid;    
    grid-template-rows: max-content 1fr;
    align-items: end;
    margin-top: 20px;
}

.welcome-text{
    color: $primary;
    text-align: center;
}

.brand {
    background: linear-gradient(to right, $primary, $accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.slogan{
    color: rgb(0, 0, 0);
    /* font-size: 0.90rem; */
    font-size: 0.90rem; 
    font-weight: 300;
    letter-spacing: 0.5px;
    line-height: 1.5;
    text-align: center;
    /* text-transform: capitalize; */
}


.login form{
    display: grid;
    grid-gap: 35px;
    padding: 0 1.2rem;
    /* background: red; */
}

.login form label{
    text-transform: uppercase;
    color: rgb(156, 154, 154);
    font-size: 0.70rem;
}

.login form input[type=text], .login form input[type=password]{
    padding: 10px 0;
    border: 0;
    border-bottom: 1px solid rgb(231, 231, 231);
    width: 100%;
}

.sign-in{
    background: $accent;
    padding: 13px 80px;
    text-transform: uppercase;
    color: #fff;
    font-size: 0.80rem;
    // border-radius: 20px;
    font-weight: 600;
    cursor: pointer;
}

.sign-up{
    text-align: center;
    text-transform: uppercase;
    color: rgb(156, 154, 154);
    font-size: 0.60rem;
    margin-top: 25px;
    cursor: pointer;
}

.login-footer{
    text-align: center;
    text-transform: uppercase;
    color: rgb(78, 78, 78);
    font-weight: 600;
    font-size: 0.60rem;
    margin-top: 20px;
}


@media only screen and (min-width: 700px) {
    .head {
        align-self: center;
        margin: 20px 0;
    }
    .login {
      min-height: 400px;
      align-content: center;
    //   margin: 2rem 0;
    }
    .container {
      max-width: 700px;
      grid-gap: 40px;
    }
    .slogan {
        font-size: 1.2rem;
    }
    .sign-up, .sign-in {
        font-size: 0.70rem;
    }
}

@media only screen and (min-width: 1600px) {
    .head {
        margin: 40px 0;
    }
    .slogan {
        font-size: 1.25rem;
    }
}
</style>
