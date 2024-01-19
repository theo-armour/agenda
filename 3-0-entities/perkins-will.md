# Perkins Will

### 2018-05-06

* Chien Si issues

Radiance

Three.js Raycaster: > This method is too simplistic for the purposes of generating quantitative data for us.

Radiance manual pages
* Mo images
* No sample data


Solemma
* speed / aster than AVG??


### 2018-03-13

reuse knowledge
pentaho

fixed input
can't change topology on fly

OS server is the issue /

speed: missing daylighting
radiance

what are the metrics peeps should be looking at? pre-design

how to viz metrics
need to provide guidance / UE
teaching users

Ben's wishlist

John: simpler ignore climate: SBI

- Compare multiple /

space type needs foot/candle requirements


mailing list
github presence
various papers
	Goals
	Issues
	Admin

me
add WWR calcs to viewer
what type of window type

start simple / add complexity



My short term goals

* Build a gbxml2rad script
	* Runs from browser / saves locally
	* Translate a gbXML data into a Radiance .RAD files
		* While file or
		* individual spaces
		* User selected such as external walls + floors + roof
* Read rtrace output and apply to gbXML surfaces
	* Module in gbXML viewer that


Ben's Agenda

Introductions
Provide brief demo of current state of the Simulation Platform for Energy Efficient Design (SPEED).
Review research questions pertaining to the addition of Radiance-based CBDM to the SPEED platform.
	Appropriate metrics for early design
	Effective visualization of CBDM
	Tradeoffs between value and computational cost
Implementation requirements/strategy of (3) into SPEED
	How to leverage existing Radiance measure
	List functionality currently supported/not supported
	Integration points with SPEED
Establish preliminary scoping, roles, and next steps


## 2018-02-25

### Peeps

* Welle, Benjamin - organizer
	* Benjamin.Welle@perkinswill.com
	* https://github.com/bwelle
* Theo Armour - creator
	* t.armour@gmail.com
	* https://github.com/theo-armour
* Anton Szilasi
	* Anton.Szilasi@perkinswill.com
	* ajszilasi@gmail.com
	* https://github.com/antonszilasi
* Zack Rogers
	* rogers@daylightinginnovations.com
	* http://www.daylightinginnovations.com/
	* http://www.daylightinginnovations.com/spot-overview-flow-diagram
* John Mardaljevic
	* j.mardaljevic@lboro.ac.uk
	* http://www.lboro.ac.uk/departments/abce/staff/john-mardaljevic
	* http://climate-based-daylighting.com/doku.php?id=radiance2018
* Robert Guglielmetti ~ Mr Rumble strip
	* Robert.Guglielmetti@nrel.gov
	* Lighting Designer/Researcher/Software Developer at National Renewable Energy Laboratory
	* https://www.nrel.gov/research/robert-guglielmetti.html
	* http://www.rumblestrip.org/about/
	* rob.guglielmetti@gmail.com
	* https://github.com/rpg777
	* https://rawgit.com/rpg777/didactic-meow/master/presentations/2017.08_Radiance-Workshop/Guglielmetti%20-%20OpenStudio_Radiance_PAT.html

### Radiance Links

https://www.radiance-online.org//
https://www.radiance-online.org//pipermail/radiance-general/
https://en.wikipedia.org/wiki/Radiance_(software)

### The science
https://en.wikipedia.org/wiki/Radiance


## 2018-02-16


### Objectives

* Enable people all over the world/ of all abilities/ of all levels of resources / to plan, create and monitor better building outcomes
* Enhance energy skills/awareness
	* Enable beginners to move up the learning curve
	* Enable the pros to have access to smarter clients
* Reduce the damaging consequence of environmental events / Enhance the positive :
	* both 'to promote social progress and better standards of life in larger freedom' UDHR

In order to accomplish amazing things we need to be:

* accessible
* useful
* delightful

### Products
* Open source
* Authoritative - footnoted/referenced/documented / scientific method
	* https://en.wikipedia.org/wiki/Epistemology
	* https://en.wikipedia.org/wiki/Scholarly_method
	* https://en.wikipedia.org/wiki/Historical_method
	* https://en.wikipedia.org/wiki/Historical_criticism
* Fast/easy/cheap

### Process
* Dialog/decision-making is public/recorded/auditable
* Odd lifestyle/various time zones friendly
* Collaborative/team-smarts/consensual/

* <https://en.wikipedia.org/wiki/Politics_of_global_warming>
* <https://en.wikipedia.org/wiki/United_Nations_Framework_Convention_on_Climate_Change>
* <https://en.wikipedia.org/wiki/Climate_and_Development_Knowledge_Network>
	* build awareness of the need for, and benefits of, action among stakeholders, including key government ministries
	* mainstream and integrate climate change into national planning and development processes
	* strengthen the links between subnational and national government plans on climate change
	* build capacity to analyse, develop and implement climate policy
	* establish a mandate for coordinating actions around NDCs and driving their implementation
	* address resource constraints for developing and implementing climate change policy.[24]

***

On Adjacent Buildings Page:
Check 1 building
Offset X = 150
Offset Y= 150
Length= 50
Width = 50
Height = 80
Site Orientation = 0
Geometry Page:
Building Area = 50000
# Floors = 4
Floor Height = 10
Footprint Shape = H-Shape (which for us auto gives us…)
Length=126.77313820927752
Width=126.77313820927752
Thickness = 42.25771273642581
Perimeter Depth = 10
Orientation = 0
Envelope Page:
WWR = 40
# of Windows = 4
Overhang Depth = 2.5
Fin Depth = 0
Window Ratio = 0.3