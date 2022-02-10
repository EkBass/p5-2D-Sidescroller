# p5-2D-Sidescroller
Made for learning purposes by Kristian Virtanen.

# How to play:
Move your chraracter on screen by pressing UP (jump) or RIGHT arrow keys.
If you are at right and not pressing RIGHT arrow, player will slowly return to left corner of game area.

Each fram you survive, you gain 1 point. If you hit on zombie, you miss 250 points.
Number of zombies increases by one after every few seconds. So eventually you run out of points, due landing without hitting a zombie
becomes next to impossible.

# Dev point things
This is my first ever JavaScript program. Originally i did this with Microsoft SmallBasic and then turned to C#. For some reasons
it ended up as P5 JS game. Basicly p5 has pretty minimal contribution for this. Easily could have done without, but its there now.

# Whats missing, a possible todo for future
There is some hard coded numbers etc in this game. Such as image sizes etc. I learned that JS is not fast enough to load up
multiple images. When i created objects (player, actor) and tried to get the size of the image, i allways got 1 or 0.
This is because objects gets created faster than js can load the images.

I have some solutions for this, but not sure atleast yet which is the best approach. MAybe ill future come back to this for that.

Resetting the game by reloading whole page is either the nicest way to do it. But for now, its ok. As told, my first with JS ever so
something needs to leave here to fix.

- Kristian
