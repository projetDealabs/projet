<template>
    <div class="deal-page">
        <div class="deal-header">
            <div class="deal-header-container">
                <div class="deal-header-image">
                    <img src="../../assets/image.png">
                </div>
                <div class="deal-header-informations">
                    <div class="deal-header-title">
                        <input id="title" type="text" placeholder="Titre de votre annonce..."/>
                    </div>
                    <div class="deal-header-price">
                        <input id="price" type="number" placeholder="Prix..."/>€<!-- <input type="text" placeholder="00,00"/>€-->
                    </div>
                    <div class="deal-header-poster">
                        <!--<img src="../../assets/julien.jpg" alt=""><span><input disabled type="text" placeholder="Utilisateur"/> ---> Expire le:  <input id="expiration" type="date" placeholder="Expire le:"/></span>
                    </div>
                    <div class="col-md-12">
                        <div class="expand-button">
                            <input id="link" type="text" placeholder="URL de l'offre"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 description-container">
                <textarea id="description" type="text" placeholder="Décrivez votre annonce..."></textarea>
            </div>
        </div>
        <input accept=".png, .jpg, .jpeg" id="image" name="file" type="file">
        <div class="round-send-button" v-on:click="this.getFormData">
            <img src="../../assets/send.png" alt="">
        </div>
    </div>
</template>

<script>
const qs = require('qs')

export default {
    methods: {
        getFormData: function() {
            let title = document.getElementById('title').value;
            let price = document.getElementById('price').value;
            let expiration = document.getElementById('expiration').value;
            let link = document.getElementById('link').value;
            let username = this.getCookieValue('username');
            let description = document.getElementById('description').value;
            let img = document.getElementById('image').value;
            
            const requestBody = {
                name: title,
                prix: price,
                description: description,
                username: username,
                dateFin: expiration,
                lien: link,
                img: img
            }

            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }

            const url = "http://localhost:8282/create";

            let self = this;
            this.axios.post(url, qs.stringify(requestBody), config)
            .then(function(response, vueElem) {
                console.log(response);
            }).catch(function(error) {
            console.log(error);
            });
        },
        getImagesFromUrl: function() {
            
        },
        getCookieValue: function(name) {
            var b = document.cookie.match('(^|[^;]+)\\s*' + name + '\\s*=\\s*([^;]+)');
            return b ? b.pop() : '';
        },
        getCookieData: function() {
            this.$data.username = this.getCookieValue("username");
            if(this.$data.username !== '') {
                this.$data.gotCookie = true;
            }
        },
        delete_cookie: function(name) {
            document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
    },
}
</script>

<style scoped>
    .round-send-button {
        width:60px;
        height: 60px;
        border-radius: 100%;
        background-color:#50B9FF;
        position: absolute;
        bottom: 25px;
        right: 25px;
        cursor: pointer;
    }

    .round-send-button img {
        width:100%;
    }
    .deal-page {
        width:60%;
        margin: auto;
        background-color: white;
        display: inline-block;
        min-height: calc(100vh - 80px);
        margin-top:20px;
        position: relative;
    }
    .deal-header {
        height: 265px;
    }

    .deal-header-container {
        width: 100%;
    }

    .deal-header-container .col-md-12 {
        padding:0;
        border-bottom: 0.1px solid gainsboro;
    }

    .deal-header-container hr {
        margin-right:20px
    }

    .deal-header-image {
        float: left;
        padding: 20px;
        
    }

    .deal-header-image > img {
        width:225px;
        height:225px;
    }

    .deal-header-informations {
        padding-top:15px;
        float: left;
        text-align: left;
        width: calc(100% - 280px);
    }

    .deal-header-price input {
        width:65px;
    }

    .deal-header-title {
        width: 100%;
        float: left;
    }

    .deal-header-title > input {
        font-size: 22px
    }

    .deal-header-price {
        width: 100%;
        float: left;
    }

    .deal-header-price > .price {
        font-size: 22px
    }

    .deal-header-price > .shipping {
        font-size: 18px;
        color:#B8B1B1;
    }

    .deal-header-description {
        width: 100%;
        overflow: hidden;
    }

    .truncate {
        position: relative;
        height: 50px; 
    }
    .truncate:after {
        content: "";
        text-align: right;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 70%;
        height: 1.2em;
        background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 100%);
    }

    .deal-header-description > span {
        font-size: 18px
    }

    .deal-header-poster {
        width:100%;
        margin-top:8px;
        float: left;
        padding-bottom: 10px;
        border-bottom: 0.1px solid gainsboro;
    }

    .deal-header-poster > img {
        width:30px;
    }

    .deal-header-poster > span {
        font-size: 15px;
        position: absolute;
        padding-left: 10px;
        padding-top: 3px;
    }

    .deal-header-votes {
        padding: 0;
        margin-top: 10px;
        float: left;
    }

    .deal-header-votes span {
        font-size: 25px;
        float: left;
        margin-top: -3px;
        padding-left:12px;
        padding-right: 12px;
    }

    .vote-button {
        width:35px;
        height:35px;
        background-color: #A9A9A9;
        border-radius: 10px;
        border: 2px solid black;
        display: flex;
        float: left;
        cursor: not-allowed;
    }

    .vote-button > span {
        margin:auto;
        color: white;
        font-size: 25px;
    }

    .vote-button > .plus {
        margin-top: -3px;
        margin-left: -4px;
    }

    .vote-button > .minus {
        margin-top: -5px;
        margin-left: 0px;
    }

    .expand-button {
        width:110px;
        height:35px;
        display: flex;
        margin-right:20px;
        cursor: pointer;
    }

    .expand-button span{
        margin:auto;
        color:white;
    }

    .expand-button > input {
        width: 100%;
        background-color: transparent;
        float: left;
    }

     .expand-button > input::placeholder {
    }

    .share-button-container {
        float: right;
    }

    .share-button-container > img{
        width:40px;
        margin-top:10px;
        float: right;
        cursor: not-allowed;
    }

    .expand-button {
        width:100%;
        height:35px;
        display: flex;
        float: left;
        margin-right:20px;
        cursor: pointer;
        margin-top:15px;
    }

    .description-container {
        text-align: left;
        float: left;
        padding-left:20px;
    }

    .description-container > textarea {
        font-size: 15px;
        width: 100%
    }

    input {
        border:none;
    }

    input:focus {
        outline:none;
    }

    textarea {
        border:none;
        height:50vh;
    }

    textarea:focus {
        outline:none;
    }
</style>
