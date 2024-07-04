window.onload = (event) => {
    console.log("page is fully loaded");
    const queryString = window.location.search;
    const deeplinkUrl = `com.brenin.excercise://share${queryString}`;
    console.log(deeplinkUrl);

    //variable will check app installed or not
    let change = false;
    setTimeout(() => {
        if (!change) {
            var systemPlatformName = getMobileOperatingSystem()
            if (systemPlatformName === "iOS") {
                window.location = "https://apps.apple.com/kr/app/%EB%82%B4%EA%B0%80%EB%A7%8C%EB%93%A0%ED%8A%B8%EB%A0%88%EC%9D%B4%EB%84%88/id1546110594";
            } else if (systemPlatformName === "Android") {
                window.location = "https://play.google.com/store/apps/details?id=com.brenin.excercise";
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
