<template>
    <div id="HotDealsPage">
        <div class="col-md-12">
            <div class="col-md-8 hot-deals-container">
                <DealSummary/>
                <DealSummary/>
                <DealSummary/>
                <DealSummary/>
            </div>
        </div>
    </div>
</template>

<script>
import DealSummary from '../DealSummary'

export default {
    components: {
        DealSummary
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
