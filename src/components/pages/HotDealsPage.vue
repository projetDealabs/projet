<template>
    <div id="HotDealsPage">
        <div class="col-md-12">
            <div class="col-md-8 hot-deals-container">
                <div v-for="deal in dealsIDs">
                    <DealSummary :idDeal="deal"/>
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
            this.axios.get("http://localhost:8282/", {
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
        }
    },
    data: function() {
        return {
            dealsIDs: []
        }
    }
}
</script>

<style>
    .hot-deals-container {
        margin: auto;
        height:auto;
        margin-top: 20px;
    }
</style>
