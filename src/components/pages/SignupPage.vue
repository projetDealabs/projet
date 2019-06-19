<template>
    <div class="form-page">
        <div class="form-container">
            <div class="form-title">
                <span>S'INSCRIRE</span>
            </div>
            <div class="form-credentials">
                <label for="login" style="float: left;margin-left: 25px;">Login</label>
                <input class="form-control form-control-lg" type="text" placeholder="Votre login" id="login">
                <label for="mail" style="float: left;margin-left: 25px;">Mail</label>
                <input class="form-control form-control-lg" type="text" placeholder="Votre mail" id="mail">
                <label for="password" style="float: left;margin-left: 25px;">Mot de passe</label>
                <input class="form-control form-control-lg" type="password" placeholder="Votre mot de passe" id="password">
                
                <router-link :to="{ name: 'LoginPage', params: {} }">
                    Vous avez déjà un compte ? Cliquez ici.
                </router-link>
            </div>
            <div class="login-button" v-on:click="this.register">
                <span>SIGN UP</span>
            </div>
        </div>
    </div>
</template>

<script>
const qs = require('qs')

export default {
    methods: {
        register: function() {
            let login = document.getElementById('login').value;
            let password = document.getElementById('password').value;
            let mail = document.getElementById('mail').value;
            const requestBody = {
                username: login,
                email: mail,
                password: password
            }

            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }

            const url = "http://localhost:8282/users/register";

            let self = this;
            this.axios.post(url, qs.stringify(requestBody), config)
            .then(function(response, vueElem) {
                console.log(response);
                window.location.replace("http://localhost:8080/#/home");
            }).catch(function(error) {
            console.log(error);
            });
        },
    }
}
</script>

<style scoped>
    .form-page {
        width: 100%;
        height: calc(100vh - 60px);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .form-container {
        width:25%;
        height:600px;
        background-color: #004C7F;
        border-radius: 5%;
        color:white;
        position: relative;
    }

    .form-credentials {
        margin-top:25px;
    }

    .form-title {
        padding-top: 20px;
        font-size:25px;
    }

    .form-control {
        padding:25px;
        margin:25px;
        width: calc(100% - 50px)
    }

    .login-button {
        height:40px;
        margin:auto;
        border-radius:10px;
        background-color:#50B9FF;
        width: 100%;
        max-width: 125px;
        cursor:pointer;
        display: flex;
        padding: 10px;
        margin-top:10px;
        position: absolute;
        bottom:25px;
        right:0;
        left:0;
        margin: auto;
    }

    .login-button > span {
        margin:auto;
        text-decoration: none;
        color:white
    }

</style>
