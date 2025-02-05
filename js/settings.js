const settings = document.getElementById('settings')
const settingswindow = document.getElementById("settings-window")

const SettingsWindow = {
    cooldown: false,
    isShowed: false,
    showSettingsWindow: function() {
        this.cooldown = true
        settingswindow.style.transform = "translateY(0)"
        this.isShowed = true
        setTimeout(() => {
            this.cooldown = false
        }, 501)
    },
    hideSettingsWindow: function() {
        this.cooldown = true
        settingswindow.style.transform = "translateY(-90vh)"
        this.isShowed = false
        setTimeout(() => {
            this.cooldown = false
        }, 501)
    }
}

settings.addEventListener("click", () => {
    if (!SettingsWindow.isShowed && !SettingsWindow.cooldown) {
        SettingsWindow.showSettingsWindow()
    }
    else if (SettingsWindow.isShowed && !SettingsWindow.cooldown) {
        SettingsWindow.hideSettingsWindow()
    }
})