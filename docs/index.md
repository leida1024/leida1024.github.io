# 文章

<nav class="content-shortcuts" aria-label="文章浏览入口" markdown>
[:material-shape-outline: 主题](topics/index.md)
[:material-calendar-clock: 时间归档](timeline/index.md)
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

可直接按分类筛选，并切换创建时间、更新时间或标题顺序。

<p class="post-empty" data-post-empty hidden>该分类下暂时没有文章。</p>
