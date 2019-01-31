<template>
    <div class="deal-page">
        <div class="deal-header">
            <div class="deal-header-container">
                <div class="deal-header-image">
                    <img src="../../assets/switch.jpg">
                </div>
                <div class="deal-header-informations">
                    <div class="deal-header-title">
                        <span>Red Dead Redemption 2 : Bonus Précommande</span>
                    </div>
                    <div class="deal-header-price">
                        <span class="price">65,99€</span> <span class="shipping">+5,99€ | sur micromania.fr</span> 
                    </div>
                    <div class="deal-header-poster">
                        <img src="../../assets/julien.jpg" alt=""> <span><b>Julien</b> - Publié il y a 3 jours - Expire le 05/02/2019</span>
                    </div>
                    <div class="col-md-12">
                        <div class="deal-header-votes col-md-6">
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
            <div class="col-md-12 description-container">
                <span>Amérique, 1899. L'ère de l'Ouest sauvage touche à sa fin alors que les autorités ont décidé de traquer les dernières bandes de hors-la- loi qui sévissent encore. Ceux qui ne se rendent pas ou résistent sont tués. <br><br>

Suite à un braquage qui a mal tourné dans la ville de Blackwater, Arthur Morgan et le reste des hors-la-loi de la bande de Dutch van der Linde doivent prendre la fuite vers l'est. Les agents fédéraux et les meilleurs chasseurs de primes du pays se mettent à leurs trousses et la bande commet méfaits sur
méfaits dans les vastes terres sauvages de l'Amérique dans un seul et unique but : survivre. <br><br> Alors que des querelles internes menacent de faire voler la bande en éclats, Arthur est tiraillé entre ses propres idéaux et sa loyauté envers la bande qui l'a élevé.

Par les créateurs de Grand Theft Auto V et Red Dead Redemption, Red Dead Redemption 2 raconte une histoire épique au cœur de l'Amérique à l'aube de l'ère moderne.</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .deal-page {
        width:60%;
        margin: auto;
        background-color: white;
        display: inline-block;
        min-height: calc(100vh - 80px);
        margin-top:20px
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

    .deal-header-title {
        width: 100%;
        float: left;
    }

    .deal-header-title > span {
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

    .description-container {
        text-align: left;
        float: left;
        padding-left:20px;
    }

    .description-container > span {
        font-size: 15px;
    }
</style>
