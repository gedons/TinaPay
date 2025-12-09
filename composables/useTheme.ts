import { ref, computed, onMounted, watch } from 'vue'

export const useTheme = () => {
    const mode = ref<'light' | 'dark'>('light')
    const isDark = computed(() => mode.value === 'dark')

    const toggleTheme = () => {
        mode.value = isDark.value ? 'light' : 'dark'
        updateDOM()
        saveToStorage()
    }

    const updateDOM = () => {
        if (process.client) {
            if (isDark.value) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        }
    }

    const saveToStorage = () => {
        if (process.client) {
            localStorage.setItem('theme', mode.value)
        }
    }

    const loadFromStorage = () => {
        if (process.client) {
            const saved = localStorage.getItem('theme')
            if (saved === 'dark' || saved === 'light') {
                mode.value = saved
            } else {
                // Check system preference
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                mode.value = prefersDark ? 'dark' : 'light'
            }
            updateDOM()
        }
    }

    onMounted(() => {
        loadFromStorage()
    })

    watch(mode, () => {
        updateDOM()
        saveToStorage()
    })

    return {
        mode,
        isDark,
        toggleTheme,
    }
}
