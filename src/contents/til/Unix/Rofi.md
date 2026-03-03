Rofi is basically an option chooser that we can:

- Supply options to the selector
- Choose how to deal with the option selected

There are some pre-built option modes that we can use as well such as:

- `drun`: A list of desktop applications that will run when selected
- `run`: A list of ALL command in the `/bin` directory
- `window`: List of opened window (in wayland, not sure about other GUI runtime)

But we can also made our own list using `dmenu` mode and supply the options ourselves and define the behaviors when selected.

We can also customize how the rofi look with CSS that has a specfic syntax. Refer to the rofi customization documentation for more information.