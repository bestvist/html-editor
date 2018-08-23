<template>
    <div class="container">
        <Menu @choose="handleChooseEle" />
        <Tree v-if="treeList.length" :data="treeList" :attrs="attrList"  @select-node="handleSelectNode" @delete-node="handleDeleteNode" />
        <Render :data="treeList" :attrs="attrList" />
        <Style v-if="attrObj" :data="attrObj" @change-style="handleChangeStyle" />
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
            attrList: [],
            attrObj: null
        };
    },
    methods: {
        // 选择添加元素
        handleChooseEle(label, ele) {
            const id = this.id++;
            this.treeList.push(
                Object.assign({}, { id: id, label: label, children: [] })
            );
            this.attrList.push(Object.assign({}, { id: id }, ele));
        },
        // 选择元素
        handleSelectNode(id) {
            this.findEle(this.attrList, id).then(res => {
                const { data } = res;
                this.attrObj = data.style;
            });
        },
        // 删除元素
        handleDeleteNode(id) {
            this.findEle(this.attrList, id).then(res => {
                const { data, index } = res;
                data.delete = true;
                this.$set(this.attrList, index, data);
            }); 
            event.stopPropagation();
        },
        // 更新元素样式属性
        handleChangeStyle(attr) {
            this.findEle(this.attrList, attr.id).then(res => {
                const { data, index } = res;
                this.$set(this.attrList, index, data);
            });
        },
        async findEle(list, id) {
            let data, index;
            list.some((item, i) => {
                if (item.id === id) {
                    data = item;
                    index = i;
                }
                return item.id === id;
            });
            return { data, index };
        }
    },
    mounted() {}
};
</script>

<style lang="scss" scoped>
.container {
    min-width: 1000px;
    margin-top: 50px;
    padding: 10px;
    background: #f5f5f5;
}
</style>

