<template>
    <div id="app">
        <div class="wrapper">
            <va-navibar></va-navibar>
            <va-slider :slideMenuItems="slideMenuItems"></va-slider>
            <va-content-wrap></va-content-wrap>
            <Modal></Modal>
        </div>
    </div>
</template>

<script>
    import VANaviBar from './NaviBar.vue';
    import VASlider from './Slider.vue';
    import VAContentWrap from './ContentWrap.vue';
    import slideMenuItems from 'va/lib/slideMenuItems.js';
    import store from 'va/vuex/store.js'
    import Modal from 'va/components/Modal.vue';

    export default {
        data () {
            return {
                slideMenuItems: slideMenuItems
            }
        },
        components: {
            'va-navibar': VANaviBar,
            'va-slider': VASlider,
            'va-content-wrap': VAContentWrap,
            Modal
        },
        store,
        methods: {},

    }
</script>
<style>
    #apps {
        margin-left: 1em;
    }

    .heading h1 {
        margin-bottom: 0;
    }
</style>