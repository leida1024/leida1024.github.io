# 主页

这里是一个可检索的个人技术记录，主要记录 Linux、FPGA、软件工具，以及少量阅读和站点实践。

<nav class="content-shortcuts" aria-label="文章浏览入口" markdown>
[:material-shape-outline: 专题](topics/index.md)
[:material-calendar-clock: 时间线](timeline/index.md)
[:material-information-outline: 关于](about.md)
</nav>

<div class="post-toolbar">
  <div class="post-toolbar__group">
    <label for="post-category">分类</label>
    <select id="post-category" data-post-category>
      <option value="">全部分类</option>
    </select>
  </div>
  <div class="post-toolbar__group">
    <label for="post-sort">排序</label>
    <select id="post-sort" data-post-sort>
      <option value="created-desc">最新创建</option>
      <option value="updated-desc">最近更新</option>
      <option value="created-asc">最早创建</option>
      <option value="title-asc">标题</option>
    </select>
  </div>
  <span class="post-toolbar__count" data-post-count aria-live="polite"></span>
</div>

<p class="post-empty" data-post-empty hidden>该分类下暂时没有文章。</p>
