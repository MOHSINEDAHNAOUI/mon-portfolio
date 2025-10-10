/**
 * Dark Mode Utility Script
 * Provides consistent dark mode functionality across all pages
 */

// Dark Mode Configuration
const DarkModeConfig = {
    // Theme storage key
    STORAGE_KEY: 'theme',
    
    // Default theme
    DEFAULT_THEME: 'light',
    
    // CSS class for dark mode
    DARK_CLASS: 'dark',
    
    // Icon classes
    ICONS: {
        moon: 'fas fa-moon text-gray-600',
        sun: 'fas fa-sun text-yellow-400',
        moonMobile: 'fas fa-moon text-gray-600 text-xl',
        sunMobile: 'fas fa-sun text-yellow-400 text-xl'
    }
};

/**
 * Dark Mode Manager Class
 */
class DarkModeManager {
    constructor() {
        this.currentTheme = this.getStoredTheme();
        this.init();
    }
    
    /**
     * Initialize dark mode functionality
     */
    init() {
        this.applyTheme(this.currentTheme);
        this.setupEventListeners();
    }
    
    /**
     * Get stored theme preference
     */
    getStoredTheme() {
        return localStorage.getItem(DarkModeConfig.STORAGE_KEY) || DarkModeConfig.DEFAULT_THEME;
    }
    
    /**
     * Store theme preference
     */
    storeTheme(theme) {
        localStorage.setItem(DarkModeConfig.STORAGE_KEY, theme);
    }
    
    /**
     * Apply theme to document
     */
    applyTheme(theme) {
        const isDark = theme === 'dark';
        const html = document.documentElement;
        
        if (isDark) {
            html.classList.add(DarkModeConfig.DARK_CLASS);
        } else {
            html.classList.remove(DarkModeConfig.DARK_CLASS);
        }
        
        this.updateIcons(isDark);
        this.currentTheme = theme;
    }
    
    /**
     * Update toggle button icons
     */
    updateIcons(isDark) {
        const icon = document.getElementById('dark-mode-icon');
        const iconMobile = document.getElementById('dark-mode-icon-mobile');
        
        if (icon) {
            icon.className = isDark ? DarkModeConfig.ICONS.sun : DarkModeConfig.ICONS.moon;
        }
        
        if (iconMobile) {
            iconMobile.className = isDark ? DarkModeConfig.ICONS.sunMobile : DarkModeConfig.ICONS.moonMobile;
        }
    }
    
    /**
     * Toggle between light and dark mode
     */
    toggle() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
        this.storeTheme(newTheme);
    }
    
    /**
     * Setup event listeners for toggle buttons
     */
    setupEventListeners() {
        const toggleBtn = document.getElementById('dark-mode-toggle');
        const toggleBtnMobile = document.getElementById('dark-mode-toggle-mobile');
        
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
        }
        
        if (toggleBtnMobile) {
            toggleBtnMobile.addEventListener('click', () => this.toggle());
        }
    }
    
    /**
     * Get current theme
     */
    getCurrentTheme() {
        return this.currentTheme;
    }
    
    /**
     * Check if dark mode is active
     */
    isDarkMode() {
        return this.currentTheme === 'dark';
    }
}

// Initialize dark mode when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.darkModeManager = new DarkModeManager();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DarkModeManager;
}
