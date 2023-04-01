<!-- <template>
    <div id="login">

        <div class="center-div">
        
                <div class="Logindiv">

                    <h1 class="LoginLogo" >Login</h1>

                    <label class="LoginInputFields" for="LoginInputFields" style="    margin-bottom: 10%;">
                    <input   type="text" name="email" v-model="input.username" id="LoginInputFields"  placeholder="&nbsp;" />
                 
                    </label>


                    <label class="LoginInputFields" for="LoginInputFields" >
                    <input   type="password" name="password" v-model="input.password" id="LoginInputFields"  placeholder="&nbsp;" /> 
                    <span class="Loginlabel">Password</span>
                    <span class="focus-bg"></span>
                    </label>


                    <b-button style="width: 100%;    display: block;"  class="btn btn-primary" type="button" v-on:click="login()" block variant="primary">Login</b-button>



                    <p class="forgot-password text-right" style="display: block;text-align: center;">
                    <router-link :to="{name: 'login'}">     Forgot password?</router-link>
                    </p>

                    <p class="forgot-password text-right" style="display: block;text-align: center;">
                    <router-link :to="{name: 'Registration'}">     New user, Sign up?</router-link>
                    </p>




        
              </div>
         </div>
    </div>
   
</template>



<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }


    
</script>

<style scoped>

 

   .Logindiv{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: grid;
        background-color: rgb(255, 255, 255);
        opacity: 0.5;
        background-color: rgb(255, 255, 255);
        opacity: 0.9;
        padding: 10%;
   }
   
   .LoginLogo{
        text-align: center;
        color: #000;
   }
   


    .LoginInputFields {
        position: relative;
        margin: auto;
        width: 100%;
        max-width: 280px;
        border-radius: 3px;
        overflow: hidden;
    }
    .LoginInputFields .Loginlabel {
        position: absolute;
        top: 20px;
        left: 12px;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 500;
        transform-origin: 0 0;
        transform: translate3d(0, 0, 0);
        transition: all 0.2s ease;
        pointer-events: none;
    }
    .LoginInputFields .focus-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.05);
        z-index: -1;
        transform: scaleX(0);
        transform-origin: left;
    }


    .LoginInputFields input {
        -webkit-appearance: none;
        -moz-appearance: none;
            appearance: none;
        width: 100%;
        border: 0;
        font-family: inherit;
        padding: 16px 12px 0 12px;
        height: 56px;
        font-size: 16px;
        font-weight: 400;
        background: rgba(0, 0, 0, 0.02);
        box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.3);
        color: #000;
        transition: all 0.15s ease;
        }
    .LoginInputFields input:hover {
        background: rgba(0, 0, 0, 0.04);
        box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.5);
    }
    .LoginInputFields input:not(:-moz-placeholder-shown) + .Loginlabel {
        color: rgba(0, 0, 0, 0.5);
        transform: translate3d(0, -12px, 0) scale(0.75);
    }
    .LoginInputFields input:not(:-ms-input-placeholder) + .Loginlabel {
        color: rgba(0, 0, 0, 0.5);
        transform: translate3d(0, -12px, 0) scale(0.75);
    }
    .LoginInputFields input:not(:placeholder-shown) + .Loginlabel {
        color: rgba(0, 0, 0, 0.5);
        transform: translate3d(0, -12px, 0) scale(0.75);
    }
    .LoginInputFields input:focus {
        background: rgba(0, 0, 0, 0.05);
        outline: none;
        box-shadow: inset 0 -2px 0 #0077FF;
    }
    .LoginInputFields input:focus + .Loginlabel {
        color: #0077FF;
        transform: translate3d(0, -12px, 0) scale(0.75);
    }
    .LoginInputFields input:focus + .Loginlabel + .focus-bg {
        transform: scaleX(1);
        transition: all 0.1s ease;
    }

</style> -->

<template>
    <!------------------------- COL CENTER ------------------->
     <img class="wave" src="@/images/wave.png">
   
              <div class="logincontainer">
                       <div class="img">
                         <img src="@/images/bg.svg">
                       </div>

                          <!------------------------- form strts ------------------->
                         <div class="login-content">

                             <Form @submit="handleLogin" :validation-schema="schema">
                               <h1 class="title" style="margin-bottom: 10%; color: #0071A8;"  >Welcome back</h1>
                                  <!------------------------email field ------------------->
                               <div class="input-div one">
                                     <div class="i">
                                       <i class="fas fa-user"></i>
                                     </div>
                                     <div class="div" >
                                       <h5>Email</h5>
                                       <Field name="email" type="text" class="input" />
                                       <span></span>
                                       
                                     </div>
                               </div>

                                <!------------------------password field ------------------->

                               <div class="input-div pass">
                                       <div class="i"> 
                                           <i class="fas fa-lock"></i>
                                       </div>
                                       <div class="div" >
                                         <h5>Password</h5>
                                         <Field name="password" type="password" class="input" />
                                       </div>
                             </div>

                              <!------------------------error fields------------------->
                             <div style="color: red;">
                                 <ErrorMessage name="email"  />
                                 <p></p>
                                 <ErrorMessage name="password"  />
                                 <p></p>
                             </div>
                               <!-- <div style="display: table-cell; position: fixed;">
                                 <input id="rememberMe" name="rememberMe" type="checkbox" class="form-check-input me-2" />
                                 <label style="display: inline;" class="form-check-label" for="rememberMe">Remember me</label>
                               </div> -->
                          <!------------------------button field ------------------->
                               <div style="    margin-top: 10%;">
                                 <button class="btn" :disabled="loading">
                                   <span v-show="loading" class="spinner-border spinner-border-sm me-2"></span>
                                   Login
                                 </button>
                               </div>

                                <!------------------------addirional button field ------------------->
                               <div class="d-flex justify-content-between">
                                   <a href="#" class="text-sm text-primary">Forgot password?</a>
                                   <a href="register" class="text-sm text-primary">Sign up</a>
                               </div>


                                <!------------------------success mesg field ------------------->
                               <div v-if="message" class="alert alert-danger mt-4" role="alert">
                                   {{ message }}
                               </div>
                             </Form>

                              <!------------------------form ends ------------------->
                     
                         </div>
       
    
           </div>
</template>


<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
const inputs = document.querySelectorAll(".input");


function addcl(){
   let parent = this.parentNode.parentNode;
   parent.classList.add("focus");
}

function remcl(){
   let parent = this.parentNode.parentNode;
   if(this.value == ""){
       parent.classList.remove("focus");
   }
}


inputs.forEach(input => {
   input.addEventListener("focus", addcl);
   input.addEventListener("blur", remcl);
});

export default {
 name: "Login",
 components: {
   Form,
   Field,
   ErrorMessage,
 },
 data() {
   const schema = yup.object().shape({
     email: yup.string().required("Username is required!"),
     password: yup.string().required("Password is required!"),
   });

   return {
     loading: false,
     message: "",
     schema,
   };
 },
 computed: {
   loggedIn() {
     return this.$store.state.auth.status.loggedIn;
   },
 },
 created() {
   if (this.loggedIn) {
     this.$router.push("/profile");
   }
 },
 methods: {
   handleLogin(user) {
     this.loading = true;

     this.$store.dispatch("auth/login", user).then(
       () => {
         this.$router.push("/profile");
       },
       (error) => {
         this.loading = false;
         this.message =
           (error.response &&
             error.response.data &&
             error.response.data.message) ||
           error.message ||
           error.toString();
       }
     );
   },
 },
};
</script>


