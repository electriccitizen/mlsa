# SPEEDLOG

June 15, 2019 (Spinup): 100 (tcb)

July 12, 2019 (Initial theming): 99 (tcb)
First drop in pagespeed is due to new font loading using web-font-loader plugin. See 
about async options and/or self-hosted.

July 15, 2019 (Header theming): 98-100 on three audit runs
Averages out to 98, so didn't lose anything. I think the point difference can be chalked up to throttling speed/internet differences.

Accessibility: 98—Tooltip has invalid aria-describedby. Not sure how to fix as this is added by the tooltip script.

July 15, 2019 (Add Footer Elements): 90 on three audit runs
I would think that the 10 point drop in score comes from either the partner logo images, or the call to FontAwesome for the social icons, but removing them only raises the score 1pt.  Maybe a lighthouse bug?  Will need to do further testing. -- NOTE: Looks like this is a thing with my inspector lighthouse. Browser extension and testing by other devs gives 97-98.