<script>
import Node from "@/components/render/Node";

export default {
    name: "Node",
    components: {
        Node
    },
    props: ["node", "attrs"],
    render(h) {
        const node = this.node;
        let ele = node.label === "Box" ? "Div" : node.label;

        return h(
            ele,
            {
                style: this.computeStyle(node.id),
                domProps: {
                    innerHTML: this.computeText(node.id)
                }
            },
            node.children.map(item => {
                return h(Node, {
                    props: {
                        node: item,
                        attrs: this.attrs
                    }
                });
            })
        );
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
        },
        computeText(id) {
            let str = "";
            this.attrs.some(item => {
                if (item.id === id) {
                    str = item.text;
                }
                return item.id === id;
            });
            return str;
        }
    },
    mounted() {}
};
</script>