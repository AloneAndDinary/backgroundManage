<template>
    <div id="container">
        <el-container>
<!--          头部-->
            <el-header>
                <HeaderPage :setting="setting"></HeaderPage>
            </el-header>
<!--          主体内容-->
            <el-container>
<!--                侧边栏-->
                <el-aside>
                    <SliderBar></SliderBar>
                </el-aside>
<!--                主要内容-->
                <el-container>
                    <el-main>
                        <MainContent :setting="setting"></MainContent>
                    </el-main>
<!--                底部链接-->
                    <el-footer v-if="setting.showFooter">
                        <footerPage></footerPage>
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import SliderBar from './sliderBar';
import HeaderPage from './header';
import MainContent from './mainContent';
import footerPage from './footer';
import { defaultSetting } from '@/config/config';
export default {
  name: "index",
  components: {
    SliderBar,
    HeaderPage,
    MainContent,
    footerPage
  },
  mounted() {
    console.log(defaultSetting);
    this.setting = defaultSetting;
  },
  data() {
    return {
      setting: {}
    };
  }
};
</script>

<style scoped lang="less">
    @import '../../css/framework.less';
</style>
