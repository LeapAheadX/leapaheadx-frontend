<!-- <template>
    <div class="vue-tempalte">
        <form>
          
      
            <div class="Logindiv">

                <h1 class="LoginLogo">Sign Up</h1>

                    <label class="LoginInputFields" for="LoginInputFields" >Email address>
                    <input type="email"  placeholder="&nbsp;"  />
                    <span class="Loginlabel">Email</span>
                    <span class="focus-bg"></span>
                    </label>
            
                    <label class="LoginInputFields" for="LoginInputFields" >Password 
                    <input type="password" placeholder="&nbsp;"  />
                    <span class="Loginlabel">Password</span>
                    <span class="focus-bg"></span>
                    </label>
                
                 
                    <b-button style="width: 100%; display: block;"  class="btn btn-primary" type="button" block variant="primary">Sign Up</b-button>

                    <p class="forgot-password text-right" style="display: block;text-align: center;">
                    <router-link :to="{name: 'login'}">  Already registered, Login ?</router-link>
                    </p>


            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
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


    <img class="wave" src="@/images/finalbg.png">


       <!------------------------- COL CENTER ------------------->
       <div class="logincontainer">
        <div class="img">
                          <img src="@/images/bg.svg">
                        </div>


      <div class="login-content"  >

         <!------------------------- FORM STARTS  ------------------->
 
              <Form @submit="handleRegister" :validation-schema="schema">

                    <div v-if="!successful">
                      <h1 class="title"   style="margin-bottom: 10%; color: #0071A8;" >Welcome</h1>
                          <!-------------------------  EMAIL FIELD   ------------------->
                          <div class="input-div one" >
                                  <div class="i">
                                    <i class="fas fa-user"></i>
                                  </div>
                                  <div class="div" >
                                        <h5>Email</h5>
                                        <Field name="email" type="email" class="input" />
                                  </div>
                          </div>
                            <!------------------------- PASSWORD FIELD  ------------------->
                          <div class="input-div one" >
                                  <div class="i">
                                    <i class="fas fa-user"></i>
                                  </div>
                                  <div class="div" >
                                    <h5>Password</h5>
                                    <Field name="password" type="password" class="input" />
                                  </div>
                          </div>
                          <!------------------------- ROLE DROPDOWN FIELD  ------------------->
                          <div class="input-div pass">
                              <div class="i"> 
                                  <i class="fas fa-lock"></i>
                              </div>
                              <div class="div" >
                                  <h5>Role</h5>
                                  <Field as="select" name="role" style="border: none; color: #999;" >
                                    <option value="">Select Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="vendor">Vendor</option>
                                  </Field>
                              </div>
                        </div>


                        <!-------------------------ERROR FIELDS  ------------------->
                        <div style="color: red;">

                                  <ErrorMessage name="email" class="error-feedback" />
                                  <p></p>
                                  <ErrorMessage name="password" class="error-feedback" />
                                  <p></p>
                                  <ErrorMessage name="role" class="error-feedback" />
                                  <p></p>
                        </div>

                        <!------------------------- BUTTON FIELD  ------------------->
                          <div style="margin-top: 10%;" >
                                <button  class="btn" :disabled="loading">
                                  <span v-show="loading" class="spinner-border spinner-border-sm" ></span>
                                  Sign Up
                                </button>
                          </div>
                          <div>
                            <a href="login" style="text-align: center;" class="text-sm text-primary" >Already have an account?</a>      
                          </div>
                      </div>
              </Form>
             <!------------------------- FORM ENDS  ------------------->
             <div style="
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
              ">
                <div style="
                        text-align: center;
                        margin-left: 30%;
                        margin-right: 30%;
                      "
    

                v-if="message"
                class="alert"
                :class="successful ? 'alert-success' : 'alert-danger'"
              >
             {{ message }} 
            </div>
          </div>

      </div>



   </div>

   <!------------------------- COL CENTER 2  ------------------->
  



</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({

      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
      role: yup
      .string()
      .required("Role is required!")
      .oneOf(["admin", "vendor"], "Role must be either admin or vendor"),
    });

    return {
      successful: false,
      loading: false,
      message: "",
      schema
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>

