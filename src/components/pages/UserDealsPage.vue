<template>
    <div id="HotDealsPage">
        <div class="col-md-12">
            <div class="col-md-8 user-deals-page">
                <div class="deals-title">
                    <span>Mes deals</span>
                </div>
                <div v-for="deal in dealsIDs">
                    <DealSummary :editable="true" :idDeal="deal"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DealSummary from '../DealSummary'

export default {
    components: {
        DealSummary
    },
    mounted: function() {
        this.getDealsIDs();
    },
    methods: {
        getDealsIDs: function(id) {
            let self = this;
            this.axios.get("http://localhost:8282/userdeals/"+this.getCookieValue("username"), {
                /*params: {
                    id: id
                }*/
            })
            .then(function(response, vueElem) {
                var data = response.data;
                console.log(response);
                data.deal.forEach(function(element) {
                    self.$data.dealsIDs.push(element["_id"]);
                });
                //self.$data.IDs.add()

            }).catch(function(error) {
            console.log(error);
            });
        },
        getCookieValue: function(name) {
            var b = document.cookie.match('(^|[^;]+)\\s*' + name + '\\s*=\\s*([^;]+)');
            return b ? b.pop() : '';
        },
    },
    data: function() {
        return {
            dealsIDs: []
        }
    }
}
</script>

<style>
    .user-deals-page {
        margin: auto;
        height:auto;
        margin-top: 20px;
    }
    .deals-title span{
        font-size: 25px;
    }
    .deals-title {
        width: 100%;
        text-align: left;
    }
</style>
