<template>
    <div class="content-render">
        <template v-for="(ele,index) in data">
            <div :key="index" v-if="ele.label==='Box'" :style="computeStyle(ele.id)"></div>
            <button :key="index" v-if="ele.label==='Button'" :style="computeStyle(ele.id)"></button>
            <img :key="index" v-if="ele.label==='Img'" :style="computeStyle(ele.id)" />
            <span :key="index" v-if="ele.label==='Text'" :style="computeStyle(ele.id)"></span>
            <Render :key="index" v-if="ele.children.length" />
        </template>
        <Render/>
    </div>
</template>

<script>
import Render from "@/components/render";
export default {
    name: "Render",
    components: {},
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
    data() {
        return {};
    },
    watch: {
        data() {
            console.log(this.data);
        }
    },
    methods: {
        computeStyle(id) {
            let style = {};
            this.attrs.some(item => {
                if (item.id == id) {
                    style = item.styles;
                }
                return item.id == id;
            });
            return style;
        }
    },
    mounted() {}
};
</script>

<style lang="scss" scoped>
.content-render {
}
</style>

