$_ready(function () {
    initFun(); // 初始化事件
    function initFun() {
        window.saveScene = saveScene;
        window.ShowTip = ShowTip;
        // 登录界面切换输入框样式, 输入框focus事件
        $("[data-menu='login'] input").focus(function (e) {
            const keyName = $(this).attr("name")
            let topValue;
            if (keyName === 'account') {
                topValue = '0%'
            }else if(keyName === 'password'){
                topValue = '50%'
            }
            topValue&&$('[data-menu="login"] .login_form .form_fields i').css("top", topValue);
        });
        // 用户登录
        $("[data-menu='login'] .login_btn").click(function (e) {
            login();
        });
        // 用户退出登录
        $("[data-menu='main'] .logout").click(function (e) {
            logout();
        });
        $("[data-menu='regist'] .regist_btn").click(function (e) {
            regist();
        });
        // 跳转到注册
         $("[data-menu='login'] .account-regist").click(function (e) {
            showRegist();
        });
        // 保存数据
        $(".saveScene").click(function (e) {
            saveScene(true, false);
        });
        // 主屏start按钮特效
        $("[data-menu='main'] [data-action='start']").mouseover(function (e) {
            $(".main-menu-animate").addClass("show");
        });
        // 主屏start按钮特效
        $("[data-menu='main'] [data-action='start']").mouseout(function (e) {
            $(".main-menu-animate").removeClass("show");
        });
        // unregister(); // 卸载serviceWorker
    }
    // 卸载serviceWorker
    function unregister() {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.ready.then(registration => {
            registration.unregister();
          });
        }
    }
    // 用户登录
    async function login() {
        let data = {};
        let value = $("[data-menu='login'] form").serializeArray();
        $.each(value, function (index, item) {
            data[item.name] = item.value;
        });
        const { account, password } = data
        const userInfo = await getUserInfo(null, account, password)
        if (userInfo.id) {
            Storage.set('playerId', userInfo.id);
            Storage.set("playerName", userInfo.account);
            Storage.set("gameProcess", userInfo.step);
            showMainMenu();			
        }
    }
    // 用户注册
    async function regist() {
        let data = {};
        let value = $("[data-menu='regist'] form").serializeArray();
        $.each(value, function (index, item) {
            data[item.name] = item.value;
        });
        if(!data.account){
            ShowTip("请输入用户名!", 'info');
            return;
        }
        if(!data.phone){
            ShowTip("请输入手机号!", 'info');
            return;
        }
        if(!data.password){
            ShowTip("请输入密码!", 'info');
            return;
        }
        if(!data.repeatPassword){
            ShowTip("请重复输入密码!", 'info');
            return;
        }
        if(data.password !== data.repeatPassword){
            ShowTip("两次输入密码不一致, 请重新输入!", 'info');
            return;
        }

        delete data.repeatPassword;
        data.password = md5(data.password)
        const res = await registUser(data);
        if(res.status === 200) {
            ShowTip("注册成功", 'success');
            setTimeout(()=>{
                showLogin();
            }, 1500)
        }else {
            ShowTip(res.msg, 'warning');
        }
    }
    // 用户退出登录
    function logout(){
        Storage.remove('playerId');
        Storage.remove('playerName');
        Storage.remove('gameProcess');
        showLogin();
    }
    
    // 保存数据
    function saveScene(showTooltip, endDate) {
        const time = new Date().toLocaleString();
        let show = "";
        $_("#game img:not([data-ui='face']):not([data-visibility='invisible'])").each(function (element) {
            show += element.outerHTML.replace(/"/g, "'") + ",";
        });
        const saveData = {
            "Name": time,
            "Date": time,
            "Engine": engine,
            "Show": show,
            "Label": engine.Label,
            "Storage": storage,
            "endDateStatus": !!endDate,
            "endDate": endDate,
        };
        const playerId = Storage.get('playerId');
        updateGameProcess(playerId, JSON.stringify(saveData)).then((res) => {
            showTooltip&&ShowTip("进度保存成功", "success");
            Storage.set("gameProcess", JSON.stringify(saveData));
        })
    }
    // 公共成功提示
    function ShowTip(tip, type) {
        var $tip = $('#tip');
        if ($tip.length == 0) {
            // 设置样式，也可以定义在css文件中
            $tip = $('<span id="tip" style="position:fixed;top:50px;left: 50%;z-index:9999;height: 35px;padding: 0 20px;line-height: 35px;"></span>');
            $('body').append($tip);
        }
        $tip.stop(true).prop('class', 'alert alert-' + type).text(tip).css('margin-left', -$tip.outerWidth() / 2).fadeIn(500).delay(3000).fadeOut(500);//设置显示位置和显示时间和消失时间
    }
})