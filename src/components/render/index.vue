<template>
    <div class="content-render">
        <Node v-for="node in data" :key="node.id" :node="node" :attrs="attrs"></Node>
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
        return {
            attrs1: []
        };
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
.content-render {
}
</style>

