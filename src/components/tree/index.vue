<template>
    <div class="b-panel content-tree">
        <el-tree ref="tree" :data="data" node-key="id" draggable highlight-current :empty-text="''" @node-click="handleNodeClick" :allow-drop="handleAllowDrop" :filter-node-method="handleFilterNode">
            <span class="tree-node" slot-scope="{ node, data }">
                <span>{{ node.label }}</span>
                <span class="tree-node-action">
                    <el-button type="text" size="mini" @click="handleRemoveNode(node, data)">
                        Del
                    </el-button>
                </span>
            </span>
        </el-tree>
    </div>

</template>

<script>
const disInnerEle = ["Img", "Text"];
export default {
    name: "Tree",
    props: ["data", "attrs"],
    data() {
        return {};
    },
    watch: {
        attrs: {
            deep: true,
            handler() {
                this.$refs.tree.filter();
            }
        }
    },
    methods: {
        handleNodeClick(data) {
            this.$emit("select-node", data.id);
        },
        handleAllowDrop(draggingNode, dropNode, type) {
            if (disInnerEle.indexOf(dropNode.data.label) !== -1) {
                return type !== "inner";
            } else {
                return true;
            }
        },
        handleFilterNode(val, data) {
            return (
                this.attrs &&
                this.attrs.some(item => {
                    return item.id === data.id && !item.delete;
                })
            );
        },
        handleRemoveNode(node, data) {
            this.$emit("delete-node", data.id);
        }
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
    &:hover {
        background: #f5f5f5;
    }
}

.tree-node {
    width: 100%;
    line-height: 30px;
}

.tree-node-action {
    margin-left: 20px;
    float: right;
}
</style>

