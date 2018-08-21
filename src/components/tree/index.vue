<template>
    <div class="b-panel content-tree">
        <el-tree :data="data" node-key="id" draggable highlight-current :empty-text="''" @node-drop="handleDrop"></el-tree>
    </div>
</template>

<script>
export default {
    name: "Tree",
    props: ['data'],
    data() {
        return {};
    },
    methods: {
        handleDrop(){
            
        }
    },
    mounted() {}
};
</script>

<style lang="scss" scoped>
.content-tree {
    position: absolute;
    top: 60px;
    left: 120px;
}

/deep/ .el-tree-node__content {
    height: 38px;
    padding: 10px;
}
</style>

