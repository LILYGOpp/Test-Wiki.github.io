<script setup lang="ts">
import { useData, useRouter } from 'vitepress'
import { computed } from 'vue'

const { page } = useData()
const router = useRouter()

const currentLang = computed(() => {
  const path = page.value.relativePath
  if (path.includes('get_started/zh/') || path.includes('develop/zh/')) {
    return 'zh'
  } else if (path.includes('get_started/en/') || path.includes('develop/en/')) {
    return 'en'
  }
  // 根据路径判断，如果是根目录或没有语言标识，默认为中文
  return 'zh'
})

const switchLanguage = (targetLang: string) => {
  const currentPath = page.value.relativePath
  let newPath = ''

  if (targetLang === 'en') {
    // 切换到英文
    if (currentPath === 'index.md') {
      newPath = '/en'
    } else {
      newPath = '/' + currentPath
        .replace('get_started/zh/', 'get_started/en/')
        .replace('develop/zh/', 'develop/en/')
        .replace('.md', '')
    }
  } else {
    // 切换到中文
    if (currentPath === 'en.md') {
      newPath = '/'
    } else {
      newPath = '/' + currentPath
        .replace('get_started/en/', 'get_started/zh/')
        .replace('develop/en/', 'develop/zh/')
        .replace('.md', '')
    }
  }

  router.go(newPath)
}
</script>

<template>
  <div class="VPNavBarMenuGroup VPNavBarMenuGroup-lang">
    <button class="VPButton VPNavBarMenuGroup-button" @click.prevent>
      <span class="VPNavBarMenuGroup-title">语言 / Language</span>
      <svg class="VPNavBarMenuGroup-icon" width="14" height="14" viewBox="0 0 24 24">
        <path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"/>
      </svg>
    </button>
    <div class="VPNavBarMenuGroup-items">
      <a
        class="VPNavBarMenuGroup-item"
        :class="{ active: currentLang === 'zh' }"
        @click.prevent="switchLanguage('zh')"
        href="#"
      >
        简体中文
      </a>
      <a
        class="VPNavBarMenuGroup-item"
        :class="{ active: currentLang === 'en' }"
        @click.prevent="switchLanguage('en')"
        href="#"
      >
        English
      </a>
    </div>
  </div>
</template>

<style scoped>
.VPNavBarMenuGroup-lang {
  position: relative;
  display: inline-block;
}

.VPNavBarMenuGroup-button {
  display: flex;
  align-items: center;
  padding: 0 12px;
  line-height: 48px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
  cursor: pointer;
  background: transparent;
  border: none;
}

.VPNavBarMenuGroup-button:hover {
  color: var(--vp-c-brand-1);
}

.VPNavBarMenuGroup-title {
  margin-right: 4px;
}

.VPNavBarMenuGroup-icon {
  fill: currentColor;
  transition: transform 0.25s;
}

.VPNavBarMenuGroup-lang:hover .VPNavBarMenuGroup-icon {
  transform: rotate(180deg);
}

.VPNavBarMenuGroup-items {
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 160px;
  padding: 8px 0;
  background-color: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: var(--vp-shadow-3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4px);
  transition: opacity 0.25s, visibility 0.25s, transform 0.25s;
}

.VPNavBarMenuGroup-lang:hover .VPNavBarMenuGroup-items {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.VPNavBarMenuGroup-item {
  display: block;
  padding: 8px 16px;
  font-size: 14px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: background-color 0.25s, color 0.25s;
  cursor: pointer;
}

.VPNavBarMenuGroup-item:hover {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-brand-1);
}

.VPNavBarMenuGroup-item.active {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}
</style>
