<template>
    <div class="concat">
        <div class="box_content">
            <h3 class="title">
                <span class="span_1">CONTACT</span>
                FOR
                <span class="span_2">ME</span>
            </h3>
            <p class="labels">
                <span class="label_1">灵感</span>
                <span class="label_2">代码</span>
                <span class="label_3">未来</span>
                <span class="label_4">梦想</span>
            </p>

            <ul class="list">
                <li>学习是一个充实愉悦的过程</li>
                <li>兴趣是最好的老师，兴趣即未来</li>
                <li>书山有路勤为径，学海无涯苦作舟</li>
                <li>喜欢尝试，期待新鲜事物</li>
                <li>期待有机会与您一起共事！</li>
            </ul>

            <ul class="contact_ways">
                <li>
                    <a href="https://github.com/SpiritGit/blog-vuepress/issues">
                        <img src="./images/github.png" alt="" />
                    </a>
                </li>
                <li class="email">
                    <span class="email_address">w879020706@gmail.com</span>
                    <img src="./images/email.png" alt="" />
                </li>
                <li class="qq">
                    <span class="">879020706</span>
                    <img src="./images/qq.png" alt="" />
                </li>
                <li class="wechat">
                    <span class="wechat_img"></span>
                    <img src="./images/wechat.png" alt="" />
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .concat
        width 100%
        height 100%
        position relative

    .box_content
        position absolute
        left 50%
        transform translate(-50%,10%)
        width 400px
        height 400px
        border 4px solid orange
        padding 10px
        text-align center

    .box_content .title
        font-size 24px
        text-align center
        margin 20px 40px
        border-bottom 1px solid orange
        padding 10px 0

    .title .span_1
        color orange
        margin-right 10px

    .title .span_2
        color #f97878

    .labels span
        padding 0 10px
        display inline-block
    .label_1
     color #999


    .label_2
     color #ff9520

    .label_3
        color #79ce0f
    .box_content ul
        list-style none
        text-align center

    .list li
        padding 5px 0
        color #666

.contact_ways 
    display flex
    flex-direction row
    justify-content center

.contact_ways li 
    position relative

.contact_ways li span
    display none

.contact_ways li:hover > span
    display inline-block


.contact_ways span
    position absolute
    top -10px
    left 50%
    transform translateX(-50%)
    color orange

.contact_ways img 
    width 26px
    height 26px
    padding 20px

.contact_ways li .wechat_img
    background url("./images/wechat_s.jpg") no-repeat center center
    background-size 100% 100%
    width 80px
    height 80px
    top -70px
    background-color #fff
    padding 10px
    box-sizing border-box
    box-shadow 1px 1px 5px 2px #eee
</style>
