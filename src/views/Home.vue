<template>
    <div class="container">
        <Menu @choose="handleChooseEle" />
        <Tree :data="treeList" v-if="treeList.length"/>
        <Render :data="treeList" :attrs="attrList" />
        <Style />
    </div>
</template>

<script>
import Menu from "@/components/menu";
import Tree from "@/components/tree";
import Render from "@/components/render";
import Style from "@/components/style";

export default {
    name: "home",
    components: {
        Menu,
        Tree,
        Render,
        Style
    },
    data() {
        return {
            id: 0,
            treeList: [],
            attrList: []
        };
    },
    methods: {
        handleChooseEle(label, ele) {
            const id = this.id++;
            this.treeList.push(Object.assign({}, { id: id, label: label,children:[] }));
            this.attrList.push(Object.assign({}, { id: id }, ele));
        }
    },
    mounted() {}
};
</script>

<style lang="scss" scoped>
.container {
    min-width: 1000px;
    min-height: 1000px;
    margin-top: 50px;
    padding: 150px;
    background: #f5f5f5;
}
</style>

