Today I was fixing the tag search for the [https://practical-algo.com/blog](https://practical-algo.com/blog) page and change some of the UI string to Thai. However, I also know that [umami.is](http://umami.is), the site I used for simple analytic, definitely don’t like Thai string as a value for sure. After reading the Astro docs for a while, I found i18n which is one of the selling point of Astro to the perfect solution for this.

Instead of passing Thai string to used as a tag, I could just make this:

```jsx
export const TAGS = {
  "tag.all": "ทั้งหมด",
  "tag.algorithm": "เนื้อหาอัลกอ",
  "tag.posn": "เนื้อหา สอวน.",
  "tag.analysis": "วิเคราะห์โจทย์",
  "tag.toi": "TOI",
  "tag.insight-algo": "อัลกอเบื้องหลัง",
  "tag.math": "เลข",
  "tag.story": "เรื่องเล่า",
  "tag.share": "แชร์เครื่องมือ/ข่าวสาร",
  "tag.contest": "งานแข่ง",
  "tag.other": "อื่นๆ",
};
export type TagString = keyof typeof TAGS;
```

And from the UI perspective, I can just denote the id for the tag instead of the actual string

```jsx
<label for={tagName} class="block whitespace-nowrap" tabindex="0">
  {t(tagName)}
</label>
```

Honestly, seeing the UI filled with placeholder like `tag.math` or `nav.blog` felt weird but still a welcoming experience. It certainly give me a sense of understanding of where thing is and where I need to look for if I were to change the UI element. Additionally, I could just disable the translation function at anytime to figure out which UI element is related to each other as well as perform A/B testing by just supplying different UI translation dictionary.

All in all, I feel like I didn’t utilize this powerful feature enough in my first public work [practical-algo.com](http://practical-algo.com) and believe that when I made another site, possibly my personal website, this will be part of my setup for sure.

## Resources

[https://docs.astro.build/en/recipes/i18n/#translate-ui-strings](https://docs.astro.build/en/recipes/i18n/#translate-ui-strings)