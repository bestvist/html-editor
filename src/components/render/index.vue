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
        props: {
            data: {
                type: Array,
                default: () => {
                    return [];
                }
            },
            attrs: {
                type: Array,
                default: () => {
                    return [];
                }
            }
        },
        watch: {
            data() {
                console.log(this.data);
                console.log(this.attrs);
            }
        },
        data() {
            return {};
        },
        methods: {},
        mounted() {

        }
    };
</script>

<style lang="scss" scoped>
    .content-render {
    }
</style>

