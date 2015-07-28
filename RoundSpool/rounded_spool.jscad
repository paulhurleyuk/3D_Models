// title      : Spool
// author     : Paul Hurley

//	Spool for DrawBot stepper motor
//	Settings
sp = 0.1;		//	Spacing/Clearance
cl = 0.2;		//	Spacing/Clearance
th = 1;		//	Part thickness
fn = 64;		//	Facets

//	Motor shaft dimensions
msl = 16;	//	Shaft length
msd = 5+cl;	//	Shaft diameter
msr = msd/2;	//	Shaft radius
msf = 0.5+cl/2;		//	Flatside depth of shaft

//	Spool dimensions
srimd = 40;		//	Spool rim diameter
srr = srimd/2;	//	Spool rim radius
srth = 3;		//	Spool rim thickness
srh= 3;         // spool rim height
sbh= 3;         // spool bottom rim height

ssd = 30;		//	Spool shaft diameter
ssr = ssd/2;		//	Spool shaft radius
ssh = 8;        // spool shaft height
sbch = 4;		//	Spool bottom cube height
sbcw = 8;		//	Spool bottom cube width
ssnw = 1;		//	Spool shaft notch width
ssnh = 1;		//	Spool shaft notch height
ssnl = srimd+2;	//	Spool shaft notch length
sh = srh+ssh+sbh;		//	Spool height

// M3 dimensions
m3w = 2.4; // width of M3 nut
m3af = 5.5; // A/F M3 nut
m3ac=6.4; //M3 accross corners
m3d= 3; //M3 bolt diameter
m3depth=10;

//	Display
offset = 15;		//	Offset from one another
o = 4;		//


function main() {
  return [
      difference(
	  difference(
	  union(
	  cylinder({r:srr, h:sbh, fn: fn}),
      difference(
	translate([0,0,sbh],
	    cylinder({r: ssr,h: ssh, fn: fn})),
	translate([0,0,sbh+(ssh/2)],
	    torus({ ri:ssh/2,ro: ssr, fni:fn, fno:fn, roti:45 })
	)
	),
	translate([0,0,sbh+ssh],
	    cylinder({r:srr, h:srh, fn: fn}))
	    ),
	    translate([0,0,-1],
		    intersection(
		    cylinder({r: msr+sp, h: msl*3, fn: fn, center: false}),
			translate([msf,0,msl/2],
				cube({size: [(msr+sp)*2, (msr+sp)*2,msl*3+2], center: true})
				)
			)
		    )
		    ),
		    translate([-ssr/2,-m3af/2,sbh+(ssh/2)-(m3ac/2)], 
		cube({size: [m3w,m3af,srh+(ssh/2)+(m3ac/2)+5], center: false})
		),
		translate([0,0,sbh+(ssh/2)],
		rotate([0,-90,0],
		cylinder({r: m3d/2,h: srr*2, fn: fn})
		)))
	];
}
