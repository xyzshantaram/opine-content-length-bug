# Opine Content-Length mismatch bug

This is a reproduction of
[cmorten/opine#151](https://github.com/cmorten/opine/issues/151).

In Chromium:

The image doesn't render and the console shows an error. Reloading the page a
few times makes it work for some reason.

![Chromium screenshot](https://i.imgur.com/Jq1tVg5.png)

In Firefox:

The image partially loads. There doesn't seem to be a console error, though, and
no amount of reloading fixes it.

![Firefox screenshot](https://i.imgur.com/VUbJv6l.png)
