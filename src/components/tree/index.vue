<template>
    <div class="b-panel content-tree">
        <el-tree :data="data" node-key="id" draggable highlight-current :empty-text="''" @node-click="handleNodeClick" :allow-drop="allowDrop"></el-tree>
    </div>
</template>

<script>
const disInnerEle = ['Img','Text'];
export default {
    name: "Tree",
    props: ['data'],
    data() {
        return {};
    },
    methods: {
        handleNodeClick(data) {
            this.$emit('select-node',data.id);
        },
        allowDrop(draggingNode, dropNode, type) {
            if (disInnerEle.indexOf(dropNode.data.label) !== -1) {
                return type !== 'inner';
            } else {
                return true;
            }
        },
    },
    mounted() {}
};
</script>

<style lang="scss" scoped>
.content-tree {
    position: fixed;
    top: 60px;
    left: 120px;
}

/deep/ .el-tree-node__content {
    height: 38px;
    padding: 10px;
    &:hover{
        background: #f5f5f5;
    }
}
</style>

