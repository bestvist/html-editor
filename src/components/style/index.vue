<template>
    <div class="b-panel  content-style">
        <div class="b-form">
            <el-collapse v-model="activeNames">
                <el-collapse-item v-for="panel in style" :key="panel.label" :title="panel.label" :name="panel.label">
                    <div class="b-form-item" v-for="item in panel.children" :key="item.label">
                        <label>{{item.label}}:</label><input type="text" v-model="data[item.attribute]" @input="handleAttrChange">
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
    import style from './model/style';

    export default {
        name: "Style",
        props: {
            data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                activeNames:['Layout'],
                style: {}
            }
        },
        methods: {
            handleAttrChange(){
                this.$emit('change-style',this.data);
            }
        },
        mounted() {
            this.style = style;
        }
    };
</script>

<style lang="scss" scoped>
    .content-style {
        position: fixed;
        top: 60px;
        right: 10px;
        max-height: 80%;
        overflow: auto;
    }

    /deep/ .el-collapse{
        border: none;
    }

</style>

