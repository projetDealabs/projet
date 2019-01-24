<template>
    <div class="deal-page">
        <div class="deal-summary">
            <div class="deal-summary-container">
                <div class="deal-summary-image">
                    <img src="../../assets/switch.jpg">
                </div>
                <div class="deal-summary-informations">
                    <div class="deal-summary-title">
                        <span>Red Dead Redemption 2 : Bonus Précommande</span>
                    </div>
                    <div class="deal-summary-price">
                        <span class="price">65,99€</span> <span class="shipping">+5,99€ | sur micromania.fr</span> 
                    </div>
                    <div class="deal-summary-poster">
                        <img src="../../assets/julien.jpg" alt=""> <span><b>Julien</b> - Publié il y a 3 jours - Expire le 05/02/2019</span>
                    </div>
                    <div class="col-md-12">
                        <div class="deal-summary-votes col-md-6">
                            <div class="vote-button">
                                <span class="plus">+</span>
                            </div>
                            <span>183</span>
                            <div class="vote-button">
                                <span class="minus">-</span>
                            </div>
                        </div>
                        <div class="share-button-container col-md-6">
                            <img src="../../assets/images/dots.png">
                            <img src="../../assets/images/gplus.png">
                            <img src="../../assets/images/twitter.jpg">
                            <img src="../../assets/images/fb.png">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="expand-button">
                            <span>Voir l'offre sur Micromania.fr</span>
                        </div>
                    </div>
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
    .deal-page {
        width:60%;
        margin: auto
    }
    .deal-summary {
        background-color: white;
        height: 265px;
        margin-top:20px;
    }

    .deal-summary-container {
        width: 100%;
    }

    .deal-summary-container .col-md-12 {
        padding:0;
        border-bottom: 0.1px solid gainsboro;
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
        float: left;
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
        margin-top:8px;
        float: left;
        padding-bottom: 10px;
        border-bottom: 0.1px solid gainsboro;
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
        padding: 0;
        margin-top: 10px;
        float: left;
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

    .share-button-container {
        float: right;
    }

    .share-button-container > img{
        width:40px;
        margin-top:10px;
        float: right;
    }

    .expand-button {
        width:100%;
        height:35px;
        background-color: #50B9FF;
        border-radius: 10px;
        border: 2px solid black;
        display: flex;
        float: left;
        margin-right:20px;
        cursor: pointer;
        margin-top:15px;
    }
</style>
