<template>
  <div class="login">
      <div class="container">
    
        <section class="head">
          <div class="logo">
              <div class="logo-img">  
                  <!-- <img src="./img/material-mic.png" alt="" > -->
              </div>
        </div>
          <h2 class="welcome-text"> P<span class="brand">ocket</span> </h2>
          <span class="slogan">
            Okay Google. What does semantic mean?
          </span>
        </section>

        <section class="login">

          <form>

            <label for="username">Email
            <input type="text" id="username" value="Abubakar08@mail.com">
            </label>
            <label for="password">Password
            <input type="password" id="password" value="password">
            </label>
            
              <router-link to="/dictionary">
                <button class="sign-in">
                  Login
                </button>
              </router-link>
            

          </form>

          <p class="sign-up">Sign up for an account</p>

        </section>
        <section class="login-footer">
          <!-- make footer stick to bottom -->
            <!-- {{footerText}} <br> Copyright &copy {{team}} 2017 -->
        </section>

      </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
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
    grid-template-rows: 1fr 2fr;
    padding: 10px 0;
    justify-self: center;
    align-self: center;
    align-items: start;
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
}

.head{
    display: grid;    
    grid-template-rows: 1fr max-content 1fr;
    align-content: center;
    /* background: red; */
}

.logo{
    /* width: 80px;
    height: 80px; */
    /* background: rgba(228, 228, 228, 0.2); */
    /* background: rgb(160, 83, 233); */
    /* border-radius: 15px; */
    /* transform: rotate(340deg); */
    /* transform: rotate(20deg); */
    justify-self: center;
    /* margin: 0 40px 0 0; */
    display: grid;
    grid-template-columns: max-content max-content;
    
}

.logo-img{
    justify-self: start;
    align-self: center;
    /* width: 62px;
    height: 45px; */
    width: 40px;
    height: 40px;
    /* height: auto; */
    /* background: url(../img/testlogo.png); */
    // background: url(../img/light.png);
    background-position-x: 0%;
    background-position-y: 0%;
    background-position: center;
    background-size: contain;
    /* background-color: #25B7D3; */
    border-radius: 30px;
    /* transform: rotate(20deg); */
    margin: 2px 5px 0 0;
    
}

.logo-text{
    align-self: center;
    /* border-bottom: 3px solid #25B7D3;     */
    /* padding: 0 2px 5px 2px; */
    font-size: 1.15rem;
    background: linear-gradient(to right, $primary, $accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
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
    color: rgb(156, 154, 154);
    /* font-size: 0.90rem; */
    font-size: 0.70rem; 
    text-align: center;
    /* text-transform: capitalize; */
}


.login form{
    display: grid;
    grid-gap: 35px;
    /* padding: 0 30px; */
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
    border: 0;
    padding: 10px 80px;
    text-transform: uppercase;
    color: #fff;
    font-size: 0.90rem;
    border-radius: 20px;
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
    .login {
      min-height: 400px;
    }
    .container {
      max-width: 700px;
    }
}
</style>
