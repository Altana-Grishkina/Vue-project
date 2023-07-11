<template>
    <navbar 
        :pages="pages" 
        :active-page="activePage" ></navbar>

        <router-view></router-view>
    <!-- <page-viewer 
        v-if="pages.length > 0" 
        :page="pages[activePage]"></page-viewer>

    <div v-show="false">hide this content</div>
    <create-page @page-created="pageCreated"></create-page> -->
</template>

<script>
import Navbar from './components/Navbar.vue';
import PageViewer from './components/PageViewer.vue';
import CreatePage from './components/CreatePage.vue';

export default ({
    components: {
        PageViewer,
        Navbar,
        CreatePage
    },

    created() {
        this.getPages();

        this.$bus.$on('navbarLinkActived', (index) => {
            this.activePage = index;
        });
    },
    data() {
        return {
            activePage: 0,
            pages: []
        };
    },
    methods: {
        async getPages() {
            let res = await fetch('page.json');
            let data = await res.json();

            this.pages = data;
        },
        pageCreated(pageObj) {
            this.pages.push(pageObj);
        }
    }

})

</script>