// title      : Spool
// author     : Paul Hurley

//	Spool for small stepper motor (5mm shaft, 3mm double flats)
//	Settings
sp = 0.2;	A//	Spacing/Clearance
cl = 0.2;	//	Spacing/Clearance
th = 1.0;	//	Part thickness
fn = 64;	//	Facets

//	Motor shaft dimensions
msl = 10;	//	Shaft length
msd = 5+cl;	//	Shaft diameter
msr = msd/2;	//	Shaft radius
msf = 1+cl/2;		//	Flatside depth of shaft

//	Spool dimensions
srimd = 40;	//	Spool rim diameter
srr = srimd/2;	//	Spool rim radius
srth = 3;	//	Spool rim thickness
srh= 3;         //	spool rim height
sbh= 3;         // 	spool bottom rim height

ssd = 40;	//	Spool shaft diameter
ssr = ssd/2;	//	Spool shaft radius
ssh = 10;        // spool shaft height
sbch = 4;	//	Spool bottom cube height
sbcw = 8;	//	Spool bottom cube width
ssnw = 1;	//	Spool shaft notch width
ssnh = 1;	//	Spool shaft notch height
ssnl = srimd+2;	//	Spool shaft notch length
sh = srh+ssh+sbh;	//	Spool height
sa = 60;	//	Spool Shaft /rim angle

// bolt dimensions
m3w = 2.4+cl*2;	 // 	width ofnut nut
m3af = 5.5;	 //	A/F nut
m3ac=6.4+cl*2;	 //	accross corners
m3d= 3+cl;	 //	bolt diameter
m3depth=10;

//	Display
offset = 15;	//	Offset from one another
o = 4;		//	o=??


function main() {
  return [
      difference(
	  difference(
	  difference(
	  union(
	  cylinder({r:srr, h:sbh, fn: fn}),
      difference(
	translate([0,0,sbh],
	    cylinder({r: ssr,h: ssh, fn: fn})),
	translate([0,0,sbh+(ssh/2)],
	    torus({ ri:(ssh/2)/sin(sa),ro:ssr+((ssh/2)/tan(sa)), fni:fn, fno:fn, roti:45 })
	)
	),
	translate([0,0,sbh+ssh],
	    cylinder({r:srr, h:srh, fn: fn}))
	    ),
	    translate([0,0,-1],
		    intersection(
			intersection(
		    cylinder({r: msr+sp, h: msl*3, fn: fn, center: false}),
			translate([msf,0,msl/2],
				cube({size: [(msr+sp)*2, (msr+sp)*2,msl*3+2], center: true})
				),
			translate([-msf,0,msl/2],
				cube({size: [(msr+sp)*2, (msr+sp)*2,msl*3+2], center: true})
				))
			)
		    )
		    ),
		    translate([-(ssr+sp)/2,-(m3af+sp)/2,sbh+(ssh/2)-(m3ac/2)], 
		cube({size: [m3w+sp,m3af+sp,srh+(ssh/2)+(m3ac/2)+5+sp], center: false})
		),
		translate([0,0,sbh+(ssh/2)],
		rotate([0,-90,0],
		cylinder({r: m3d/2+sp,h: srr*2, fn: fn})
		))),
		cylinder({r1:msr+sp,r2:0,h:5,fn:fn}))
	];
}

