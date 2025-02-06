const settings = document.getElementById('settings')
const settingswindow = document.getElementById("settings-window")
const colorPannels = document.getElementsByClassName("bg-color")

const SettingsWindow = {
    cooldown: false,
    isShowed: false,
    showSettingsWindow: function() {
        this.cooldown = truedwadwadwa
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

const BackgraundColors = {
    updateBackgroundColors: function() {
        document.body.style.background = "linear-gradient(135deg, " + localStorage.getItem("BgColor1-PLAN-SZKOLNY") + ", " + localStorage.getItem("BgColor2-PLAN-SZKOLNY") + ") fixed"
    }
}

const Settings = {
    changeColorsPannels: function() {
        colorPannels[0].value = localStorage.getItem("BgColor1-PLAN-SZKOLNY")
        colorPannels[1].value = localStorage.getItem("BgColor2-PLAN-SZKOLNY")
        colorPannels[2].value = localStorage.getItem("LineBgColor-PLAN-SZKOLNY")
    },

    changeBackgraundColor1: function() {
        localStorage.setItem("BgColor1-PLAN-SZKOLNY", colorPannels[0].value)
        BackgraundColors.updateBackgroundColors()
    },

    changeBackgraundColor2: function() {
        localStorage.setItem("BgColor2-PLAN-SZKOLNY", colorPannels[1].value)
        BackgraundColors.updateBackgroundColors()
    },

    changeLineBackgraundColor: function() {
        localStorage.setItem("LineBgColor-PLAN-SZKOLNY", colorPannels[2].value)
        for (let i = 0; i < parseFloat(document.getElementsByClassName("line").length); i++) {
            document.getElementsByClassName("line")[i].style.background = localStorage.getItem("LineBgColor-PLAN-SZKOLNY")
        }
    }
}

if (!localStorage.getItem("BgColor1-PLAN-SZKOLNY")) {
    localStorage.setItem("BgColor1-PLAN-SZKOLNY", "#00ffb7")
    localStorage.setItem("BgColor2-PLAN-SZKOLNY", "#be63ff")
    localStorage.setItem("LineBgColor-PLAN-SZKOLNY", "#e600ff")
}

BackgraundColors.updateBackgroundColors()
Settings.changeColorsPannels()
for (let i = 0; i < parseFloat(document.getElementsByClassName("line").length); i++) {
    document.getElementsByClassName("line")[i].style.background = localStorage.getItem("LineBgColor-PLAN-SZKOLNY")
}

settings.addEventListener("click", () => {
    if (!SettingsWindow.isShowed && !SettingsWindow.cooldown) {
        SettingsWindow.showSettingsWindow()
    }
    else if (SettingsWindow.isShowed && !SettingsWindow.cooldown) {
        SettingsWindow.hideSettingsWindow()
    }
})

colorPannels[0].addEventListener("change", Settings.changeBackgraundColor1)
colorPannels[1].addEventListener("change", Settings.changeBackgraundColor2)
colorPannels[2].addEventListener("change", Settings.changeLineBackgraundColor)
