<template>
    <div class="deal-summary">
        <div class="deal-summary-container">
            <div class="deal-summary-image">
                <img src="../assets/image.png">
            </div>
            <div class="deal-summary-informations">
                <div class="deal-summary-title">
                    <span>{{ title }}</span>
                </div>
                <div class="deal-summary-price">
                    <span class="price">{{ price }}€</span> <span class="shipping"><!--+5,99€ | -->sur {{ shop }}</span> 
                </div>
                <div class="deal-summary-description truncate">
                    <span>{{ description }}</span> 
                </div>
                <div class="deal-summary-poster">
                    <img src="../assets/julien.jpg" alt=""> <span><b>{{ username }}</b><!-- - Publié il y a 3 jours--> - Expire le {{ expiration.substring(0,10) }}</span>
                </div>
                <hr>
                <div class="col-md-12">
                    <div class="deal-summary-votes col-md-6">
                        <div class="vote-button" v-on:click="this.upvote">
                            <span class="plus">+</span>
                        </div>
                        <span>{{ votes }}</span>
                        <div class="vote-button" v-on:click="this.downvote">
                            <span class="minus">-</span>
                        </div>
                    </div>
                    <router-link :to="{ name: 'DealPage', params: {idDeal: this.idDeal} }">
                        <div class="expand-button">
                            <span>Voir plus...</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div v-if="this.editable === true">
            <div class="delete-button" v-on:click="this.delete">
                <span>X</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['idDeal','editable'],
    mounted: function() {
        this.getDealData();
    },
    methods: {
        getDealData: function(id) {
            let self = this;
            let route = "http://localhost:8282/";
            this.axios.get("http://localhost:8282/"+this.idDeal, {

            })
            .then(function(response, vueElem) {
                let data = response.data;
                self.$data.title = data.name;
                self.$data.price = data.prix;
                self.$data.description = data.description;
                self.$data.username = data.username;
                self.$data.expiration = data.dateFin;
                self.$data.link = data.lien;
                self.$data.votes = data.compteur;

                let matches = data.lien.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
                let shop = matches && matches[1];  // domain will be null if no match is found
                self.$data.shop = shop;
            }).catch(function(error) {
            console.log(error);
            });
        },
        upvote: function() {
            let self = this;
            let id = this.idDeal;
            this.axios.get("http://localhost:8282/up/"+id, {

            })
            .then(function(response, vueElem) {
                console.log(response);
                self.$data.votes = response.data.compteur; 
            }).catch(function(error) {
            console.log(error);
            });
        },
        downvote: function() {
            let self = this;
            let id = this.idDeal;
            this.axios.get("http://localhost:8282/down/"+id, {

            })
            .then(function(response, vueElem) {
                console.log(response);
                self.$data.votes = response.data.compteur; 
            }).catch(function(error) {
            console.log(error);
            });
        },
        delete: function() {
            let self = this;
            let id = this.idDeal;
            this.axios.get("http://localhost:8282/supp/"+id, {

            })
            .then(function(response, vueElem) {
                console.log(response);
            }).catch(function(error) {
            console.log(error);
            });
        }
    },
    data: function() {
        return {
            title: "",
            price: "€",
            shop: "micromania.fr",
            link: "",
            username: "Utilisateur",
            expiration: "",
            votes: "",
            description: ""
        }
    }
}
</script>

<style scoped>
    .deal-summary {
        background-color: white;
        height: 265px;
        margin-top:20px;
        position: relative;
    }

    .deal-summary-container {
        width: 100%;
    }

    .deal-summary-container .col-md-12 {
        padding:0;
    }

    .deal-summary-container hr {
        margin-right:20px
    }

    .deal-summary-image {
        float: left;
        padding: 20px;
        
    }

    .deal-summary-image > img {
        width:225px;
        height:225px;
    }

    .deal-summary-informations {
        padding-top:15px;
        float: left;
        text-align: left;
        width: calc(100% - 280px);
    }

    .deal-summary-title {
        width: 100%;
    }

    .deal-summary-title > span {
        font-size: 22px
    }

    .deal-summary-price {
        width: 100%;
        float: left;
    }

    .deal-summary-price > .price {
        font-size: 22px
    }

    .deal-summary-price > .shipping {
        font-size: 18px;
        color:#B8B1B1;
    }

    .deal-summary-description {
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

    .deal-summary-description > span {
        font-size: 18px
    }

    .deal-summary-poster {
        width:100%;
        margin-top:15px;
    }

    .deal-summary-poster > img {
        width:30px;
    }

    .deal-summary-poster > span {
        font-size: 15px;
        position: absolute;
        padding-left: 10px;
        padding-top: 3px;
    }

    .deal-summary-votes {
        padding: 0
    }

    .deal-summary-votes span {
        font-size: 25px;
        float: left;
        margin-top: -3px;
        padding-left:12px;
        padding-right: 12px;
    }

    .vote-button {
        width:35px;
        height:35px;
        background-color: #007ACC;
        border-radius: 10px;
        border: 2px solid black;
        display: flex;
        float: left;
        cursor: pointer;
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
        background-color: #50B9FF;
        border-radius: 10px;
        border: 2px solid black;
        display: flex;
        float: right;
        margin-right:20px;
        cursor: pointer;
    }

    .expand-button span{
        margin:auto;
        color:white;
    }

    .delete-button {
        cursor: pointer;
        position: absolute;
        top:20px;
        right:30px;
    }
</style>
