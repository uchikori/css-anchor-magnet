if (!CSS.supports("anchor-name: --anchor")) {
  /**
   * Run an event listener on the list.
   * Set the bounding properties based on closest element
   */
  const LIST = document.querySelector("ul");
  LIST.dataset.enhanced = true;
  let current;
  const UPDATE = (x, y) => {
    //引数として渡されたx,y座標に最も近いli要素のarticleを取得
    const ARTICLE = document
      .elementFromPoint(x, y)
      .closest("li")
      .querySelector("article");
    if (ARTICLE !== current) {
      current = ARTICLE;
      if (current) {
        const BOUNDS = current.getBoundingClientRect();
        LIST.style.setProperty("--top", BOUNDS.top);
        LIST.style.setProperty("--right", BOUNDS.right);
        LIST.style.setProperty("--bottom", BOUNDS.bottom);
        LIST.style.setProperty("--left", BOUNDS.left);
        LIST.style.setProperty("--height", BOUNDS.height);
        LIST.style.setProperty("--width", BOUNDS.width);
      }
    }
  };
  LIST.addEventListener("pointermove", function (event) {
    UPDATE(event.clientX, event.clientY);
  });
}
