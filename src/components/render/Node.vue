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
            const ele = this.computeEle(node.label);
            return h(
                ele,
                {
                    attrs: {'data-b-id': node.id},
                    style: this.computeStyle(node.id),
                    domProps: this.computeDom(this.node.id)
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
            computeEle(label) {
                let ele;
                switch (label) {
                    case 'Box':
                        ele = 'Div';
                        break;
                    case 'Button':
                        ele = 'Button';
                        break;
                    case 'Link':
                        ele = 'A';
                        break;
                    case 'Image':
                        ele = 'Img';
                        break;
                    case 'Text':
                        ele = 'Span';
                        break;
                    default:
                        ele = 'Div';
                        break;
                }
                return ele;
            },
            computeStyle(id) {
                let style = {};
                this.attrs.some(item => {
                    if (item.id === id) {
                        style = item.style;
                    }
                    return item.id === id;
                });
                return style;
            },
            computeDom(id) {
                let dom = {};
                this.attrs.some(item => {
                    if (item.id === id && item.text) {
                        dom.innerText = item.text;
                    }
                    return item.id === id;
                });
                return dom;
            }
        },
        mounted() {
        }
    };
</script>