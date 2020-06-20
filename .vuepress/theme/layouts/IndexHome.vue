<template>
  <div class="me_home">
    <div class="avatar">
      <img src="./images/avatar.jpg" alt="">
    </div>
    <h3>Hello, 我是王鑫之</h3>
    <ul class="my_link">
      <li>
        <a href="https://github.com/SpiritGit/blog-vuepress">
          <img src="./images/git.png" alt="">
          <span>github</span>
        </a>
      </li>
    </ul>
   
  </div>
</template>

<style lang="stylus" scoped>
.me_home
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin-top 90px

.me_home .avatar
  width 100px
  height 100px
  border-radius 50%
.avatar img 
  width 100%
  height 100%
  border-radius 50%

.my_link
  list-style none
  display flex
  flex-direction row
  margin-top 100px
.my_link li a
  display flex
  flex-direction column

.my_link li img
  width 40px
  height 4s0px
  border-radius 50%
  

</style>
