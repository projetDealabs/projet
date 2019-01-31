<template>
    <div id="TopBar">
        <div class="col-md-12 topbar">
            <div class="col-md-8 topbar-container">
                <div class="col-md-2 topbar-logo">
                    <span>Projet Dealabs</span>
                </div>
                <div class="col-md-8 topbar-search">
                    <input type="text">
                </div>
                <div class="col-md-2 topbar-newdeal">
                    <router-link :to="{ name: 'NewDealPage', params: {} }">
                        <div class="newdeal-button">
                            <span>Ajouter un deal</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
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

    .topbar-container > div {
        height:100%;
        float:left;
        display: flex;
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
        max-width: 150px;
        cursor:pointer;
        display: flex;
        padding: 10px;
        margin-top:10px;
    }

    .newdeal-button > span {
        margin:auto;
        text-decoration: none;
        color:white
    }

    a:hover{
        text-decoration: none;
    }

    
</style>
