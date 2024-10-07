window.oncontextmenu = () => {
  return false;
};

window.onload = () => {
  const _path = "image/首页图片/";
  const _path2 = "image/导航栏图片/";
  const _path3 = "image/角色情报/";
  const _path4 = "image/全新怪物/";
  const _path5 = "image/更多活动/";
  const _path6 = "image/游戏特色/";
  const index_vedio_src =
    "https://webstatic.mihoyo.com/upload/static-resource/2022/02/04/332e64808dad91fb73a35adfa07cbf44_4349619459033207841.mp4";
  const character_vidoe_URL = [
    "https://webstatic.mihoyo.com/upload/static-resource/2022/02/15/36c3eda9e32a39a56c75bf9b51284c04_7759740696565879212.mp4",
    "https://webstatic.mihoyo.com/upload/static-resource/2021/09/19/6ad98a93af5a4caf2c8eddfd8bda51d7_3890877391063843086.mp4",
    "https://webstatic.mihoyo.com/upload/static-resource/2021/08/31/b124feae6bab5a3694d59e7c7315af84_1762984313232940807.mp4",
  ];
  const monsters_video_URL = [
    "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/02/11/83b5811c39608a45ed49007502ede2c4_9097447521502060864.mp4",
    "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/02/11/e58ed0008e777b87e45bc75235790c58_6706036807749258212.mp4",
  ];

  const content_index_1 = document.querySelector(".content-box-1");
  const download_btn_img = document.querySelectorAll(".download-btn-box img");
  const enter_official_btn = document.querySelector(".official");
  const hidder = document.querySelector("#hidder");
  const index_player = document.querySelector(".index .player");
  const contents = document.querySelectorAll(".content-box");
  const contents_num = contents.length;
  const nav_items = document.querySelectorAll(".nav-bar li a img");
  const nav_list = document.querySelector(".nav-bar");
  const cv_btns = document.querySelectorAll(".cv-btn-box img");
  const character_banner = document.querySelectorAll(
    ".content-box-3 .character-content"
  );
  const character_info_vedio_box_player = document.querySelector(
    ".content-box-3 .character-vedio .player-icon"
  );
  const character_list_items = document.querySelectorAll(
    ".content-box-3 .character-list img"
  );
  const character_list_covers = document.querySelectorAll(
    ".content-box-3 .covers"
  );
  let character_current_index = 0;
  const monsters_video_player = document.querySelector(
    ".content-box-4 .video-box video"
  );
  const monsters_list_items = document.querySelectorAll(
    ".content-box-4 .monsters-list img"
  );
  const monsters_info = document.querySelector(
    ".content-box-4 .monsers-info-box img"
  );
  const more_activity_btns = document.querySelectorAll(
    ".content-box-5 .activity-box .activity"
  );
  const more_activity_content = document.querySelectorAll(
    ".content-box-5 .activity-box"
  );
  let current_activity_index = 0;
  const attentionUs_items = document.querySelectorAll(
    ".content-box-6 .attention-us img"
  );
  const marquee_imgs = document.querySelectorAll(
    ".content-box-6 ul li.marquee-img"
  );
  const marquee_imgs_num = marquee_imgs.length;
  let cur_marqueeImg_index = 0;
  const footer = document.querySelector(".footer .wrapper");

  console.info("contents length: ", contents_num);

  let current_index = 0;
  hanlePageLocation(contents);

  const imgList = Array.from(download_btn_img);
  imgList.push(enter_official_btn);

  handleImages(imgList, _path);
  handleImages(nav_items, _path2);
  handleImages(cv_btns, _path3);

  nav_items.forEach((node) => {
    const index = parseInt(node.getAttribute("data-index"));
    node.addEventListener("mouseenter", () => {
      node.addEventListener("mouseout", () => {
        imageActive(nav_items[current_index - 1], _path2);
      });
    });

    node.addEventListener("click", () => {
      if (index > contents_num - 1) return;
      nav_items.forEach((node) => {
        imageRestore(node, _path2);
      });
      windowScroll(index);
      imageActive(nav_items[index - 1], _path2);
    });
  });

  imageActive(character_list_items[0], _path3);
  character_list_items.forEach((node, i) => {
    node.addEventListener("click", () => {
      character_list_items.forEach((node) => {
        imageRestore(node, _path3);
      });
      imageActive(character_list_items[i], _path3);
      characterBannerChange(
        character_banner,
        character_list_covers,
        character_current_index,
        i
      );
      character_current_index = i;
    });
  });

  character_info_vedio_box_player.addEventListener("click", () => {
    playVideo(character_vidoe_URL[character_current_index]);
  });
  imageActive(monsters_list_items[0], _path4);

  monsters_video_player.setAttribute("src", monsters_video_URL[0]);
  monsters_video_player.play();
  monsters_list_items.forEach((node, i) => {
    node.addEventListener("click", () => {
      monsters_list_items.forEach((node) => {
        imageRestore(node, _path4);
      });
      imageActive(monsters_list_items[i], _path4);
      monsters_video_player.setAttribute("src", monsters_video_URL[i]);
      monsters_info.setAttribute("src", `${_path4}m${i + 1}.png`);
    });
  });

  imageActive(more_activity_btns[current_activity_index], _path5);
  more_activity_btns.forEach((node, i) => {
    node.addEventListener("mouseenter", () => {
      imageActive(more_activity_btns[i], _path5);
      node.addEventListener("mouseout", () => {
        imageRestore(more_activity_btns[i], _path5);
        imageActive(more_activity_btns[current_activity_index], _path5);
      });
    });

    node.addEventListener("click", () => {
      more_activity_btns.forEach((node) => {
        imageRestore(node, _path5);
      });
      imageActive(more_activity_btns[i], _path5);
      more_activity_content.forEach((node) => {
        node.style.width = `var(--item-width)`;
      });
      more_activity_content[
        i
      ].style.width = `calc(var(--item-content-width) + var(--item-width))`;
      current_activity_index = i;
    });
  });

  handleImages(attentionUs_items, _path6);

  // 暴力解决轮播图
  marqueeImages(marquee_imgs, cur_marqueeImg_index);

  index_player.addEventListener("click", () => {
    playVideo(index_vedio_src);
  });

  hidder.addEventListener("click", () => {
    videoStop();
  });

  window.addEventListener("wheel", throttle(hanleMouseWheel, 800));

  /**********************函数定义***************************/
  /**
   * 处理图片更改的效果
   * @param {NodeList} nodeList
   * @param {String} path
   */
  function handleImages(nodeList, path) {
    nodeList.forEach((node) => {
      node.addEventListener("mouseenter", () => {
        imageActive(node, path);
        node.addEventListener("mouseout", () => {
          imageRestore(node, path);
        });
      });
    });
  }

  /**
   * 处理几个页面的位置
   * @param {NodeList} node
   */
  function hanlePageLocation(node) {
    const h = content_index_1.clientHeight;
    let index = current_index;
    node.forEach((n) => {
      n.style.top = h * index++ + "px";
    });
  }
  /**
   * 节流函数
   * @param {Function} fn 回调函数
   * @param {Number} delay 函数调用间隔，默认500ms
   */
  function throttle(fn, delay = 500) {
    let preDate = new Date().getTime();
    return function (args) {
      const context = this;
      let nowDate = new Date().getTime();
      if (nowDate - preDate >= delay) {
        fn.call(context, args);
        preDate = nowDate;
      }
    };
  }

  /**
   * 处理鼠标滚动事件
   * @param {WheelEvent} event
   */
  function hanleMouseWheel(event) {
    let d = event.deltaY;
    if (d < 0) {
      // 往上滚动
      if (current_index === 0) return;
      windowScroll(--current_index);
    } else if (d > 0) {
      // 往下滚动
      if (current_index === contents_num - 1) return;
      windowScroll(++current_index);
    }
  }

  /**
   * 更改img为活动状态
   * @param {HTMLElement} node 图片节点元素
   * @param {String} path 路径
   */
  function imageActive(node, path) {
    if (!node.classList.contains("active")) {
      const baseUrl = node.getAttribute("src").split("/");
      node.src = path + "h".concat(baseUrl[2]);
      node.classList.add("active");
    }
  }
  /**
   * 恢复图片样式
   * @param {HTMLElement} node 图片节点元素
   * @param {String} path 路径
   */
  function imageRestore(node, path) {
    if (node.classList.contains("active")) {
      const baseUrl = node.getAttribute("src").split("/");
      node.src = path + baseUrl[2].replace("h", "");
      node.classList.remove("active");
    }
  }

  /**
   * 页面滚动
   * @param {Number} index 目标页面索引
   */
  function windowScroll(index) {
    const h = content_index_1.clientHeight;
    if (index === contents_num - 1) {
      window.scroll({
        behavior: "smooth",
        top: h * (index - 1) + footer.clientHeight,
      });
    } else {
      window.scrollTo({
        behavior: "smooth",
        top: h * index,
      });
    }

    current_index = index;
    if (current_index === contents_num - 1) {
      const windowHiehgt = window.document.body.clientHeight;
      nav_list.style.position = "absolute";
      nav_list.style.top = h * (current_index - 1) + windowHiehgt * 0.12 + "px";
    } else if (current_index >= 1 && current_index < contents_num - 1) {
      nav_items.forEach((node) => {
        imageRestore(node, _path2);
      });
      imageActive(nav_items[current_index - 1], _path2);
      setTimeout(() => {
        nav_list.style.position = "fixed";
        nav_list.style.top = "12vh";
      }, 800);
    } else if (current_index === 0) {
      nav_list.style.position = "absolute";
      nav_list.style.top = "112vh";
    }
  }

  /**
   * 全局播放视频
   * @param {String} path 视频路径
   */
  function playVideo(path) {
    if (!hidder.classList.contains("active")) {
      hidder.classList.add("active");
      let player = document.createElement("video");
      player.className = "player-frame";
      player.src = path;
      player.autoplay = "true";
      player.controls = "true";
      document.body.appendChild(player);
    }
  }

  /**
   * 全局关闭视频
   */
  function videoStop() {
    const player = document.querySelector(".player-frame");
    if (player) {
      document.body.removeChild(player);
    }
    hidder.classList.remove("active");
  }

  /**
   * 更改角色介绍页面的图片
   * @param {NodeList} nodeList 角色介绍页三张图片的节点集合
   * @param {NodeList} nodeList2 视频封面节点集合
   * @param {Number} index 当前图片索引
   * @param {Number} distIndex 目标图片索引
   */
  function characterBannerChange(nodeList, nodeList2, index, distIndex) {
    nodeList[index].style.opacity = "0";
    nodeList[distIndex].style.opacity = "1";
    nodeList2[index].style.opacity = "0";
    nodeList2[distIndex].style.opacity = "1";
  }

  /**
   * 处理游戏特色页面的轮播图
   * 直接暴力暴力处理
   * @param {NodeList} nodeList 轮播图节点集合
   * @param {Number} index 第一张要展示的图片的索引
   */
  function marqueeImages(nodeList, index = 0) {
    // 生成nav tag
    let domFrgm = document.createDocumentFragment();
    for (let i = 0; i < marquee_imgs_num; i++) {
      let li = document.createElement("li");
      let img = document.createElement("img");
      img.src = `${_path6}index.png`;
      img.alt = "标签";
      img.className = "nav-tag-items";
      li.append(img);
      domFrgm.append(li);
    }
    const mrq_navtag_box = document.querySelector(
      ".content-box-6 .nav-tag-box"
    );
    mrq_navtag_box.appendChild(domFrgm);

    // 轮播图初始状态
    nodeList[index].childNodes[0].style.transform = "scale(1.1)";
    nodeList[index].style.zIndex = "10";
    nodeList[index + 1].style.marginLeft = "45%";
    nodeList[index + 1].style.zIndex = "2";
    nodeList[marquee_imgs_num - 1].style.marginLeft = "-45%";
    nodeList[marquee_imgs_num - 1].style.zIndex = "2";

    // 每隔三秒切换一次图片
    let timer = setInterval(() => {
      marqueeImagesChange(
        nodeList,
        mrq_img_navtag,
        ++cur_marqueeImg_index % marquee_imgs_num,
        marquee_imgs_num
      );
    }, 3000);

    const img_scroller = document.querySelectorAll(
      ".content-box-6 .marquee-img-wrapper .scroll"
    );
    handleImages(img_scroller, _path6);
    img_scroller.forEach((node) => {
      node.addEventListener("click", () => {
        if (node.classList.contains("turn-left")) {
          marqueeImagesChange(
            nodeList,
            mrq_img_navtag,
            --cur_marqueeImg_index % marquee_imgs_num,
            marquee_imgs_num
          );
        } else if (node.classList.contains("turn-right")) {
          marqueeImagesChange(
            nodeList,
            mrq_img_navtag,
            ++cur_marqueeImg_index % marquee_imgs_num,
            marquee_imgs_num
          );
        }
        clearInterval(timer);
        timer = setInterval(() => {
          marqueeImagesChange(
            nodeList,
            mrq_img_navtag,
            ++cur_marqueeImg_index % marquee_imgs_num,
            marquee_imgs_num
          );
        }, 3000);
      });
    });

    // 控制导航标签的效果
    const mrq_img_navtag = document.querySelectorAll(
      ".content-box-6 .nav-tag-box .nav-tag-items"
    );
    imageActive(mrq_img_navtag[0], _path6);
    mrq_img_navtag.forEach((node, i) => {
      node.addEventListener("click", () => {
        mrq_img_navtag.forEach((node) => {
          imageRestore(node, _path6);
        });
        imageActive(node, _path6);
        cur_marqueeImg_index = i;
        marqueeImagesChange(nodeList, mrq_img_navtag, i, marquee_imgs_num);
        clearInterval(timer);
        timer = setInterval(() => {
          marqueeImagesChange(
            nodeList,
            mrq_img_navtag,
            ++cur_marqueeImg_index % marquee_imgs_num,
            marquee_imgs_num
          );
        }, 3000);
      });
    });
  }

  /**
   * 轮播图切换效果
   * @param {NodeList} nodeList 要轮播的图片
   * @param {NodeList} navList 导航标签集合
   * @param {Number} index 要展示的图片的索引
   * @param {Number} length 轮播图数量
   */
  function marqueeImagesChange(nodeList, navList, index, length) {
    nodeList.forEach((node) => {
      node.childNodes[0].style.transform = "scale(0.8)";
      node.style.zIndex = "1";
      node.style.marginLeft = "0";
    });
    navList.forEach((node) => {
      imageRestore(node, _path6);
    });
    imageActive(navList[index], _path6);
    nodeList[index].childNodes[0].style.transform = "scale(1.1)";
    nodeList[index].style.zIndex = "10";
    if (index === 0) {
      nodeList[marquee_imgs_num - 1].style.marginLeft = "-45%";
      nodeList[marquee_imgs_num - 1].style.zIndex = "2";
      nodeList[index + 1].style.marginLeft = "45%";
      nodeList[index + 1].style.zIndex = "2";
    } else if (index === length - 1) {
      nodeList[index - 1].style.marginLeft = "-45%";
      nodeList[index - 1].style.zIndex = "2";
      nodeList[0].style.marginLeft = "45%";
      nodeList[0].style.zIndex = "2";
    } else {
      nodeList[index + 1].style.marginLeft = "45%";
      nodeList[index + 1].style.zIndex = "2";
      nodeList[index - 1].style.marginLeft = "-45%";
      nodeList[index - 1].style.zIndex = "2";
    }
  }
};
