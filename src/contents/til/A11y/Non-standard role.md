Most of the time, we don’t have much need for `role` attribute in HTML since semantic tag already handle most of the work for us.

For example, to indicate that part of the markup is code, we can just put it in the `<code>` tag, and we’re all set.

However, there’s some roles that you still need to specify yourself to make screen reader understand the context.

- tooltip: use on the tooltip container, then the trigger element need `aria-describedby``
- toolbar: more like the control panel with 3+ buttons/checkboxes. Used with `aria-label` and `aria-orientation`
- math: to group the math equation, preventing screen reader to go into the equation tree. Use with `aria-label` or `alt` if it’s an image.
- presentation/none: basically remove every semantic from the element.
- feed: like `role=list` but for a scrollable `articles` when the article can be added to the top/end of the list. When update, if the update code is on the main thread, need to set `aria-busy="true"` as well. Every article in the feed need to be focusable.
- note: similar to how `<figcaption>` to `<figure>`. it’s for additional note if there’s no other tag that fit the need.

So instead of just using `<div>` and `<span>` all the time, we can add these roles to add some semantic meaning to the accessibility tree.

## Resources

[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles)

[https://www.w3.org/WAI/ARIA/apg/practices/structural-roles/](https://www.w3.org/WAI/ARIA/apg/practices/structural-roles/)