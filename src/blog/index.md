---
description: A Vadimkkka Blog
lastUpdated: false
head:
  - - meta
    - name: keywords
      content: super duper SEO
---

# Заметки за🫠банного Вадима

<script setup>
import { ref, computed } from 'vue'
import { withBase } from 'vitepress'
import { data } from '../../.vitepress/posts.data.ts'

const tags = new Set(data.flatMap(post => post.tags))
const selected = ref(new Set())

function onClick(tag) {
  if (selected.value.has(tag)) selected.value.delete(tag)
  else selected.value.add(tag)
}

const filteredPosts = computed(() => {
  if (selected.value.size === 0) return data
  return data.filter(post => post.tags.some(x => selected.value.has(x)))
})
</script>

<p>
  <code
    v-for="tag in tags"
    :key="tag"
    :class="{ selected: selected.has(tag) }"
    @click="onClick(tag)"
  >#{{ tag }}</code>
</p>

<ul>
  <li v-for="(post, i) in filteredPosts" :key="i">
    <img v-if="post.preview" :src="post.preview" />
    <div>
      <h3><a :href="withBase(post.url)">{{ post.title }}</a></h3>
      <p>{{ post.description }}</p>
      <code v-for="tag in post.tags">#{{ tag }}</code>
    </div>
  </li>
</ul>

<style scoped>
li {
  list-style: decimal;
}
li h3 {
  margin: unset;
}
code {
  cursor: pointer;
  user-select: none;
  margin-right: 16px;
}
.selected {
  border: 1px solid var(--vp-code-color);
}

@media (min-width: 600px)  {
  li {
    display: grid;
    grid-template-columns: 30% 1fr;
    gap: 24px;
  }
}

@media (max-width: 600px) {
  li img {
    display: none;
  }
}
</style>
