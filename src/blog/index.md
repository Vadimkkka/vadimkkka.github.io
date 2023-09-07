---
description: A Vadimkkka Blog
head:
  - - meta
    - name: keywords
      content: super duper SEO
---

# Заметки за🫠банного Вадима

<script setup>
import { withBase } from 'vitepress'
import { data } from '../../.vitepress/posts.data.ts'
</script>

<ul>
  <li v-for="post of data">
    <a :href="withBase(post.url)">{{ post.title }}</a>
    <span>{{ post.description }}</span>
  </li>
</ul>

<style module>
li span {
  float: right;
}
</style>
