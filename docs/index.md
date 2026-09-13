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
  <fieldset class="post-toolbar__group post-sort-options" data-post-sort>
    <legend>排序</legend>
    <div class="post-sort-options__choices" role="radiogroup" aria-label="文章排序方式">
      <label><input type="radio" name="post-sort" value="published-desc" checked>发布时间：新到旧</label>
      <label><input type="radio" name="post-sort" value="published-asc">发布时间：旧到新</label>
      <label><input type="radio" name="post-sort" value="updated-desc">更新时间：新到旧</label>
      <label><input type="radio" name="post-sort" value="updated-asc">更新时间：旧到新</label>
      <label><input type="radio" name="post-sort" value="title-asc">标题：升序（A 到 Z）</label>
      <label><input type="radio" name="post-sort" value="title-desc">标题：降序（Z 到 A）</label>
    </div>
  </fieldset>
  <span class="post-toolbar__count" data-post-count aria-live="polite"></span>
</div>

<p class="post-empty" data-post-empty hidden>该分类下暂时没有文章。</p>
