<script setup lang="ts">
import { useData, useRouter } from 'vitepress'
import { computed } from 'vue'

const { page } = useData()
const router = useRouter()

const currentLang = computed(() => {
  const path = page.value.relativePath
  // 检查是否是英文页面
  if (path.startsWith('en/')) {
    return 'en'
  }
  // 其他情况都是中文
  return 'zh'
})

const switchLanguage = (targetLang: string) => {
  const currentPath = page.value.relativePath
  let newPath = ''

  console.log('Current path:', currentPath)
  console.log('Target language:', targetLang)
  console.log('Current language:', currentLang.value)

  // 如果已经是目标语言，不做任何操作
  if (currentLang.value === targetLang) {
    console.log('Already in target language, skipping')
    return
  }

  if (targetLang === 'en') {
    // 切换到英文
    if (currentPath === 'zh/index.md') {
      newPath = '/en/'
    } else if (currentPath === 'zh/product.md') {
      newPath = '/en/product'
    } else if (currentPath.startsWith('zh/')) {
      // zh/ 开头的路径转换为 en/
      newPath = '/en/' + currentPath.substring(3).replace('.md', '')
    } else {
      // 其他情况，添加 /en/ 前缀
      newPath = '/en/' + currentPath.replace('.md', '')
    }
  } else {
    // 切换到中文
    if (currentPath === 'en/index.md') {
      newPath = '/zh/'
    } else if (currentPath === 'en/product.md') {
      newPath = '/zh/product'
    } else if (currentPath.startsWith('en/')) {
      // en/ 开头的路径转换为 zh/
      newPath = '/zh/' + currentPath.substring(3).replace('.md', '')
    } else {
      // 其他情况，添加 /zh/ 前缀
      newPath = '/zh/' + currentPath.replace('.md', '')
    }
  }

  console.log('New path:', newPath)

  // 使用 router.go() 进行导航
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