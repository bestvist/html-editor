<!--<template>-->
    <!--<span>-->
    <!--<span v-for="(node,index) in nodes" :key="index">-->
    <!--<div v-if="node.label==='Box'" :style="computeStyle(node.id)">-->
        <!--<Node v-if="node.children&&node.children.length"-->
              <!--v-for="child in node.children" :key="child.id" :node="child"></Node>-->
    <!--</div>-->
    <!--<button v-if="node.label==='Button'" :style="computeStyle(node.id)">-->
    <!--<Node v-if="node.children&&node.children.length" :nodes="node.children"></Node>-->
    <!--</button>-->
    <!--<img v-if="node.label==='Img'" :style="computeStyle(node.id)"/>-->
    <!--<span v-if="node.label==='Text'" :style="computeStyle(node.id)"></span>-->
    <!--</span>-->
    <!--</span>-->
<!--</template>-->

<script>
    import Node from '@/components/render/Node'

    export default {
        name: 'Node',
        components: {
            Node
        },
        render(h){
           return h(this.node.label==='Box'? 'Div':'Span')
        },
        props: {
            node: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            attrs: {
                type: Array
            }
        },
        data() {
            return {}
        },
        methods: {
            computeStyle(id) {
                let style = {};
                this.attrs.some(item => {
                    if (item.id === id) {
                        style = item.styles;
                    }
                    return item.id === id;
                });
                return style;
            }
        }
    }
</script>