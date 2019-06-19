<template>
    <div id="TopBar">
        <div class="col-md-12 topbar">
            <div class="col-md-8 topbar-container">
                <router-link :to="{ name: 'HotDealsPage', params: {} }">
                    <div class="col-md-2 topbar-logo">
                        <span>EVeRYDeal</span>
                    </div>
                </router-link>
                
                <div class="col-md-7 topbar-search">
                    <input type="text">
                </div>
                <div class="col-md-3 topbar-newdeal">
                    <div v-if="gotCookie">
                        <router-link :to="{ name: 'NewDealPage', params: {} }">
                            <div class="newdeal-button">
                                <span>Nouveau deal</span>
                            </div>
                        </router-link>
                    </div>
                    <div v-else>
                        <router-link :to="{ name: 'LoginPage', params: {} }">
                            <div class="newdeal-button">
                                <span>Nouveau deal</span>
                            </div>
                        </router-link>
                    </div>

                    <div v-if="gotCookie">
                        <router-link :to="{ name: 'UserDealsPage', params: {} }">
                            <div class="newdeal-button">
                                <span>{{ username }}</span>
                            </div>
                        </router-link>
                        <div class="close-button">
                            <span v-on:click="delete_cookie('username')">&times;</span>
                        </div>
                        
                    </div>
                    <div v-else>
                        <router-link :to="{ name: 'LoginPage', params: {} }">
                            <div class="newdeal-button">
                                <span>Mon compte</span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted: function() {
        this.getCookieData();
    },
    methods: {
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
            if(window.location.href === "http://localhost:8080/#/home") {
                location.reload();
            }
            else {
                window.location.replace("http://localhost:8080/#/home");
            }
        }
    },
    data: function() {
        return {
            gotCookie: false,
            username: ""
        }
    }
}
</script>

<style>
    .topbar {
        height:60px;
        border-bottom: .5px solid grey;
        background-color: #004C7F;
        text-align:center;
        color:white;
    }

    .topbar-container {
        margin:auto;
        height:100%;
    }

    .topbar-container div {
        height:100%;
        float:left;
        display: flex;
    }

    .topbar-container a {
        color:white;
    }

    .topbar-logo {

    }

    .topbar-logo > span {
        margin: auto;
    }

    .topbar-search {
        
    }

    .topbar-search > input {
        margin: auto;
        width:100%;
        height:40px;
        border-radius: 10px;
        border:none;
        background-image: url('../assets/search.png');
        background-size: 35px;
        background-position: 3px 3px;
        background-repeat: no-repeat;
        padding-left: 45px;
    }

    .topbar-newdeal {

    }

    .topbar-newdeal .newdeal-button {
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
        margin-left:10px;
    }

    .newdeal-button > span {
        margin:auto;
        text-decoration: none;
        color:white
    }

    a:hover{
        text-decoration: none;
    }

    .topbar-newdeal .close-button {
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
        margin-left:18px;
    }
    
</style>
