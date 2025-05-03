function hideViews() {
  const selectors = [
    // view count
    "#info span:nth-of-type(1)",
    "#metadata-line span:nth-of-type(1)",

    // subscriber count
    // <div class="yt-content-metadata-view-model-wiz__metadata-row yt-content-metadata-view-model-wiz__metadata-row--metadata-row-inline"><span class="yt-core-attributed-string yt-content-metadata-view-model-wiz__metadata-text yt-core-attributed-string--white-space-pre-wrap yt-core-attributed-string--link-inherit-color" dir="auto" role="text">356K subscribers</span><span aria-hidden="true" class="yt-content-metadata-view-model-wiz__delimiter">•</span><span class="yt-core-attributed-string yt-content-metadata-view-model-wiz__metadata-text yt-core-attributed-string--white-space-pre-wrap yt-core-attributed-string--link-inherit-color" dir="auto" role="text"><span class="" style="" dir="auto">933 videos</span></span></div>
    // ".yt-content-metadata-view-model-wiz__metadata-row span:nth-of-type(1)",
    "#owner-sub-count",

    /* 以下は実際に効いているのか分からない */
    "#info #info-text > span.yt-view-count-renderer",
    "#info #info-text span.style-scope.yt-view-count-renderer",
    "#metadata-line span:nth-child(1)",
    ".ytd-reel-video-renderer #metadata-line span:nth-child(1)",
    ".ytd-grid-video-renderer #metadata-line span:nth-child(1)",
  ];

  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.style.display = "none";
    });
  });
}

// YouTubeはSPAなので、ページ内容の変更を検知する
const observer = new MutationObserver(() => {
  hideViews();
});

observer.observe(document.body, { childList: true, subtree: true });

// 初期実行
hideViews();
