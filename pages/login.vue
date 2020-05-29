<template>
  <div class="container ">
    <div class="d-flex justify-content-between ">
      <div class="content-big-box">
      <div class="content-big-box">
        <h4>Don´t have an accout yet?</h4>
        <p>Join the community of ownwers and enjoy a fully equiped
          platform to post your properties!
        </p>
        <div class="d-flex">
          <div class="w-50">
            <nuxt-link to="/register" class="btn">Create an account</nuxt-link>
          </div>
        </div>

      </div>
      </div>
      <div class="content-big-box">
      <div class="content-big-box">
        <form action="" class="d-flex flex-column container mb-3">
          <h4 class="mb-4">Log in to your account </h4>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Email</span>
            </div>
            <input type="email" class="form-control" v-model="email" placeholder="Type your email" aria-label="Email" aria-describedby="basic-addon1" required>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Password</span>
            </div>
            <input type="password" class="form-control" v-model="password" placeholder="Type your password" aria-label="Email" aria-describedby="basic-addon1" required>
          </div>
          <input type="submit" value="Log in to an existent account" v-on:click="login()">
        </form>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import {loginUser} from '../components/axios'

export default {
  name: 'Login',
    data() {
      return {
          email: '',
          password: '',
          params: {}
      }
    },
    methods:{
        login(){
          this.params = {
            "email": this.email,
            "password": this.password,
          }
          event.preventDefault()
          loginUser(this.params, (err, data) =>{
                if(err){
                    console.error(err)
                }
                else{
                    localStorage.setItem('access_token', JSON.stringify(data));
                }
            })
        }
    }
}
</script>
