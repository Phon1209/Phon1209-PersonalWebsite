“Skip to main content” button is necessary for the keyboard and screen reader user to navigate the website; otherwise they would have to tab through the long list of navigation links before reaching the main content.

But since this is not the problem for sighted person, and aesthetic is a concern, WebAIM recommend that

- be hidden by default
- be accessible to keyboard navigation
- become prominently visible when it is focused
- properly set focus to the main content area when activated

Then the button wording can varies but it should convey the meaning of “skipping to the main content”

<aside> 💡

Note

We can have more than one “skip” button, but generally speaking one should be enough. Having more would just clutter the page anyway.

</aside>

To implement we can add this link tag that will move the content visually to the `#main-content` :

```html
<a href="#main-content" id="skip-content">{t("common.skip-to-content")}</a>
```

But if you want to focus the main content too, then add `tabindex=-1` to the main content as well. This will make the content focusable but not index the natural tabindex.

```html
<main id="main-content" tabindex="-1">
```

This way you don’t have to add JavaScript to the code since it’s already supported by all browser.

<aside> 💡

Note

If you don’t have the `tabindex` the focus will still shift but there will be visual feedback.

</aside>

## Resources

[https://webaim.org/techniques/skipnav/](https://webaim.org/techniques/skipnav/)

[https://www.a11y-collective.com/blog/skip-to-main-content/](https://www.a11y-collective.com/blog/skip-to-main-content/)