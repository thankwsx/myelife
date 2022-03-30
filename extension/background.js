const onCreated = () => {
  console.log("Created!");
};

browser.contextMenus.create(
  {
    id: "info-getter",
    title: "抓取", // browser.i18n.getMessage("contextMenuItemSelectionLogger"),
    contexts: ["page"],
  },
  onCreated
);

browser.contextMenus.onClicked.addListener(function (info, tab) {
  switch (info.menuItemId) {
    case "info-getter":
      console.log(info);
      break;
  }
});
