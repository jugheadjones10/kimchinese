
# Overflow troubles

Quite some time was spent figuring out that there is a fundamental restriction to setting overflows: if overflow is set to
"hidden" for one axis, then overflow for the other axis cannot be set to "visible" - it won't work. I came across this while
trying to make slide__back visible as it slid in and out of view while in "small screen" mode. It kept sliding behind a white
background left by slide__rating-row as it also slid out of view. Even though I set overflow-y to "visible" on slide__back's
parent, slide__wrapper, it just wouldn't show. 

After some experimentation I figured out the overflow restriction. slide__wrapper's overflow-y was getting set to "auto" because
its overflow-x was "hidden". Once I removed slide__wrapper's overflow-x attribute, slide__back could be seen sliding in and out.
But a new problem surfaced, which is that in "big screen" mode slide__back slides out of view to the right; since slide__wrapper
no longer had an overflow-x: hidden rule, a big ugly scrollbar appeared at the bottom of the screen. Luckily slide__wrapper is
nested inside a "slide" div. By setting that "slide" div's overflow-x to "hidden", I got to my final solution.

In summary: 
.slide class has overflow-x: hidden
in order to hide slide__back as it slides out horizontally

.slide__wrapper has overflow-y: visible
in order to make is visible as it slides in and out of view in "small screen" mode

Ok, turns out this isn't enough. In situations where the contents of slide__back exceed its height, slide__wrapper's overflow-y:
visible method forces slide__wrapper to try to contain all the contents. This squishes the slide__rating-row and even pushes it
out completely if the contents are long enough. The solution lay in realizing that I only needed .slide__wrapper to have
overflow-y: visible in "small screen" mode. So I moved overflow-y: visible into the "small screen" media query, and made
slide__wrapper have overflow-y: hidden in normal mode.

But then that spawned another problem, which was that slide__wrapper would get these huge scrollbars even when slide__back hadn't
been revealed. So I made slide__wrapper overflow-y be "hidden" when slide__back is hidden, and only changed it to "auto" when the
back was revealed. 

That spawned yet another problem, which was that during the animation of slide__back sliding into view, since slide__wrapper had
already changed to "auto", 


