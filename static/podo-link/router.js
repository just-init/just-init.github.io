window.onload = (event) => {
    console.log("page is fully loaded");
    const queryString = window.location.search;
    const systemPlatformName = getMobileOperatingSystem()
    var deeplinkUrl = `com.dsdc.podo://just-init.github.io/friend/invite/confirm${queryString}`;
    // if (systemPlatformName === "Android") {
    // if (systemPlatformName === "Android" && queryString.includes("version=2")) {
    //     deeplinkUrl = `https://just-init.github.io/smart-workout-counter-link/share${queryString}`;
    // }
    console.log(deeplinkUrl);

    //variable will check app installed or not
    let change = false;
    setTimeout(() => {
        if (!change) {
            if (systemPlatformName === "iOS") {
                window.location = "https://apps.apple.com/kr/app/%EC%A7%84%EC%A7%80%ED%95%9C%ED%8F%AC%EB%8F%84/id1642885949";
            } else if (systemPlatformName === "Android") {
                window.location = "https://play.google.com/store/apps/details?id=com.dsdc.podo";
            } else {
                alert("서비스가 원활하지 않습니다. 잠시후 다시 시도해주시기 바랍니다.")
            }
        }
    }, 2000);
    window.location = deeplinkUrl;

    //handle event to check app installed or not
    window.onblur = function () {
        change = true;
    };
    window.onfocus = function () {
        change = false;
    }
};

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}
