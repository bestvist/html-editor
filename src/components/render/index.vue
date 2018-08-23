<template>
    <div class="content-render">
        <Node v-for="node in data" :key="node.id" :node="node" :attrs="attrs" v-if="computeDelete(node.id)"></Node>
    </div>
</template>

<script>
import Node from "@/components/render/Node";

export default {
    name: "Render",
    components: {
        Node
    },
    props: ["data", "attrs"],
    data() {
        return {};
    },
    methods: {
        computeDelete(id) {
            return this.attrs.some(item => {
                return item.id === id && !item.delete;
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.content-render {
    min-height: 1000px;
    margin: 150px 260px;
    background: #ffffff;
}
</style>

