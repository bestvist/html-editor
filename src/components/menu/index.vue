<template>
    <div class="b-panel content-menu">
        <ul>
            <li v-for="(ele,index) in elements" :key="index">
                <a @click="handleChoose(ele)">{{ele.label}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
const element = {
    deleted: false,
    style: {},
    text: ""
};

const elements = [
    Object.assign({}, element, {
        label: "Box",
        style: { height: "300px" }
    }),
    Object.assign({}, element, { label: "Button", text: "button" }),
    Object.assign({}, element, { label: "Link"}),
    Object.assign({}, element, { label: "Image" }),
    Object.assign({}, element, { label: "Text", text: "text" })
];
export default {
    name: "Menu",
    data() {
        return {
            elements: elements
        };
    },
    methods: {
        handleChoose(ele) {
            this.$emit("choose", ele.label, JSON.parse(JSON.stringify(ele)));
        }
    },
    mounted() {}
};
</script>

<style lang="scss" scoped>
.content-menu {
    position: fixed;
    top: 60px;
    left: 10px;
    width: 100px;

    ul {
        padding: 0;

        li > a {
            display: block;
            padding: 10px;
            border-radius: 5px;
            &:hover {
                background: #f5f5f5;
            }
        }
    }
}
</style>

