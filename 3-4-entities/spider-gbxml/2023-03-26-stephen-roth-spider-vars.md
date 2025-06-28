# 2023-03-26 Stephen Roth ~  Spider Vars

Use of gbXML Elements in Spider gbXML Viewers

## Concept

The original Spider gbXML Viewer was written in 2017. It was a simple viewer that displayed the gbXML file in a 3D viewer. It was written in a few days and was never intended to be a production tool. It was a proof of concept that gbXML could be used to exchange building geometry and that it could be displayed in a 3D viewer.

The objective has always been to create a gbXML viewer that could be used to display the data from any gbXML element or attribute a user might want to investigate.

The following sections show how the gbXML elements RectangularGeometry, PlanarGeometry and ShellGeometry have been used in selected Spider gbXML Viewers.


## \<RectangularGeometry>

### Spider gbXML Viewer 0.17.08

Popup box displays
* all the attributes of the RectangularGeometry of the currently selected surface
* all the attributes of the RectangularGeometry of all the openings in the currently selected surface

### Spider gbXML Viewer R12 & earlier

Used to by Heads Up Display to display the surface area of the currently selected surface.


## \<PlanarGeometry>

### Spider gbXML Viewer 0.17.08

PlanarGeometry data is used to gather all the coordinates in all the PolyLoops in every Surface. This data is used to draw the surfaces and openings in the gbXML Viewer.

### Spider gbXML Viewer R12

PlanarGeometry data is used to gather all the coordinates in all the PolyLoops in every Surface. This data is used to draw the surfaces and openings in the gbXML Viewer.

## \<ShellGeometry>

ShellGeometry data appears to have been used inSpider gbXML Viewer R2 to gather surface data and it appears occasionally in other "sandbox" files, but is has not been exposed to the user regularly

### Spider gbXML Viewer 0.17.08

ShellGeometry data appears to be unused.

### Spider gbXML Viewer R12

ShellGeometry data appears to be unused.

