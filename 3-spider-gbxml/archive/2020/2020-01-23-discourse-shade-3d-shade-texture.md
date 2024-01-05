# 2D to 3D shape: shade and texture

This post is a follow on to the good question posed by @Przemyslaw_Niemiec

[2D object in 3D space (by Vertices)]( https://discourse.threejs.org/t/2d-object-in-3d-space-by-vertices/2795 )

An excellent answer is provided by @prisoner849 and it is visible here:

https://jsfiddle.net/prisoner849/gnp5ktjh/

In his June 2018 update to the question, @Przemyslaw_Niemiec asks:

> Everything is ok, when I use THREE.MeshBasicMaterial, but when i try to use a texture
> the object has a solid color instead the texture.
> How to use the texture?

So far there has been no response to this aspect of the question. It is also worth noting that shading seems to be broken as well. All meshes appear with the same color and shade regardless of their rotation.

You may observe the shade and texture issues via this fiddle:

https://jsfiddle.net/theo/5pxt6oe4/

BTW, I am using prisoner849's code in a project still in early stage of development here:

https://www.ladybug.tools/honeybee-viewer/viewer-3d/

( In the demo, only the files starting with "model" display anything in 3D. )