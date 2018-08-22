<template>
    <div class="container">
        <Menu @choose="handleChooseEle" />
        <Tree :data="treeList" v-if="treeList.length" @select-node="handleSelectNode" />
        <Render :data="treeList" :attrs="attrList" />
        <Style :data="attrObj" @change-style="handleChangeStyle" />
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
            attrObj: {}
        };
    },
    methods: {
        handleChooseEle(label, ele) {
            const id = this.id++;
            this.treeList.push(Object.assign({}, { id: id, label: label,children:[] }));
            this.attrList.push(Object.assign({}, { id: id }, ele));
        },
        handleSelectNode(id) {
            this.attrList.some((item) => {
               if(item.id === id){
                   this.attrObj = item.style;
               }
               return item.id === id;
            });
        },
        handleChangeStyle(attr) {
            let attrIndex;
            this.attrList.some((item, index) => {
                if(item.id === attr.id) {
                    attrIndex = index;
                }
                return item.id === attr.id;
            });
            this.$set(this.attrList, attrIndex, attr);
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

